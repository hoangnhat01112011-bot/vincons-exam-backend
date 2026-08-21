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
      otherExpenses: []
    }
  }
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

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

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
          otherExpenses: []
        };
      }
      return newState;
    });
  };

  const updateData = (key, value) => {
    setData(prev => {
      const activePeriod = prev.periods[prev.activeMonth];
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
    setData(prev => ({
      ...prev,
      activeMonth: monthKey,
      periods: {
        ...prev.periods,
        [monthKey]: periodData
      }
    }));
  };

  // Tính toán đệ quy/lần lượt để lấy lũy kế từ tháng trước
  const calculateStatsForMonth = (monthKey, memo = {}) => {
    if (memo[monthKey]) return memo[monthKey];

    const periodData = data.periods[monthKey] || { members: [], dailyFoods: [], otherExpenses: [] };
    const { members, dailyFoods, otherExpenses } = periodData;

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

    const memberStats = members.map(m => {
      const meals = Number(m.meals) || 0;
      const advance = Number(m.advance) || 0;
      
      let prevMonthBalance = Number(m.prevMonthBalance) || 0;
      // Tự động thông suốt dữ liệu: Nếu tháng trước có dữ liệu của người này, lấy số Dư/Thiếu cuối kỳ của họ
      if (prevMonthStats) {
        const prevMember = prevMonthStats.memberStats.find(pm => pm.name.toLowerCase() === m.name.toLowerCase());
        if (prevMember) {
          prevMonthBalance = prevMember.finalPayment; // finalPayment của tháng trước chính là Lũy kế tháng này
        }
      }

      const arrears = Number(m.arrears) || 0;
      const fundUsed = Number(m.fundUsed) || 0;
      
      const eatingCost = meals * costPerMeal;
      
      // Công thức chuẩn từ Excel:
      // Số dư cuối kỳ = (Dư đầu kỳ + Đã ứng) - (Tiền ăn + Tiền đồ dùng + Truy thu + Đóng quỹ)
      // Dương = Thừa tiền, Âm = Nợ tiền
      const totalExpenses = eatingCost + suppliesPerPerson + arrears + fundUsed;
      const finalPayment = prevMonthBalance + advance - totalExpenses; 
      
      // balance is unused or we can keep it as is if needed, but let's redefine it to match finalPayment
      const balance = finalPayment;

      return {
        ...m,
        prevMonthBalance, // ghi đè bằng giá trị đã tính toán tự động
        eatingCost,
        suppliesCost: suppliesPerPerson,
        totalExpenses,
        finalPayment,
        balance
      };
    });

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
      memberStats
    };

    memo[monthKey] = stats;
    return stats;
  };

  const getActiveData = () => data.periods[data.activeMonth] || { members: [], dailyFoods: [], otherExpenses: [] };

  const store = {
    data,
    activeData: getActiveData(),
    activeMonth: data.activeMonth,
    setActiveMonth,
    updateData,
    overwritePeriod,
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
