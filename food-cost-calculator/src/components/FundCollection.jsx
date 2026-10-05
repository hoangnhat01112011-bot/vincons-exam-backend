import React, { useState } from 'react';
import { useAppStore } from '../store.jsx';
import { Wallet, Search, Plus, Trash2, Calendar, DollarSign, FileText } from 'lucide-react';
import { format } from 'date-fns';

const formatCurrency = (val) => {
  return new Intl.NumberFormat('vi-VN').format(val || 0) + ' ₫';
};

const parseFormattedNumber = (val) => {
  if (!val) return 0;
  const cleaned = String(val).replace(/[.,]/g, '');
  return Number(cleaned) || 0;
};

const CurrencyInput = ({ value, onChange, style }) => {
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
        style={{ padding: '0.35rem', width: '120px', fontSize: '0.85rem', ...style }}
      />
    );
  }

  return (
    <div 
      className="input text-right font-medium" 
      onClick={() => setIsEditing(true)}
      style={{ padding: '0.35rem', width: '120px', fontSize: '0.85rem', cursor: 'text', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', color: value > 0 ? 'hsl(var(--primary))' : 'inherit', ...style }}
    >
      {formatCurrency(value)}
    </div>
  );
};

export default function FundCollection() {
  const { activeData, updateData, stats } = useAppStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [subTab, setSubTab] = useState('danh-sach'); // 'danh-sach' hoặc 'chi-tieu'
  
  // Form chi tiêu quỹ đồ dùng
  const [expDate, setExpDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [expAmount, setExpAmount] = useState('');
  const [expNote, setExpNote] = useState('');

  const handleUpdateFund = (id, value) => {
    const updated = activeData.members.map(m => {
      if (m.id === id) {
        return { ...m, fundUsed: value };
      }
      return m;
    });
    updateData('members', updated);
  };

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (!expDate || !expAmount) return;

    const newExpense = {
      id: Date.now().toString(),
      date: expDate,
      amount: parseFormattedNumber(expAmount),
      note: expNote
    };

    updateData('suppliesExpenses', [...(activeData.suppliesExpenses || []), newExpense]);
    setExpAmount('');
    setExpNote('');
  };

  const handleDeleteExpense = (id) => {
    if (confirm('Bạn có chắc chắn muốn xóa khoản chi quỹ này?')) {
      updateData('suppliesExpenses', (activeData.suppliesExpenses || []).filter(e => e.id !== id));
    }
  };

  const filteredMembers = stats.memberStats.filter(m => 
    m.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paidMembersCount = stats.memberStats.filter(m => (Number(m.fundUsed) || 0) > 0).length;
  const sortedExpenses = [...(activeData.suppliesExpenses || [])].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="fund-container">
      <div className="grid-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
        {/* Card 1: Tổng quan Thu Quỹ */}
        <div className="card" style={{ marginBottom: 0 }}>
          <h2 className="card-title text-primary mb-4 flex items-center gap-2">
            <Wallet size={24} /> 
            Thu Quỹ Đồ Dùng Tháng Này
          </h2>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'hsl(var(--primary))', marginBottom: '0.5rem' }}>
            {formatCurrency(stats.fundCollectedThisMonth)}
          </div>
          <div className="text-sm text-muted-foreground">
            Đã thu từ {paidMembersCount} / {stats.memberStats.length} người
          </div>
          <p className="card-description mt-4">
            Dữ liệu thu quỹ của từng người được cập nhật trực tiếp tại danh sách thành viên bên dưới hoặc cột "Thu quỹ đồ dùng" ở bảng quản lý Thành viên.
          </p>
        </div>

        {/* Card 2: Báo cáo & Cân đối Quỹ Đồ Dùng */}
        <div className="card" style={{ marginBottom: 0 }}>
          <h2 className="card-title mb-4">Cân Đối Quỹ Đồ Dùng</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div className="flex justify-between items-center text-sm">
              <span>Lũy kế quỹ tháng trước chuyển sang:</span>
              <span className="font-bold">{formatCurrency(stats.prevMonthRemainingFund)}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span>Thu quỹ đồ dùng tháng này (+):</span>
              <span className="font-bold text-success" style={{ color: 'hsl(var(--success))' }}>+{formatCurrency(stats.fundCollectedThisMonth)}</span>
            </div>
            
            <div className="flex justify-between items-center text-sm">
              <span>Đã chi mua đồ dùng (-):</span>
              <div className="font-bold text-destructive" style={{ color: 'hsl(var(--destructive))' }}>
                -{formatCurrency(stats.spentOnSupplies)}
                <span className="text-xs text-muted-foreground font-normal block">(Tính từ nhật ký chi tiêu)</span>
              </div>
            </div>

            <div className="flex justify-between items-center text-sm">
              <span>Chi bổ sung mua thực phẩm (-):</span>
              <div style={{ width: '150px' }}>
                <input 
                  type="text" 
                  className="input text-right"
                  style={{ padding: '0.35rem 0.5rem', fontSize: '0.85rem' }}
                  value={activeData.spentOnExtraFood || ''}
                  onChange={(e) => updateData('spentOnExtraFood', parseFormattedNumber(e.target.value))}
                  placeholder="0"
                />
              </div>
            </div>
            
            <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: '0.75rem', marginTop: '0.25rem' }} className="flex justify-between items-center">
              <span className="font-bold">Quỹ còn lại cuối tháng:</span>
              <span className="font-bold" style={{ fontSize: '1.25rem', color: stats.remainingFund < 0 ? 'hsl(var(--destructive))' : 'hsl(var(--success))' }}>
                {formatCurrency(stats.remainingFund)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem' }}>
        <button 
          onClick={() => setSubTab('danh-sach')}
          className={`btn ${subTab === 'danh-sach' ? 'btn-primary' : 'btn-outline'}`}
          style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
        >
          Đóng Quỹ Thành Viên
        </button>
        <button 
          onClick={() => setSubTab('chi-tieu')}
          className={`btn ${subTab === 'chi-tieu' ? 'btn-primary' : 'btn-outline'}`}
          style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
        >
          Nhật Ký Chi Mua Đồ Dùng (Theo Ngày)
        </button>
      </div>

      {subTab === 'danh-sach' ? (
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <div className="p-4" style={{ borderBottom: '1px solid hsl(var(--border))' }}>
            <div className="relative" style={{ maxWidth: '300px' }}>
              <Search className="absolute left-3 top-1/2" style={{ transform: 'translateY(-50%)', color: 'hsl(var(--muted-foreground))' }} size={16} />
              <input 
                type="text" 
                className="input pl-9" 
                placeholder="Tìm kiếm thành viên..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ width: '100%' }}
              />
            </div>
          </div>

          {filteredMembers.length === 0 ? (
            <div className="empty-state">
              Không tìm thấy thành viên nào.
            </div>
          ) : (
            <div className="table-container" style={{ maxHeight: 'calc(100vh - 420px)', overflow: 'auto' }}>
              <table className="table" style={{ whiteSpace: 'nowrap' }}>
                <thead style={{ position: 'sticky', top: 0, backgroundColor: 'hsl(var(--muted))', zIndex: 10 }}>
                  <tr>
                    <th style={{ backgroundColor: 'hsl(var(--muted))', width: '50px' }}>TT</th>
                    <th style={{ backgroundColor: 'hsl(var(--muted))' }}>Họ và tên</th>
                    <th className="text-right" style={{ backgroundColor: 'hsl(var(--muted))', width: '200px' }}>Số tiền đã thu (Click để sửa)</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMembers.map((m, idx) => {
                    const hasPaid = (Number(m.fundUsed) || 0) > 0;
                    const isDuplicate = m.hasPaidFundPreviously && hasPaid;
                    
                    let rowStyle = {};
                    if (isDuplicate) {
                      rowStyle = { backgroundColor: 'hsl(var(--destructive) / 0.1)' };
                    } else if (hasPaid) {
                      rowStyle = { backgroundColor: 'hsl(var(--primary) / 0.05)' };
                    }
                    
                    return (
                      <tr key={m.id} style={rowStyle}>
                        <td>{idx + 1}</td>
                        <td className={hasPaid ? "font-medium" : ""}>
                          <div className="flex items-center">
                            {m.name}
                            {isDuplicate && (
                              <span className="badge badge-danger" style={{ backgroundColor: 'hsl(var(--destructive) / 0.15)', color: 'hsl(var(--destructive))', marginLeft: '0.5rem' }}>
                                Trùng: Đã thu tháng trước!
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="text-right flex justify-end">
                          <CurrencyInput 
                            value={m.fundUsed} 
                            onChange={(val) => handleUpdateFund(m.id, val)}
                            style={{
                              border: isDuplicate ? '1px solid hsl(var(--destructive))' : undefined,
                              backgroundColor: isDuplicate ? 'hsl(var(--destructive) / 0.05)' : undefined,
                              color: isDuplicate ? 'hsl(var(--destructive))' : undefined
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {/* Nhập chi tiêu */}
          <div className="card" style={{ height: 'fit-content' }}>
            <h3 className="card-title mb-4">Ghi Chép Chi Quỹ Đồ Dùng</h3>
            <form onSubmit={handleAddExpense} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label flex items-center gap-1"><Calendar size={14} /> Ngày chi</label>
                <input 
                  type="date" 
                  className="input" 
                  value={expDate} 
                  onChange={e => setExpDate(e.target.value)} 
                  required 
                />
              </div>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label flex items-center gap-1"><DollarSign size={14} /> Số tiền (VNĐ)</label>
                <input 
                  type="text" 
                  className="input" 
                  placeholder="VD: 50.000 hoặc 50000" 
                  value={expAmount} 
                  onChange={e => setExpAmount(e.target.value)} 
                  required 
                />
                {expAmount && (
                  <div style={{ fontSize: '0.75rem', color: 'hsl(var(--primary))', marginTop: '4px', fontWeight: '500' }}>
                    Nhận diện: {formatCurrency(parseFormattedNumber(expAmount))}
                  </div>
                )}
              </div>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label flex items-center gap-1"><FileText size={14} /> Ghi chú vật dụng mua</label>
                <input 
                  type="text" 
                  className="input" 
                  placeholder="VD: Mua nước rửa chén, giẻ lau..." 
                  value={expNote} 
                  onChange={e => setExpNote(e.target.value)} 
                />
              </div>
              <button type="submit" className="btn btn-primary w-full mt-2">
                <Plus size={16} /> Thêm khoản chi
              </button>
            </form>
          </div>

          {/* Lịch sử chi tiêu */}
          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <div className="p-4 font-semibold" style={{ borderBottom: '1px solid hsl(var(--border))' }}>
              Lịch Sử Chi Quỹ Đồ Dùng
            </div>
            {sortedExpenses.length === 0 ? (
              <div className="empty-state">Chưa có khoản chi quỹ nào.</div>
            ) : (
              <div className="table-container" style={{ maxHeight: '350px', overflow: 'auto' }}>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Ngày</th>
                      <th className="text-right">Số tiền</th>
                      <th>Ghi chú</th>
                      <th className="text-center">Xóa</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedExpenses.map(e => (
                      <tr key={e.id}>
                        <td>{format(new Date(e.date), 'dd/MM/yyyy')}</td>
                        <td className="text-right font-medium text-destructive">{formatCurrency(e.amount)}</td>
                        <td>{e.note}</td>
                        <td className="text-center">
                          <button className="btn-danger" style={{ padding: '0.25rem' }} onClick={() => handleDeleteExpense(e.id)}>
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
      )}
    </div>
  );
}
