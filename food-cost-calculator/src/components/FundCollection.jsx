import React, { useState } from 'react';
import { useAppStore } from '../store.jsx';
import { Wallet, Search } from 'lucide-react';

const formatCurrency = (val) => {
  return new Intl.NumberFormat('vi-VN').format(val || 0) + ' ₫';
};

const CurrencyInput = ({ value, onChange }) => {
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
        style={{ padding: '0.35rem', width: '120px', fontSize: '0.85rem' }}
      />
    );
  }

  return (
    <div 
      className="input text-right font-medium" 
      onClick={() => setIsEditing(true)}
      style={{ padding: '0.35rem', width: '120px', fontSize: '0.85rem', cursor: 'text', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', color: value > 0 ? 'hsl(var(--primary))' : 'inherit' }}
    >
      {formatCurrency(value)}
    </div>
  );
};

export default function FundCollection() {
  const { activeData, updateData, stats } = useAppStore();
  const [searchTerm, setSearchTerm] = useState('');

  const handleUpdateFund = (id, value) => {
    const updated = activeData.members.map(m => {
      if (m.id === id) {
        return { ...m, fundUsed: value };
      }
      return m;
    });
    updateData('members', updated);
  };

  const filteredMembers = activeData.members.filter(m => 
    m.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalCollected = activeData.members.reduce((sum, m) => sum + (Number(m.fundUsed) || 0), 0);
  const paidMembersCount = activeData.members.filter(m => (Number(m.fundUsed) || 0) > 0).length;

  return (
    <div className="fund-container">
      <div className="card mb-6 flex-row items-center justify-between" style={{ backgroundColor: 'hsl(var(--primary) / 0.1)', borderColor: 'hsl(var(--primary) / 0.2)' }}>
        <div>
          <h2 className="card-title text-primary m-0 flex items-center gap-2">
            <Wallet size={24} /> 
            Tổng Quỹ Đồ Dùng Đã Thu
          </h2>
          <p className="card-description mt-1">Dữ liệu được liên kết và đồng bộ trực tiếp với cột "Thu quỹ đồ dùng" ở bảng quản lý Thành viên.</p>
        </div>
        <div className="text-right">
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'hsl(var(--primary))' }}>
            {formatCurrency(totalCollected)}
          </div>
          <div className="text-sm text-muted-foreground mt-1">
            Đã thu từ {paidMembersCount} / {activeData.members.length} người
          </div>
        </div>
      </div>

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
          <div className="table-container" style={{ maxHeight: 'calc(100vh - 350px)', overflow: 'auto' }}>
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
                  return (
                    <tr key={m.id} style={{ backgroundColor: hasPaid ? 'hsl(var(--primary) / 0.05)' : 'transparent' }}>
                      <td>{idx + 1}</td>
                      <td className={hasPaid ? "font-medium" : ""}>{m.name}</td>
                      <td className="text-right flex justify-end">
                        <CurrencyInput 
                          value={m.fundUsed} 
                          onChange={(val) => handleUpdateFund(m.id, val)}
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
    </div>
  );
}
