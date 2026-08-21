import React, { useState, useRef, useMemo } from 'react';
import { useAppStore } from '../store.jsx';
import { Plus, Trash2, Upload, DatabaseBackup, X } from 'lucide-react';
import * as XLSX from 'xlsx';
import julyData from '../data/julyData.json';

const formatCurrency = (val) => {
  return new Intl.NumberFormat('vi-VN').format(val || 0) + ' ₫';
};

const CurrencyInput = ({ value, onChange, style, negativeRed }) => {
  const [isEditing, setIsEditing] = useState(false);
  
  if (isEditing) {
    return (
      <input 
        type="number" 
        className="input text-right"
        value={value} 
        onChange={(e) => onChange(Number(e.target.value) || 0)}
        onBlur={() => setIsEditing(false)}
        autoFocus
        style={style}
      />
    );
  }

  const isNegative = value < 0;
  const color = negativeRed && isNegative ? 'hsl(var(--destructive))' : 'inherit';
  
  return (
    <div 
      className="input text-right" 
      onClick={() => setIsEditing(true)}
      style={{ ...style, cursor: 'text', color, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
    >
      {formatCurrency(value)}
    </div>
  );
};

// Chuỗi ngày cố định từ 26 -> 25
const MONTH_DAYS = [26, 27, 28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

export default function Members() {
  const { activeData, updateData, overwritePeriod, stats } = useAppStore();
  
  const [name, setName] = useState('');
  const [editingModal, setEditingModal] = useState(null); // holds member object being edited

  const handleAdd = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newMember = {
      id: Date.now().toString(),
      name,
      meals: 0,
      dailyMeals: {},
      advance: 0,
      prevMonthBalance: 0,
      arrears: 0,
      fundUsed: 0
    };

    updateData('members', [...activeData.members, newMember]);
    setName('');
  };

  const handleDelete = (id) => {
    if (confirm('Bạn có chắc chắn muốn xóa thành viên này?')) {
      updateData('members', activeData.members.filter(m => m.id !== id));
    }
  };

  const handleUpdate = (id, field, value) => {
    const updated = activeData.members.map(m => {
      if (m.id === id) {
        return { ...m, [field]: value };
      }
      return m;
    });
    updateData('members', updated);
  };

  // Hàm xử lý lưu từ Modal
  const handleSaveModal = (updatedMember) => {
    // Tính lại tổng xuất ăn từ dailyMeals
    let totalMeals = 0;
    Object.values(updatedMember.dailyMeals).forEach(val => {
      totalMeals += (Number(val) || 0);
    });
    updatedMember.meals = totalMeals;

    const updated = activeData.members.map(m => m.id === updatedMember.id ? updatedMember : m);
    updateData('members', updated);
    setEditingModal(null);
  };

  const fileInputRef = useRef(null);

  const handleImportExcel = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const bstr = evt.target.result;
        const wb = XLSX.read(bstr, { type: 'binary' });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        
        const rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: null });

        let nameColIdx = -1;
        let totalColIdx = -1;
        let headerRowIdx = -1;

        let advanceColIdx = -1;
        let prevMonthColIdx = -1;
        let arrearsColIdx = -1;
        let fundColIdx = -1;
        const dayColIndices = {}; 

        for (let i = 0; i < Math.min(rows.length, 10); i++) {
          const row = rows[i];
          if (!row) continue;
          
          for (let j = 0; j < row.length; j++) {
            const cellVal = String(row[j] || '').toLowerCase().trim();
            if (cellVal.includes('họ tên') || cellVal.includes('họ và tên') || cellVal === 'tên' || cellVal === 'name') {
              nameColIdx = j;
              if (headerRowIdx === -1) headerRowIdx = i; 
            }
            if (cellVal === 'tổng' || cellVal.includes('tổng số') || cellVal === 'tổng xuất ăn') totalColIdx = j;
            if (cellVal.includes('ứng') || cellVal.includes('advance')) advanceColIdx = j;
            if (cellVal.includes('lũy kế')) prevMonthColIdx = j;
            if (cellVal.includes('truy thu')) arrearsColIdx = j;
            if (cellVal.includes('đóng quỹ') || cellVal.includes('thu quỹ') || cellVal.includes('quỹ')) fundColIdx = j;
            
            const numMatch = cellVal.match(/^(\d{1,2})$/);
            if (numMatch) {
              const dayNum = parseInt(numMatch[1], 10);
              if (dayNum >= 1 && dayNum <= 31) {
                dayColIndices[j] = String(dayNum);
              }
            }
          }
        }

        if (nameColIdx === -1) {
          alert('Không tìm thấy cột "Họ và tên". Vui lòng kiểm tra lại!');
          return;
        }

        const newMembers = [];
        for (let i = headerRowIdx + 1; i < rows.length; i++) {
          const row = rows[i];
          if (!row || row.length === 0) continue;
          
          const nameVal = row[nameColIdx];
          if (!nameVal || String(nameVal).trim() === '') continue;
          
          const nameStr = String(nameVal).trim();
          if (nameStr.toLowerCase().startsWith('tổng')) continue;

          let advance = advanceColIdx !== -1 ? Number(row[advanceColIdx]) || 0 : 0;
          let prevMonthBalance = prevMonthColIdx !== -1 ? Number(row[prevMonthColIdx]) || 0 : 0;
          let arrears = arrearsColIdx !== -1 ? Number(row[arrearsColIdx]) || 0 : 0;
          let fundUsed = fundColIdx !== -1 ? Number(row[fundColIdx]) || 0 : 0;

          const dailyMeals = {};
          let meals = 0;
          Object.keys(dayColIndices).forEach(colIdx => {
            const dayStr = dayColIndices[colIdx];
            const val = Number(row[colIdx]);
            if (!isNaN(val) && row[colIdx] !== null && row[colIdx] !== '') {
              dailyMeals[dayStr] = val;
              meals += val;
            }
          });

          if (Object.keys(dailyMeals).length === 0 && totalColIdx !== -1) {
            meals = Number(row[totalColIdx]) || 0;
          } else if (totalColIdx !== -1) {
            meals = Number(row[totalColIdx]) || meals;
          }

          newMembers.push({
            id: Date.now().toString() + i + Math.random().toString().slice(2, 6),
            name: nameStr,
            meals,
            dailyMeals,
            advance,
            prevMonthBalance,
            arrears,
            fundUsed
          });
        }

        if (confirm(`Đã tìm thấy ${newMembers.length} thành viên.\nBạn có muốn XÓA danh sách cũ và THAY THẾ bằng dữ liệu từ Excel không?`)) {
          updateData('members', newMembers);
        } else {
          updateData('members', [...activeData.members, ...newMembers]);
        }
      } catch (error) {
        alert('Có lỗi khi đọc file Excel. Vui lòng kiểm tra lại định dạng file!');
      }
      e.target.value = '';
    };
    reader.readAsBinaryString(file);
  };

  const handleSyncJulyLegacy = () => {
    if (confirm('Bạn có chắc muốn ghi đè toàn bộ dữ liệu hiện tại bằng dữ liệu MẪU CŨ của Tháng 7 không?\nThao tác này sẽ đặt lại tháng hiện tại về 07/2026 và nạp dữ liệu cũ.')) {
      overwritePeriod('2026-07', julyData);
      alert('Đồng bộ thành công! Hiện tại hệ thống đang hiển thị Tháng 07/2026 với số liệu cũ.');
    }
  };

  return (
    <div className="members-container">
      {/* Modal Nhập chi tiết xuất ăn theo ngày */}
      {editingModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
          backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1000,
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <div className="card" style={{ width: '90%', maxWidth: '800px', maxHeight: '90vh', overflowY: 'auto' }}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="card-title m-0">Chi tiết xuất ăn: {editingModal.name}</h3>
              <button className="btn-outline" style={{ padding: '0.25rem' }} onClick={() => setEditingModal(null)}>
                <X size={20} />
              </button>
            </div>
            
            <div className="form-group mb-6">
              <label className="font-medium">Họ và tên</label>
              <input 
                type="text" 
                className="input" 
                value={editingModal.name}
                onChange={e => setEditingModal({...editingModal, name: e.target.value})}
              />
            </div>

            <div className="mb-4">
              <label className="font-medium block mb-2">Số xuất ăn từng ngày (Từ ngày 26 đến 25)</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(60px, 1fr))', gap: '8px' }}>
                {MONTH_DAYS.map(day => (
                  <div key={day} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.8rem', color: 'hsl(var(--muted-foreground))', marginBottom: '4px' }}>Ng {day}</div>
                    <input 
                      type="number"
                      className="input text-center"
                      value={editingModal.dailyMeals[day] || ''}
                      onChange={e => {
                        const val = e.target.value;
                        setEditingModal({
                          ...editingModal,
                          dailyMeals: {
                            ...editingModal.dailyMeals,
                            [day]: val ? Number(val) : ''
                          }
                        });
                      }}
                      style={{ padding: '0.25rem' }}
                      step="0.5"
                      min="0"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-6">
              <button className="btn btn-outline" onClick={() => setEditingModal(null)}>Hủy bỏ</button>
              <button className="btn btn-primary" onClick={() => handleSaveModal(editingModal)}>Lưu & Cập nhật Tổng</button>
            </div>
          </div>
        </div>
      )}

      <div className="card mb-6">
        <h2 className="card-title">Quản lý Thành viên & Xuất ăn</h2>
        <div className="flex justify-between items-start mb-4">
          <p className="card-description">Quản lý tổng xuất ăn, ứng, quỹ (Các thông tin này sẽ hiển thị lên báo cáo)</p>
          <div className="flex gap-2">
            <button className="btn btn-outline" style={{ borderColor: 'hsl(var(--primary))', color: 'hsl(var(--primary))' }} onClick={handleSyncJulyLegacy}>
              <DatabaseBackup size={18} />
              Đồng bộ Tháng 7 (File cũ)
            </button>
            <input 
              type="file" 
              accept=".xlsx, .xls" 
              style={{ display: 'none' }} 
              ref={fileInputRef}
              onChange={handleImportExcel}
            />
            <button className="btn btn-outline" onClick={() => fileInputRef.current.click()}>
              <Upload size={18} />
              Nhập từ Excel
            </button>
          </div>
        </div>
        
        <form onSubmit={handleAdd} className="flex-row">
          <div className="form-group" style={{ flex: 1, marginBottom: 0 }}>
            <input 
              type="text" 
              className="input" 
              placeholder="Nhập họ tên thành viên mới..."
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ height: '38px' }}>
            <Plus size={18} /> Thêm người mới
          </button>
        </form>
      </div>

      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        {activeData.members.length === 0 ? (
          <div className="empty-state">
            Chưa có thành viên nào. Hãy thêm thành viên hoặc Import từ Excel.
          </div>
        ) : (
          <div className="table-container" style={{ maxHeight: 'calc(100vh - 250px)', overflow: 'auto' }}>
            <table className="table" style={{ whiteSpace: 'nowrap', fontSize: '0.85rem' }}>
              <thead style={{ position: 'sticky', top: 0, backgroundColor: 'hsl(var(--muted))', zIndex: 10 }}>
                <tr>
                  <th style={{ backgroundColor: 'hsl(var(--muted))' }}>TT</th>
                  <th style={{ backgroundColor: 'hsl(var(--muted))', minWidth: '150px' }}>Họ và tên</th>
                  <th className="text-center">Tổng xuất ăn</th>
                  <th className="text-right">Đơn giá</th>
                  <th className="text-right">Thành tiền</th>
                  <th className="text-right">Lũy kế tháng trước</th>
                  <th className="text-right">Đã ứng(CK)</th>
                  <th className="text-right">Truy thu</th>
                  <th className="text-right">Thu quỹ đồ dùng</th>
                  <th className="text-right font-bold">Thanh toán</th>
                  <th className="text-center">Xóa</th>
                </tr>
              </thead>
              <tbody>
                {stats.memberStats.map((m, idx) => (
                  <tr key={m.id}>
                    <td>{idx + 1}</td>
                    <td>
                      <button 
                        className="btn-outline" 
                        style={{ padding: '0.35rem 0.5rem', width: '100%', minWidth: '130px', textAlign: 'left', border: '1px dashed hsl(var(--border))', fontWeight: 500 }}
                        onClick={() => setEditingModal(JSON.parse(JSON.stringify(m)))}
                        title="Click để nhập chi tiết xuất ăn từng ngày"
                      >
                        {m.name}
                      </button>
                    </td>
                    
                    <td className="text-center">
                      <input 
                        type="number"
                        className="input text-center"
                        value={m.meals}
                        onChange={(e) => handleUpdate(m.id, 'meals', Number(e.target.value))}
                        style={{ padding: '0.35rem', width: '100%', minWidth: '70px', fontSize: '0.85rem' }}
                        step="0.5"
                        min="0"
                      />
                    </td>
                    
                    <td className="text-right text-primary font-medium">{formatCurrency(stats.costPerMeal)}</td>
                    <td className="text-right font-medium">{formatCurrency(m.eatingCost)}</td>
                    
                    <td className="text-right">
                      <CurrencyInput 
                        value={m.prevMonthBalance} 
                        onChange={(val) => handleUpdate(m.id, 'prevMonthBalance', val)}
                        style={{ padding: '0.35rem', width: '100%', minWidth: '100px', fontSize: '0.85rem' }}
                        negativeRed={true}
                      />
                    </td>
                    
                    <td className="text-right">
                      <CurrencyInput 
                        value={m.advance} 
                        onChange={(val) => handleUpdate(m.id, 'advance', val)}
                        style={{ padding: '0.35rem', width: '100%', minWidth: '90px', fontSize: '0.85rem' }}
                      />
                    </td>
                    
                    <td className="text-right">
                      <CurrencyInput 
                        value={m.arrears} 
                        onChange={(val) => handleUpdate(m.id, 'arrears', val)}
                        style={{ padding: '0.35rem', width: '100%', minWidth: '90px', fontSize: '0.85rem' }}
                      />
                    </td>
                    
                    <td className="text-right">
                      <CurrencyInput 
                        value={m.fundUsed} 
                        onChange={(val) => handleUpdate(m.id, 'fundUsed', val)}
                        style={{ padding: '0.35rem', width: '100%', minWidth: '90px', fontSize: '0.85rem' }}
                      />
                    </td>
                    
                    <td className="text-right font-bold" style={{ color: m.finalPayment < 0 ? 'hsl(var(--destructive))' : 'inherit' }}>
                      {formatCurrency(m.finalPayment)}
                    </td>
                    <td className="text-center">
                      <button className="btn-danger" onClick={() => handleDelete(m.id)} title="Xóa" style={{ padding: '0.25rem' }}>
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
