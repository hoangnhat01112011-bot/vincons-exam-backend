import React, { createContext, useContext, useState, useEffect } from 'react';

const STORAGE_KEY = 'food_cost_calculator_data';

const getPrevMonthKey = (monthStr) => {
  const [year, month] = monthStr.split('-').map(Number);
  if (month === 1) return `${year - 1}-12`;
  const m = month - 1;
  return `${year}-${m.toString().padStart(2, '0')}`;
};

const defaultData = {
  activeMonth: '2026-07',
  periods: {
    '2026-07': {
      members: [],
      dailyFoods: [],
      privateFoods: [],
      otherExpenses: []
    }
  },
  googleSheetUrl: ''
};

const AppStoreContext = createContext();

export function AppStoreProvider({ children }) {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Migration check: If it has members at the root, migrate to 2026-07
        if (parsed.members && !parsed.periods) {
          return {
            activeMonth: '2026-07',
            periods: {
              '2026-07': {
                members: parsed.members || [],
                dailyFoods: parsed.dailyFoods || [],
                otherExpenses: parsed.otherExpenses || []
              }
            }
          };
        }
        return parsed;
      } catch (e) {
        return defaultData;
      }
    }
    return defaultData;
  });

  const [isLoaded, setIsLoaded] = useState(false);

  // Tự động khôi phục dữ liệu từ file database.json trên ổ cứng khi khởi động
  useEffect(() => {
    fetch('/api/load')
      .then(res => {
        if (res.ok) return res.json();
        throw new Error('Chưa có database.json');
      })
      .then(serverData => {
        if (serverData && serverData.periods) {
          setData(serverData);
        }
      })
      .catch(err => {
        console.log('Khởi động với localStorage / Default:', err.message);
      })
      .finally(() => {
        setIsLoaded(true);
      });
  }, []);

  // Tự động lưu dữ liệu lên cả localStorage và file database.json trên ổ cứng
  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    
    fetch('/api/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .catch(err => console.error('Lỗi tự động sao lưu lên ổ cứng:', err));
  }, [data, isLoaded]);

  const setActiveMonth = (monthKey) => {
    setData(prev => {
      const newState = { ...prev, activeMonth: monthKey };
      if (!newState.periods[monthKey]) {
        // Auto clone members from previous month if creating a new month
        const prevKey = getPrevMonthKey(monthKey);
        const prevMembers = prev.periods[prevKey]?.members || [];
        
        // Clone names and keep them ready, reset meals/advances and other manual inputs
        const clonedMembers = prevMembers.map(m => ({
          id: Date.now().toString() + Math.random().toString().slice(2, 6),
          name: m.name,
          meals: 0,
          dailyMeals: {},
          advance: 0,
          arrears: 0,
          fundUsed: 0,
          prevMonthBalance: 0
        }));

        newState.periods[monthKey] = {
          members: clonedMembers,
          dailyFoods: [],
          privateFoods: [],
          otherExpenses: []
        };
      }
      return newState;
    });
  };

  const updateData = (key, value) => {
    setData(prev => {
      const activePeriod = prev.periods[prev.activeMonth];
      if (activePeriod && activePeriod.isLocked) {
        console.warn("Cannot update data: this period is locked.");
        return prev;
      }
      return {
        ...prev,
        periods: {
          ...prev.periods,
          [prev.activeMonth]: {
            ...activePeriod,
            [key]: value
          }
        }
      };
    });
  };

  const overwritePeriod = (monthKey, periodData) => {
    setData(prev => {
      const activePeriod = prev.periods[monthKey];
      if (activePeriod && activePeriod.isLocked) {
        console.warn("Cannot overwrite: this period is locked.");
        return prev;
      }
      return {
        ...prev,
        activeMonth: monthKey,
        periods: {
          ...prev.periods,
          [monthKey]: periodData
        }
      };
    });
  };

  const toggleLockMonth = (monthKey) => {
    setData(prev => {
      const period = prev.periods[monthKey];
      if (!period) return prev;
      return {
        ...prev,
        periods: {
          ...prev.periods,
          [monthKey]: {
            ...period,
            isLocked: !period.isLocked
          }
        }
      };
    });
  };

  // Tính toán đệ quy/lần lượt để lấy lũy kế từ tháng trước
  const calculateStatsForMonth = (monthKey, memo = {}) => {
    if (memo[monthKey]) return memo[monthKey];

    const periodData = data.periods[monthKey] || { members: [], dailyFoods: [], privateFoods: [], suppliesExpenses: [], transfers: [], otherExpenses: [] };
    const { members, dailyFoods, privateFoods = [], suppliesExpenses = [], transfers = [], otherExpenses } = periodData;

    const totalMeals = members.reduce((sum, m) => sum + (Number(m.meals) || 0), 0);
    const totalAdvance = members.reduce((sum, m) => sum + (Number(m.advance) || 0), 0);
    const totalFood = dailyFoods.reduce((sum, f) => sum + (Number(f.amount) || 0), 0);

    const totalSpices = otherExpenses.filter(e => e.type === 'gia_vi').reduce((sum, e) => sum + (Number(e.amount) || 0), 0);
    const totalDrinks = otherExpenses.filter(e => e.type === 'do_uong').reduce((sum, e) => sum + (Number(e.amount) || 0), 0);
    const totalGasRice = otherExpenses.filter(e => e.type === 'ga_gao').reduce((sum, e) => sum + (Number(e.amount) || 0), 0);
    const totalSupplies = otherExpenses.filter(e => e.type === 'do_dung').reduce((sum, e) => sum + (Number(e.amount) || 0), 0);

    const totalEatingCost = totalFood + totalSpices + totalDrinks + totalGasRice;
    const costPerMeal = totalMeals > 0 ? totalEatingCost / totalMeals : 0;
    
    const numMembers = members.length;
    const suppliesPerPerson = numMembers > 0 ? totalSupplies / numMembers : 0;

    // Lấy số dư từ tháng trước
    const prevMonthKey = getPrevMonthKey(monthKey);
    let prevMonthStats = null;
    if (data.periods[prevMonthKey]) {
      prevMonthStats = calculateStatsForMonth(prevMonthKey, memo);
    }

    const normalizeName = (name) => {
      if (!name) return '';
      return name.normalize('NFC').toLowerCase().trim();
    };

    // Tính toán chi phí ăn riêng cho từng thành viên
    const privateFoodCosts = {};
    members.forEach(m => privateFoodCosts[m.id] = 0);
    privateFoods.forEach(pf => {
      if (pf.members && pf.members.length > 0) {
        const splitAmount = (Number(pf.amount) || 0) / pf.members.length;
        pf.members.forEach(memberId => {
          if (privateFoodCosts[memberId] !== undefined) {
            privateFoodCosts[memberId] += splitAmount;
          }
        });
      }
    });

    // Tính toán tổng số tiền chuyển khoản của từng thành viên (chuẩn hóa Unicode chính xác)
    const transferCosts = {};
    members.forEach(m => transferCosts[normalizeName(m.name)] = 0);
    transfers.forEach(t => {
      const key = normalizeName(t.name);
      if (transferCosts[key] !== undefined) {
        transferCosts[key] += Number(t.amount) || 0;
      }
    });

    const memberStats = members.map(m => {
      const transferCost = transferCosts[normalizeName(m.name)] || 0;
      const meals = Number(m.meals) || 0;
      const advance = (transfers && transfers.length > 0) ? transferCost : (Number(m.advance) || 0);
      
      let prevMonthBalance = Number(m.prevMonthBalance) || 0;
      // Tự động thông suốt dữ liệu: Nếu tháng trước có dữ liệu của người này, lấy số Dư/Thiếu cuối kỳ của họ
      if (prevMonthStats) {
        const prevMember = prevMonthStats.memberStats.find(pm => normalizeName(pm.name) === normalizeName(m.name));
        if (prevMember) {
          prevMonthBalance = prevMember.finalPayment; // finalPayment của tháng trước chính là Lũy kế tháng này
        }
      }

      const arrears = Number(m.arrears) || 0;
      const fundUsed = Number(m.fundUsed) || 0;
      
      // Kiểm tra xem đã đóng quỹ ở các tháng trước chưa
      const sortedMonths = Object.keys(data.periods).sort();
      const currentMonthIdx = sortedMonths.indexOf(monthKey);
      const previousMonths = currentMonthIdx > 0 ? sortedMonths.slice(0, currentMonthIdx) : [];
      let hasPaidFundPreviously = false;
      
      if (fundUsed > 0) {
        for (const pmKey of previousMonths) {
          const pmPeriod = data.periods[pmKey];
          if (pmPeriod && pmPeriod.members) {
            const match = pmPeriod.members.find(x => normalizeName(x.name) === normalizeName(m.name));
            if (match && (Number(match.fundUsed) || 0) > 0) {
              hasPaidFundPreviously = true;
              break;
            }
          }
        }
      }
      
      const eatingCost = meals * costPerMeal;
      const privateFoodCost = privateFoodCosts[m.id] || 0;
      
      // Công thức chuẩn từ Excel:
      // Số dư cuối kỳ = (Dư đầu kỳ + Đã ứng) - (Tiền ăn + Tiền đồ dùng + Truy thu + Đóng quỹ + Ăn riêng)
      // Dương = Thừa tiền, Âm = Nợ tiền
      const totalExpenses = eatingCost + suppliesPerPerson + arrears + fundUsed + privateFoodCost;
      const finalPayment = prevMonthBalance + advance - totalExpenses; 
      
      // balance is unused or we can keep it as is if needed, but let's redefine it to match finalPayment
      const balance = finalPayment;

      return {
        ...m,
        advance, // Ghi đè bằng tổng tiền đã ứng cộng với số tiền đã chuyển khoản!
        prevMonthBalance, // ghi đè bằng giá trị đã tính toán tự động
        eatingCost,
        privateFoodCost,
        transferCost,
        hasPaidFundPreviously,
        suppliesCost: suppliesPerPerson,
        totalExpenses,
        finalPayment,
        balance
      };
    });

    // Tính toán quỹ đồ dùng tích lũy
    const spentOnSupplies = suppliesExpenses.reduce((sum, e) => sum + (Number(e.amount) || 0), 0);
    const spentOnExtraFood = Number(periodData.spentOnExtraFood) || 0;
    const fundCollectedThisMonth = members.reduce((sum, m) => sum + (Number(m.fundUsed) || 0), 0);
    
    let prevMonthRemainingFund = 0;
    if (prevMonthStats) {
      prevMonthRemainingFund = prevMonthStats.remainingFund || 0;
    }
    const remainingFund = prevMonthRemainingFund + fundCollectedThisMonth - spentOnSupplies - spentOnExtraFood;

    const stats = {
      totalMeals,
      totalAdvance,
      totalFood,
      totalSpices,
      totalDrinks,
      totalGasRice,
      totalSupplies,
      totalEatingCost,
      costPerMeal,
      suppliesPerPerson,
      spentOnSupplies,
      spentOnExtraFood,
      fundCollectedThisMonth,
      prevMonthRemainingFund,
      remainingFund,
      memberStats
    };

    memo[monthKey] = stats;
    return stats;
  };

  const getActiveData = () => data.periods[data.activeMonth] || { members: [], dailyFoods: [], privateFoods: [], otherExpenses: [] };

  const updateGoogleSheetUrl = (url) => {
    setData(prev => ({
      ...prev,
      googleSheetUrl: url
    }));
  };

  const store = {
    data,
    activeData: getActiveData(),
    activeMonth: data.activeMonth,
    setActiveMonth,
    updateData,
    overwritePeriod,
    toggleLockMonth,
    updateGoogleSheetUrl,
    stats: calculateStatsForMonth(data.activeMonth)
  };

  return <AppStoreContext.Provider value={store}>{children}</AppStoreContext.Provider>;
}

export function useAppStore() {
  const context = useContext(AppStoreContext);
  if (!context) {
    throw new Error('useAppStore must be used within an AppStoreProvider');
  }
  return context;
}
