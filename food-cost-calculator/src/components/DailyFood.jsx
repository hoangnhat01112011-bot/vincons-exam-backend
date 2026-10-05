import React, { useState } from 'react';
import { useAppStore } from '../store.jsx';
import { Plus, Trash2 } from 'lucide-react';
import { format } from 'date-fns';

const formatCurrency = (val) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(val || 0);
};

const parseFormattedNumber = (val) => {
  if (!val) return 0;
  const cleaned = String(val).replace(/[.,]/g, '');
  return Number(cleaned) || 0;
};

export default function DailyFood() {
  const { activeData, updateData, stats } = useAppStore();
  const [tab, setTab] = useState('chung'); // 'chung' hoặc 'rieng'
  
  const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  
  // Trạng thái cho tab riêng
  const [selectedMembers, setSelectedMembers] = useState({}); // { id: boolean }

  const handleAdd = (e) => {
    e.preventDefault();
    if (!date || !amount) return;

    if (tab === 'chung') {
      const newItem = {
        id: Date.now().toString(),
        date,
        amount: parseFormattedNumber(amount),
        note
      };
      updateData('dailyFoods', [...(activeData.dailyFoods || []), newItem]);
    } else {
      const selectedIds = Object.keys(selectedMembers).filter(id => selectedMembers[id]);
      if (selectedIds.length === 0) {
        alert('Vui lòng chọn ít nhất 1 thành viên để phân bổ chi phí này!');
        return;
      }
      const newItem = {
        id: Date.now().toString(),
        date,
        amount: parseFormattedNumber(amount),
        note,
        members: selectedIds
      };
      updateData('privateFoods', [...(activeData.privateFoods || []), newItem]);
      setSelectedMembers({}); // Reset
    }

    setAmount('');
    setNote('');
  };

  const handleDelete = (id, type) => {
    if (confirm('Bạn có chắc chắn muốn xóa khoản chi này?')) {
      if (type === 'chung') {
        updateData('dailyFoods', activeData.dailyFoods.filter(item => item.id !== id));
      } else {
        updateData('privateFoods', activeData.privateFoods.filter(item => item.id !== id));
      }
    }
  };

  const toggleMember = (id) => {
    setSelectedMembers(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const selectAllMembers = () => {
    const all = {};
    activeData.members.forEach(m => all[m.id] = true);
    setSelectedMembers(all);
  };

  const deselectAllMembers = () => {
    setSelectedMembers({});
  };

  // Sắp xếp
  const sortedFoods = [...(activeData.dailyFoods || [])].sort((a, b) => new Date(b.date) - new Date(a.date));
  const sortedPrivateFoods = [...(activeData.privateFoods || [])].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="daily-food-container">
      {/* Tab Navigation */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '1.5rem' }}>
        <button 
          onClick={() => setTab('chung')}
          className={`btn ${tab === 'chung' ? 'btn-primary' : 'btn-outline'}`}
          style={{ padding: '0.75rem 1.5rem', fontWeight: 600 }}
        >
          Thực phẩm Chung
        </button>
        <button 
          onClick={() => setTab('rieng')}
          className={`btn ${tab === 'rieng' ? 'btn-primary' : 'btn-outline'}`}
          style={{ padding: '0.75rem 1.5rem', fontWeight: 600 }}
        >
          Thực phẩm Riêng (Cá nhân)
        </button>
      </div>

      <div className="card mb-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="card-title">
              {tab === 'chung' ? 'Nhập Chi phí Thực phẩm Chung' : 'Nhập Thực phẩm Riêng'}
            </h2>
            <p className="card-description">
              {tab === 'chung' 
                ? 'Nhập tiền mua thực phẩm thuần túy dùng chung cho cả tập thể.'
                : 'Thực phẩm mua riêng (cháo, phở, đồ ăn đặc biệt...) sẽ không cộng vào đơn giá chung mà chia đều cho những người được chọn.'}
            </p>
          </div>
          {tab === 'chung' && (
            <div className="text-right">
              <div className="card-description">Tổng chi thực phẩm chung</div>
              <div className="stat-value text-primary" style={{ fontSize: '1.5rem', color: 'hsl(var(--primary))' }}>
                {formatCurrency(stats.totalFood)}
              </div>
            </div>
          )}
        </div>
        
        <form onSubmit={handleAdd}>
          <div className="flex-row">
            <div className="form-group" style={{ flex: 1, marginBottom: 0 }}>
              <label className="form-label">Ngày</label>
              <input 
                type="date" 
                className="input" 
                value={date}
                onChange={e => setDate(e.target.value)}
                required
              />
            </div>
             <div className="form-group" style={{ flex: 1.5, marginBottom: 0 }}>
              <label className="form-label">Số tiền (VNĐ)</label>
              <input 
                type="text" 
                className="input" 
                placeholder="VD: 500.000 hoặc 500000"
                value={amount}
                onChange={e => setAmount(e.target.value)}
                required
              />
              {amount && (
                <div style={{ fontSize: '0.75rem', color: 'hsl(var(--primary))', marginTop: '4px', fontWeight: '500' }}>
                  Nhận diện: {formatCurrency(parseFormattedNumber(amount))}
                </div>
              )}
            </div>
            <div className="form-group" style={{ flex: 2, marginBottom: 0 }}>
              <label className="form-label">Ghi chú (Món ăn/Mua ở đâu)</label>
              <input 
                type="text" 
                className="input" 
                placeholder="Thịt lợn, rau cải..."
                value={note}
                onChange={e => setNote(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ height: '38px', alignSelf: 'flex-end' }}>
              <Plus size={18} /> Thêm
            </button>
          </div>

          {tab === 'rieng' && (
            <div className="mt-4 p-4" style={{ backgroundColor: 'hsl(var(--muted))', borderRadius: 'var(--radius)' }}>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Phân bổ cho:</span>
                <div>
                  <button type="button" className="btn-outline text-xs mr-2" style={{ padding: '2px 8px' }} onClick={selectAllMembers}>Chọn tất cả</button>
                  <button type="button" className="btn-outline text-xs" style={{ padding: '2px 8px' }} onClick={deselectAllMembers}>Bỏ chọn tất cả</button>
                </div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {activeData.members.map(m => (
                  <label key={m.id} style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer', padding: '4px 8px', backgroundColor: selectedMembers[m.id] ? 'hsl(var(--primary) / 0.1)' : 'transparent', borderRadius: '4px' }}>
                    <input 
                      type="checkbox" 
                      checked={!!selectedMembers[m.id]} 
                      onChange={() => toggleMember(m.id)}
                    />
                    <span style={{ fontSize: '0.9rem', fontWeight: selectedMembers[m.id] ? '600' : 'normal', color: selectedMembers[m.id] ? 'hsl(var(--primary))' : 'inherit' }}>
                      {m.name}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </form>
      </div>

      <div className="card">
        <h2 className="card-title mb-4">Lịch sử Mua Thực phẩm {tab === 'chung' ? 'Chung' : 'Riêng'}</h2>
        
        {tab === 'chung' ? (
          sortedFoods.length === 0 ? (
            <div className="empty-state">Chưa có dữ liệu thực phẩm chung nào được nhập.</div>
          ) : (
            <div className="table-container">
              <table className="table">
                <thead>
                  <tr>
                    <th style={{ width: '150px' }}>Ngày</th>
                    <th className="text-right" style={{ width: '200px' }}>Số tiền</th>
                    <th>Ghi chú</th>
                    <th className="text-center" style={{ width: '100px' }}>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedFoods.map(item => (
                    <tr key={item.id}>
                      <td>{format(new Date(item.date), 'dd/MM/yyyy')}</td>
                      <td className="text-right font-medium text-primary" style={{ color: 'hsl(var(--primary))' }}>
                        {formatCurrency(item.amount)}
                      </td>
                      <td>{item.note}</td>
                      <td className="text-center">
                        <button className="btn-danger" onClick={() => handleDelete(item.id, 'chung')} title="Xóa">
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        ) : (
          sortedPrivateFoods.length === 0 ? (
            <div className="empty-state">Chưa có khoản mua thực phẩm riêng nào.</div>
          ) : (
            <div className="table-container">
              <table className="table">
                <thead>
                  <tr>
                    <th style={{ width: '120px' }}>Ngày</th>
                    <th className="text-right" style={{ width: '150px' }}>Số tiền</th>
                    <th>Ghi chú</th>
                    <th>Người ăn</th>
                    <th className="text-center" style={{ width: '100px' }}>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedPrivateFoods.map(item => {
                    const memberNames = (item.members || []).map(id => {
                      const m = activeData.members.find(x => x.id === id);
                      return m ? m.name : 'Unknown';
                    }).join(', ');
                    
                    return (
                      <tr key={item.id}>
                        <td>{format(new Date(item.date), 'dd/MM/yyyy')}</td>
                        <td className="text-right font-medium text-primary" style={{ color: 'hsl(var(--primary))' }}>
                          {formatCurrency(item.amount)}
                        </td>
                        <td>{item.note}</td>
                        <td style={{ fontSize: '0.85rem', color: 'hsl(var(--muted-foreground))' }}>{memberNames}</td>
                        <td className="text-center">
                          <button className="btn-danger" onClick={() => handleDelete(item.id, 'rieng')} title="Xóa">
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          )
        )}
      </div>
    </div>
  );
}
