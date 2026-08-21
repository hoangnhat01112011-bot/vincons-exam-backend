import React, { useState } from 'react';
import { useAppStore } from '../store.jsx';
import { Plus, Trash2 } from 'lucide-react';
import { format } from 'date-fns';

const formatCurrency = (val) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(val || 0);
};

export default function DailyFood() {
  const { activeData, updateData, stats } = useAppStore();
  
  const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (!date || !amount) return;

    const newItem = {
      id: Date.now().toString(),
      date,
      amount: Number(amount),
      note
    };

    updateData('dailyFoods', [...activeData.dailyFoods, newItem]);
    setAmount('');
    setNote('');
  };

  const handleDelete = (id) => {
    if (confirm('Bạn có chắc chắn muốn xóa khoản chi này?')) {
      updateData('dailyFoods', activeData.dailyFoods.filter(item => item.id !== id));
    }
  };

  // Sắp xếp giảm dần theo ngày
  const sortedFoods = [...activeData.dailyFoods].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="daily-food-container">
      <div className="card mb-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="card-title">Nhập Chi phí Thực phẩm</h2>
            <p className="card-description">Nhập tiền mua thực phẩm thuần túy theo từng ngày</p>
          </div>
          <div className="text-right">
            <div className="card-description">Tổng chi thực phẩm tháng</div>
            <div className="stat-value text-primary" style={{ fontSize: '1.5rem', color: 'hsl(var(--primary))' }}>
              {formatCurrency(stats.totalFood)}
            </div>
          </div>
        </div>
        
        <form onSubmit={handleAdd} className="flex-row">
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
              type="number" 
              className="input" 
              placeholder="VD: 500000"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              min="0"
              required
            />
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
          <button type="submit" className="btn btn-primary" style={{ height: '38px' }}>
            <Plus size={18} /> Thêm
          </button>
        </form>
      </div>

      <div className="card">
        <h2 className="card-title mb-4">Lịch sử Mua Thực phẩm</h2>
        
        {sortedFoods.length === 0 ? (
          <div className="empty-state">
            Chưa có dữ liệu thực phẩm nào được nhập.
          </div>
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
