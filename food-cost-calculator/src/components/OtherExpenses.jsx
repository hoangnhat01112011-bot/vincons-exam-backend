import React, { useState } from 'react';
import { useAppStore } from '../store.jsx';
import { Plus, Trash2, Info } from 'lucide-react';
import { format } from 'date-fns';

const formatCurrency = (val) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(val || 0);
};

const EXPENSE_TYPES = [
  { value: 'gia_vi', label: 'Gia vị' },
  { value: 'do_uong', label: 'Đồ uống' },
  { value: 'ga_gao', label: 'Ga, Gạo' },
  { value: 'do_dung', label: 'Đồ dùng (Tính riêng)' }
];

export default function OtherExpenses() {
  const { activeData, updateData, stats } = useAppStore();
  
  const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [type, setType] = useState('gia_vi');
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (!date || !amount) return;

    const newItem = {
      id: Date.now().toString(),
      date,
      type,
      amount: Number(amount),
      note
    };

    updateData('otherExpenses', [...activeData.otherExpenses, newItem]);
    setAmount('');
    setNote('');
  };

  const handleDelete = (id) => {
    if (confirm('Bạn có chắc chắn muốn xóa khoản chi này?')) {
      updateData('otherExpenses', activeData.otherExpenses.filter(item => item.id !== id));
    }
  };

  // Sắp xếp giảm dần theo ngày
  const sortedExpenses = [...activeData.otherExpenses].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="other-expenses-container">
      <div className="card mb-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="card-title">Nhập Chi phí Khác</h2>
            <p className="card-description">Các khoản Gia vị, Đồ uống, Ga Gạo sẽ được chia theo xuất ăn. Đồ dùng chia theo đầu người.</p>
          </div>
        </div>
        
        <form onSubmit={handleAdd} className="flex-row" style={{ flexWrap: 'wrap' }}>
          <div className="form-group" style={{ flex: '1 1 150px', marginBottom: 0 }}>
            <label className="form-label">Ngày</label>
            <input 
              type="date" 
              className="input" 
              value={date}
              onChange={e => setDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group" style={{ flex: '1 1 150px', marginBottom: 0 }}>
            <label className="form-label">Loại chi phí</label>
            <select 
              className="input" 
              value={type} 
              onChange={e => setType(e.target.value)}
              style={{ backgroundColor: 'hsl(var(--background))' }}
            >
              {EXPENSE_TYPES.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
          <div className="form-group" style={{ flex: '1 1 200px', marginBottom: 0 }}>
            <label className="form-label">Số tiền (VNĐ)</label>
            <input 
              type="number" 
              className="input" 
              placeholder="VD: 50000"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              min="0"
              required
            />
          </div>
          <div className="form-group" style={{ flex: '2 1 300px', marginBottom: 0 }}>
            <label className="form-label">Ghi chú</label>
            <input 
              type="text" 
              className="input" 
              placeholder="Mắm, muối, nước ngọt, xà phòng..."
              value={note}
              onChange={e => setNote(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ height: '38px' }}>
            <Plus size={18} /> Thêm
          </button>
        </form>
      </div>

      <div className="grid-cards" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        <div className="card" style={{ marginBottom: 0, padding: '1rem' }}>
          <div className="stat-title">Tổng Gia vị</div>
          <div className="stat-value text-primary" style={{ fontSize: '1.25rem', color: 'hsl(var(--primary))' }}>
            {formatCurrency(stats.totalSpices)}
          </div>
        </div>
        <div className="card" style={{ marginBottom: 0, padding: '1rem' }}>
          <div className="stat-title">Tổng Đồ uống</div>
          <div className="stat-value text-primary" style={{ fontSize: '1.25rem', color: 'hsl(var(--primary))' }}>
            {formatCurrency(stats.totalDrinks)}
          </div>
        </div>
        <div className="card" style={{ marginBottom: 0, padding: '1rem' }}>
          <div className="stat-title">Tổng Ga, Gạo</div>
          <div className="stat-value text-primary" style={{ fontSize: '1.25rem', color: 'hsl(var(--primary))' }}>
            {formatCurrency(stats.totalGasRice)}
          </div>
        </div>
        <div className="card" style={{ marginBottom: 0, padding: '1rem', border: '1px solid hsl(var(--warning))' }}>
          <div className="stat-title">Tổng Đồ dùng (Chia đều người)</div>
          <div className="stat-value" style={{ fontSize: '1.25rem', color: 'hsl(var(--warning))' }}>
            {formatCurrency(stats.totalSupplies)}
          </div>
        </div>
      </div>

      <div className="card mt-6">
        <h2 className="card-title mb-4">Lịch sử Chi phí Khác</h2>
        
        {sortedExpenses.length === 0 ? (
          <div className="empty-state">
            Chưa có khoản chi phí khác nào được nhập.
          </div>
        ) : (
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th style={{ width: '120px' }}>Ngày</th>
                  <th style={{ width: '180px' }}>Loại chi phí</th>
                  <th className="text-right" style={{ width: '150px' }}>Số tiền</th>
                  <th>Ghi chú</th>
                  <th className="text-center" style={{ width: '100px' }}>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {sortedExpenses.map(item => (
                  <tr key={item.id}>
                    <td>{format(new Date(item.date), 'dd/MM/yyyy')}</td>
                    <td>
                      <span className="badge" style={{ backgroundColor: 'hsl(var(--muted))' }}>
                        {EXPENSE_TYPES.find(t => t.value === item.type)?.label}
                      </span>
                    </td>
                    <td className="text-right font-medium">
                      {formatCurrency(item.amount)}
                    </td>
                    <td>{item.note}</td>
                    <td className="text-center">
                      <button className="btn-danger" onClick={() => handleDelete(item.id)} title="Xóa">
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
