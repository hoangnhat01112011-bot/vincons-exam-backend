const XLSX = require('xlsx');
const fs = require('fs');

const wb = XLSX.readFile('Thang 7 tiền ăn.xlsx');
const ws = wb.Sheets[wb.SheetNames[0]];
const data = XLSX.utils.sheet_to_json(ws, { header: 1 });

fs.writeFileSync('data_preview.json', JSON.stringify(data, null, 2), 'utf-8');
console.log('Done');
