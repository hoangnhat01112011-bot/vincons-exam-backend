const fs = require('fs');

const raw = JSON.parse(fs.readFileSync('data_preview.json', 'utf8'));

// Dòng 2 chứa các ngày (26, 27... 25)
const dayRow = raw[2];
const dayIndices = {};
for (let i = 2; i <= 31; i++) {
  if (dayRow[i]) {
    dayIndices[i] = String(dayRow[i]);
  }
}

const members = [];
let totalMeals = 0;

for (let i = 3; i < raw.length; i++) {
  const row = raw[i];
  if (!row || !row[1]) continue;
  
  const name = String(row[1]).trim();
  if (name.toLowerCase().startsWith('tổng')) continue; // Skip total row

  const dailyMeals = {};
  let meals = 0;
  for (const [colIdx, dayStr] of Object.entries(dayIndices)) {
    const val = Number(row[colIdx]);
    if (!isNaN(val) && val > 0) {
      dailyMeals[dayStr] = val;
      meals += val;
    }
  }

  // Fallback to Tổng column (index 32)
  if (meals === 0 && row[32]) {
    meals = Number(row[32]) || 0;
  }

  const prevMonthBalance = Number(row[35]) || 0; // Lũy kế tháng trước
  const arrears = Number(row[36]) || 0;          // Truy thu
  const fundUsed = Number(row[37]) || 0;         // Đóng quỹ đồ dùng
  const advance = Number(row[38]) || 0;          // Đã ứng trước

  members.push({
    id: `m_${Date.now()}_${i}`,
    name,
    meals,
    dailyMeals,
    advance,
    prevMonthBalance,
    arrears,
    fundUsed
  });

  totalMeals += meals;
}

// Add a dailyFood entry to make the costPerMeal exactly 32000
const dailyFoods = [{
  id: 'food_1',
  date: '2026-07-25',
  amount: totalMeals * 32000,
  note: 'Tổng chi phí thực phẩm Tháng 7 (Đồng bộ)'
}];

const julyData = {
  members,
  dailyFoods,
  otherExpenses: []
};

fs.mkdirSync('src/data', { recursive: true });
fs.writeFileSync('src/data/julyData.json', JSON.stringify(julyData, null, 2), 'utf8');
console.log('Successfully generated src/data/julyData.json');
