import React, { useState, useRef, useMemo } from 'react';
import { useAppStore } from '../store.jsx';
import { Plus, Trash2, Upload, X, Download, Printer, Search } from 'lucide-react';
import * as XLSX from 'xlsx';

const formatCurrency = (val) => {
  return new Intl.NumberFormat('vi-VN').format(val || 0) + ' ₫';
};

const CurrencyInput = ({ value, onChange, style, negativeRed, positiveGreen }) => {
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
  let color = 'inherit';
  if (negativeRed && isNegative) {
    color = 'hsl(var(--destructive))';
  } else if (positiveGreen && value > 0) {
    color = '#10b981'; // Green color for positive CK amounts
  }
  
  return (
    <div 
      className="input text-right" 
      onClick={() => setIsEditing(true)}
      style={{ ...style, cursor: 'text', color, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', fontWeight: positiveGreen && value > 0 ? '600' : 'normal' }}
    >
      {formatCurrency(value)}
    </div>
  );
};

// Chuỗi ngày cố định từ 26 -> 25
const MONTH_DAYS = [26, 27, 28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

export default function Members() {
  const { data, activeData, updateData, stats } = useAppStore();
  
  const [name, setName] = useState('');
  const [editingModal, setEditingModal] = useState(null); // holds member object being edited
  const [showTrashModal, setShowTrashModal] = useState(false);

  const duplicateNames = useMemo(() => {
    const counts = {};
    if (activeData && activeData.members) {
      activeData.members.forEach(m => {
        const norm = m.name.normalize('NFC').toLowerCase().trim();
        counts[norm] = (counts[norm] || 0) + 1;
      });
    }
    return counts;
  }, [activeData?.members]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all'); // 'all', 'transferred', 'negative'

  const filteredMemberStats = useMemo(() => {
    return stats.memberStats.filter(m => {
      const matchesSearch = m.name.normalize('NFC').toLowerCase().includes(searchTerm.normalize('NFC').toLowerCase().trim());
      if (filterType === 'transferred') {
        return matchesSearch && m.advance > 0;
      }
      if (filterType === 'negative') {
        return matchesSearch && m.finalPayment < 0;
      }
      return matchesSearch;
    });
  }, [stats.memberStats, searchTerm, filterType]);

  const totals = useMemo(() => {
    let meals = 0;
    let eatingCost = 0;
    let prevMonthBalance = 0;
    let advance = 0;
    let arrears = 0;
    let fundUsed = 0;
    let finalPayment = 0;

    filteredMemberStats.forEach(m => {
      meals += Number(m.meals) || 0;
      eatingCost += Number(m.eatingCost) || 0;
      prevMonthBalance += Number(m.prevMonthBalance) || 0;
      advance += Number(m.advance) || 0;
      arrears += Number(m.arrears) || 0;
      fundUsed += Number(m.fundUsed) || 0;
      finalPayment += Number(m.finalPayment) || 0;
    });

    return { meals, eatingCost, prevMonthBalance, advance, arrears, fundUsed, finalPayment };
  }, [filteredMemberStats]);

  const handleExport = () => {
    exportToExcel(stats, data);
  };

  const handlePrint = () => {
    window.print();
  };

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
    if (activeData.isLocked) {
      alert('Không thể xóa: Kỳ kế toán này đã được khóa chỉnh sửa!');
      return;
    }
    const memberToDelete = activeData.members.find(m => m.id === id);
    if (!memberToDelete) return;

    if (confirm(`Bạn có chắc chắn muốn xóa thành viên ${memberToDelete.name}?`)) {
      const updatedMembers = activeData.members.filter(m => m.id !== id);
      const deletedMembers = activeData.deletedMembers || [];
      const updatedDeleted = [
        ...deletedMembers,
        { ...memberToDelete, deletedAt: new Date().toISOString() }
      ];
      
      updateData('members', updatedMembers);
      updateData('deletedMembers', updatedDeleted);
    }
  };

  const handleRestoreMember = (id) => {
    if (activeData.isLocked) {
      alert('Không thể khôi phục: Kỳ kế toán này đã được khóa chỉnh sửa!');
      return;
    }
    const deletedList = activeData.deletedMembers || [];
    const memberToRestore = deletedList.find(m => m.id === id);
    if (!memberToRestore) return;

    const updatedDeleted = deletedList.filter(m => m.id !== id);
    const { deletedAt, ...cleanMember } = memberToRestore; // loại bỏ timestamp xóa
    const updatedMembers = [...activeData.members, cleanMember];

    updateData('members', updatedMembers);
    updateData('deletedMembers', updatedDeleted);
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

          let advance = 0; // Khởi tạo bằng 0 để tránh cộng dồn nhân đôi với danh sách chuyển khoản
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
          <div>
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
            <button className="btn btn-outline" style={{ borderColor: 'hsl(var(--success))', color: 'hsl(var(--success))' }} onClick={handleExport}>
              <Download size={18} />
              Xuất Excel
            </button>
            <button className="btn btn-outline" onClick={handlePrint}>
              <Printer size={18} />
              In ấn
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
        {activeData.members.length > 0 && (
          <div className="p-4 flex justify-between items-center gap-4 flex-wrap" style={{ borderBottom: '1px solid hsl(var(--border))', backgroundColor: 'hsl(var(--muted) / 0.2)' }}>
            {/* Thanh tìm kiếm bên trái */}
            <div className="relative" style={{ minWidth: '280px', flex: 1, maxWidth: '400px' }}>
              <Search className="absolute left-3 top-1/2" style={{ transform: 'translateY(-50%)', color: 'hsl(var(--muted-foreground))' }} size={16} />
              <input 
                type="text" 
                className="input pl-9 w-full" 
                placeholder="Tìm kiếm thành viên theo tên..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ height: '36px' }}
              />
            </div>
            
            {/* Bộ lọc bên phải */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Lọc theo:</span>
              <div style={{ display: 'flex', gap: '0.35rem', backgroundColor: 'rgba(0, 0, 0, 0.05)', padding: '4px', borderRadius: '8px' }}>
                <button 
                  onClick={() => setFilterType('all')}
                  style={{ 
                    border: 'none', 
                    cursor: 'pointer', 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    padding: '0.4rem 0.8rem',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    borderRadius: '6px',
                    transition: 'all 0.2s',
                    backgroundColor: filterType === 'all' ? 'white' : 'transparent',
                    color: filterType === 'all' ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))',
                    boxShadow: filterType === 'all' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                  }}
                >
                  Tất cả ({stats.memberStats.length})
                </button>
                <button 
                  onClick={() => setFilterType('transferred')}
                  style={{ 
                    border: 'none', 
                    cursor: 'pointer', 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    padding: '0.4rem 0.8rem',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    borderRadius: '6px',
                    transition: 'all 0.2s',
                    backgroundColor: filterType === 'transferred' ? '#10b981' : 'transparent',
                    color: filterType === 'transferred' ? 'white' : 'hsl(var(--muted-foreground))',
                    boxShadow: filterType === 'transferred' ? '0 1px 3px rgba(0,0,0,0.15)' : 'none',
                  }}
                >
                  Đã chuyển khoản ({stats.memberStats.filter(m => m.advance > 0).length})
                </button>
                <button 
                  onClick={() => setFilterType('negative')}
                  style={{ 
                    border: 'none', 
                    cursor: 'pointer', 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    padding: '0.4rem 0.8rem',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    borderRadius: '6px',
                    transition: 'all 0.2s',
                    backgroundColor: filterType === 'negative' ? '#ef4444' : 'transparent',
                    color: filterType === 'negative' ? 'white' : 'hsl(var(--muted-foreground))',
                    boxShadow: filterType === 'negative' ? '0 1px 3px rgba(0,0,0,0.15)' : 'none',
                  }}
                >
                  Đang âm tiền ({stats.memberStats.filter(m => m.finalPayment < 0).length})
                </button>
              </div>

              {/* Nút thùng rác */}
              {(activeData.deletedMembers || []).length > 0 && (
                <button 
                  onClick={() => setShowTrashModal(true)}
                  style={{
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    color: '#ef4444',
                    border: '1px solid rgba(239, 68, 68, 0.2)',
                    padding: '0.4rem 0.8rem',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    height: '36px',
                    transition: 'all 0.2s'
                  }}
                  title="Xem danh sách thành viên vừa xóa để khôi phục"
                >
                  🗑️ Khôi phục đã xóa ({(activeData.deletedMembers || []).length})
                </button>
              )}
            </div>
          </div>
        )}

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
                  <th className="text-right">Truy thu (Bổ sung)</th>
                  <th className="text-right">Thu quỹ đồ dùng</th>
                  <th className="text-right font-bold">Thanh toán</th>
                  <th className="text-center">Xóa</th>
                </tr>
              </thead>
              <tbody>
                {filteredMemberStats.length === 0 ? (
                  <tr>
                    <td colSpan="11" className="text-center py-8 text-muted-foreground font-medium" style={{ fontSize: '0.9rem' }}>
                      Không tìm thấy thành viên nào khớp với bộ lọc hiện tại.
                    </td>
                  </tr>
                ) : (
                  filteredMemberStats.map((m, idx) => {
                  const norm = m.name.normalize('NFC').toLowerCase().trim();
                  const isDuplicate = duplicateNames[norm] > 1;
                  return (
                    <tr key={m.id}>
                      <td>{idx + 1}</td>
                      <td>
                        <button 
                          className="btn-outline" 
                          style={{ 
                            padding: '0.35rem 0.5rem', 
                            width: '100%', 
                            minWidth: '130px', 
                            textAlign: 'left', 
                            border: isDuplicate ? '1px solid #ef4444' : '1px dashed hsl(var(--border))', 
                            fontWeight: 500,
                            color: isDuplicate ? '#dc2626' : 'inherit',
                            backgroundColor: isDuplicate ? 'rgba(239, 68, 68, 0.05)' : 'transparent'
                          }}
                          onClick={() => setEditingModal(JSON.parse(JSON.stringify(m)))}
                          title={isDuplicate ? "CẢNH BÁO: Tên trùng lặp! Click để chỉnh sửa." : "Click để nhập chi tiết xuất ăn từng ngày"}
                        >
                          {m.name} {isDuplicate && "⚠️"}
                        </button>
                      </td>
                      
                      <td className="text-center">
                        <input 
                          type="number"
                          className="input text-center"
                          value={m.meals}
                          onChange={(e) => handleUpdate(m.id, 'meals', Number(e.target.value))}
                          style={{ padding: '0.35rem', width: '70px', fontSize: '0.85rem' }}
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
                          style={{ padding: '0.35rem', width: '100px', fontSize: '0.85rem' }}
                          negativeRed={true}
                        />
                      </td>
                      
                      <td className="text-right">
                        <div 
                          className="font-semibold text-right"
                          style={{ 
                            padding: '0.35rem 0.5rem', 
                            fontSize: '0.85rem', 
                            color: m.advance > 0 ? '#10b981' : 'inherit',
                            fontWeight: m.advance > 0 ? '600' : 'normal'
                          }}
                        >
                          {formatCurrency(m.advance)}
                        </div>
                      </td>
                    
                    <td className="text-right">
                      <CurrencyInput 
                        value={m.arrears} 
                        onChange={(val) => handleUpdate(m.id, 'arrears', val)}
                        style={{ padding: '0.35rem', width: '90px', fontSize: '0.85rem' }}
                      />
                    </td>
                    
                    <td className="text-right">
                      <CurrencyInput 
                        value={m.fundUsed} 
                        onChange={(val) => handleUpdate(m.id, 'fundUsed', val)}
                        style={{ padding: '0.35rem', width: '90px', fontSize: '0.85rem' }}
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
                  );
                })
                )}
              </tbody>
              <tfoot>
                <tr style={{ backgroundColor: 'hsl(var(--muted) / 0.5)', fontWeight: 'bold', borderTop: '2px solid hsl(var(--border))' }}>
                  <td colSpan="2" className="text-center" style={{ position: 'sticky', bottom: 0, backgroundColor: 'hsl(var(--muted))', zIndex: 5 }}>TỔNG CỘNG ({filteredMemberStats.length} người)</td>
                  <td className="text-center">{totals.meals.toFixed(1).replace('.0', '')}</td>
                  <td></td>
                  <td className="text-right">{formatCurrency(totals.eatingCost)}</td>
                  <td className="text-right" style={{ color: totals.prevMonthBalance < 0 ? 'hsl(var(--destructive))' : 'inherit' }}>
                    {formatCurrency(totals.prevMonthBalance)}
                  </td>
                  <td className="text-right" style={{ color: '#10b981' }}>
                    {formatCurrency(totals.advance)}
                  </td>
                  <td className="text-right">{formatCurrency(totals.arrears)}</td>
                  <td className="text-right">{formatCurrency(totals.fundUsed)}</td>
                  <td className="text-right" style={{ color: totals.finalPayment < 0 ? 'hsl(var(--destructive))' : '#10b981' }}>
                    {formatCurrency(totals.finalPayment)}
                  </td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
        )}
      </div>

      {/* Modal Thùng Rác khôi phục thành viên */}
      {showTrashModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1000,
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <div className="card" style={{ width: '90%', maxWidth: '500px', maxHeight: '80vh', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
            <div className="flex justify-between items-center mb-4" style={{ borderBottom: '1px solid hsl(var(--border))', paddingBottom: '0.75rem' }}>
              <h3 className="card-title m-0 flex items-center gap-2" style={{ color: '#ef4444' }}>
                🗑️ Khôi phục thành viên đã xóa
              </h3>
              <button className="btn-outline" style={{ padding: '0.25rem' }} onClick={() => setShowTrashModal(false)}>
                <X size={20} />
              </button>
            </div>

            {(activeData.deletedMembers || []).length === 0 ? (
              <div className="empty-state" style={{ padding: '2rem' }}>Thùng rác trống.</div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxHeight: '400px', overflowY: 'auto' }}>
                {(activeData.deletedMembers || []).map(m => (
                  <div key={m.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem', border: '1px solid hsl(var(--border))', borderRadius: '8px', backgroundColor: 'hsl(var(--muted) / 0.1)' }}>
                    <div>
                      <div className="font-bold" style={{ fontSize: '0.9rem' }}>{m.name}</div>
                      <div style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))' }}>
                        Đã xóa: {new Date(m.deletedAt).toLocaleString('vi-VN')}
                      </div>
                    </div>
                    <button 
                      className="btn btn-outline" 
                      onClick={() => handleRestoreMember(m.id)}
                      style={{ 
                        borderColor: '#10b981', 
                        color: '#10b981', 
                        fontSize: '0.75rem', 
                        padding: '0.3rem 0.6rem',
                        fontWeight: '600'
                      }}
                    >
                      ↩️ Khôi phục
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="flex justify-end mt-6 pt-4" style={{ borderTop: '1px solid hsl(var(--border))' }}>
              <button className="btn btn-outline" onClick={() => setShowTrashModal(false)}>Đóng</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
