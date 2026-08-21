import * as XLSX from 'xlsx';

export const exportToExcel = (stats, data, activeMonth) => {
  // 1. Tạo Sheet 1: BẢNG CHI TIẾT TIỀN ĂN (Như mẫu)
  // Lấy danh sách các ngày
  const days = new Set();
  data.members.forEach(m => {
    if (m.dailyMeals) {
      Object.keys(m.dailyMeals).forEach(d => days.add(d));
    }
  });
  
  const sortedDays = Array.from(days).sort((a, b) => {
    const numA = Number(a);
    const numB = Number(b);
    if (numA > 20 && numB <= 20) return -1;
    if (numA <= 20 && numB > 20) return 1;
    return numA - numB;
  });

  const wsData = [];
  
  // Row 1: Header gộp tháng
  const header1 = ['TT', 'Họ và tên'];
  sortedDays.forEach(() => header1.push('Tháng')); 
  // Add remaining columns to header1 to maintain length
  ['Tổng xuất ăn', 'Đơn giá', 'Thành tiền', 'Lũy kế tháng trước', 'Đã ứng(CK)', 'Truy thu', 'Thu quỹ đồ dùng', 'Thanh toán'].forEach(() => header1.push(''));
  wsData.push(header1);

  // Row 2: Header chi tiết
  const header2 = ['TT', 'Họ và tên', ...sortedDays, 'Tổng xuất ăn', 'Đơn giá', 'Thành tiền', 'Lũy kế tháng trước', 'Đã ứng(CK)', 'Truy thu', 'Thu quỹ đồ dùng', 'Thanh toán'];
  wsData.push(header2);

  // Dữ liệu thành viên
  stats.memberStats.forEach((m, idx) => {
    const row = [idx + 1, m.name];
    
    // Days
    sortedDays.forEach(d => {
      row.push(m.dailyMeals?.[d] || '');
    });
    
    // Financials
    row.push(m.meals);
    row.push(stats.costPerMeal);
    row.push(m.eatingCost);
    row.push(m.prevMonthBalance || '');
    row.push(m.advance || '');
    row.push(m.arrears || '');
    row.push(m.fundUsed || '');
    row.push(m.finalPayment); // Dư/Thiếu
    
    wsData.push(row);
  });

  // Dòng Tổng Cộng
  const totalRow = ['Tổng', ''];
  sortedDays.forEach(d => {
    let dayTotal = 0;
    stats.memberStats.forEach(m => {
      dayTotal += (m.dailyMeals?.[d] || 0);
    });
    totalRow.push(dayTotal);
  });
  
  totalRow.push(stats.totalMeals);
  totalRow.push('');
  totalRow.push(stats.totalEatingCost);
  
  // Sum other financial columns
  const sumPrev = stats.memberStats.reduce((s, m) => s + (m.prevMonthBalance || 0), 0);
  const sumArrears = stats.memberStats.reduce((s, m) => s + (m.arrears || 0), 0);
  const sumFund = stats.memberStats.reduce((s, m) => s + (m.fundUsed || 0), 0);
  const sumFinal = stats.memberStats.reduce((s, m) => s + (m.finalPayment || 0), 0);
  
  totalRow.push(sumPrev);
  totalRow.push(stats.totalAdvance);
  totalRow.push(sumArrears);
  totalRow.push(sumFund);
  totalRow.push(sumFinal);

  wsData.push(totalRow);

  const wsMembers = XLSX.utils.aoa_to_sheet(wsData);

  // Gộp ô (Merge) cho Tháng
  if (sortedDays.length > 0) {
    wsMembers['!merges'] = [
      { s: { r: 0, c: 2 }, e: { r: 0, c: 2 + sortedDays.length - 1 } }, // Merge "Tháng" qua các ngày
      { s: { r: 0, c: 0 }, e: { r: 1, c: 0 } }, // Merge TT
      { s: { r: 0, c: 1 }, e: { r: 1, c: 1 } }, // Merge Họ và tên
    ];
  }

  // 2. Sheet Chi phí Hàng ngày
  const foodReport = data.dailyFoods.map(f => ({
    'Ngày': f.date,
    'Số tiền (VNĐ)': f.amount,
    'Ghi chú': f.note
  }));
  const wsFood = XLSX.utils.json_to_sheet(foodReport);

  // 3. Sheet Chi phí Khác
  const typeMap = {
    'gia_vi': 'Gia vị',
    'do_uong': 'Đồ uống',
    'ga_gao': 'Ga, Gạo',
    'do_dung': 'Đồ dùng'
  };
  const otherReport = data.otherExpenses.map(e => ({
    'Ngày': e.date,
    'Loại chi phí': typeMap[e.type] || e.type,
    'Số tiền (VNĐ)': e.amount,
    'Ghi chú': e.note
  }));
  const wsOther = XLSX.utils.json_to_sheet(otherReport);

  // Tạo workbook và xuất file
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, wsMembers, 'Chi tiết Tiền ăn');
  XLSX.utils.book_append_sheet(wb, wsFood, 'Thực phẩm Hàng ngày');
  XLSX.utils.book_append_sheet(wb, wsOther, 'Chi phí Khác');

  const safeMonth = activeMonth ? activeMonth.replace('-', '_') : new Date().toLocaleDateString('vi-VN').replace(/\//g, '-');
  XLSX.writeFile(wb, `BaoCao_TienAn_Thang_${safeMonth}.xlsx`);
};
