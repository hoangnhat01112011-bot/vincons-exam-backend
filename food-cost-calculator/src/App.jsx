import React, { useState } from 'react';
import { LayoutDashboard, Users, Utensils, ReceiptText, Calculator, CalendarPlus, Wallet, KeyRound, CreditCard, Lock, Unlock } from 'lucide-react';
import Dashboard from './components/Dashboard';
import Members from './components/Members';
import DailyFood from './components/DailyFood';
import OtherExpenses from './components/OtherExpenses';
import FundCollection from './components/FundCollection';
import TransferList from './components/TransferList';
import Login from './components/Login';
import { useAppStore } from './store.jsx';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('food_cost_auth_session') === 'true';
  });
  const [activeTab, setActiveTab] = useState('dashboard');
  const { data, activeMonth, setActiveMonth, activeData, toggleLockMonth } = useAppStore();

  const handleLoginSuccess = () => {
    sessionStorage.setItem('food_cost_auth_session', 'true');
    setIsAuthenticated(true);
  };

  const handleChangePassword = () => {
    localStorage.removeItem('food_cost_app_password');
    sessionStorage.removeItem('food_cost_auth_session');
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  const handleMonthChange = (e) => {
    setActiveMonth(e.target.value);
  };

  const handleCreateMonth = () => {
    const newMonth = prompt('Nhập tháng năm mới (Định dạng: YYYY-MM, VD: 2026-08):', '2026-08');
    if (newMonth && /^\d{4}-\d{2}$/.test(newMonth)) {
      setActiveMonth(newMonth);
    } else if (newMonth) {
      alert('Sai định dạng! Vui lòng nhập YYYY-MM.');
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'members':
        return <Members />;
      case 'daily-food':
        return <DailyFood />;
      case 'other-expenses':
        return <OtherExpenses />;
      case 'fund-collection':
        return <FundCollection />;
      case 'transfer-list':
        return <TransferList />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app-container">
      <aside className="sidebar">
        <div className="sidebar-title">
          <Calculator size={24} />
          <span>FoodCost Pro</span>
        </div>
        
        <nav>
          <button 
            className={`w-full nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <LayoutDashboard size={20} />
            Tổng quan (Báo cáo)
          </button>
          
          <button 
            className={`w-full nav-item ${activeTab === 'members' ? 'active' : ''}`}
            onClick={() => setActiveTab('members')}
          >
            <Users size={20} />
            Quản lý Thành viên
          </button>
          
          <button 
            className={`w-full nav-item ${activeTab === 'daily-food' ? 'active' : ''}`}
            onClick={() => setActiveTab('daily-food')}
          >
            <Utensils size={20} />
            Chi phí Thực phẩm
          </button>
          
          <button 
            className={`w-full nav-item ${activeTab === 'other-expenses' ? 'active' : ''}`}
            onClick={() => setActiveTab('other-expenses')}
          >
            <ReceiptText size={20} />
            Chi phí Khác (Ga, Gạo...)
          </button>
          
          <button 
            className={`w-full nav-item ${activeTab === 'fund-collection' ? 'active' : ''}`}
            onClick={() => setActiveTab('fund-collection')}
          >
            <Wallet size={20} />
            Thu quỹ Đồ dùng
          </button>

          <button 
            className={`w-full nav-item ${activeTab === 'transfer-list' ? 'active' : ''}`}
            onClick={() => setActiveTab('transfer-list')}
          >
            <CreditCard size={20} />
            Danh sách Chuyển khoản
          </button>
        </nav>
      </aside>

      <main className="main-content" style={{ display: 'flex', flexDirection: 'column' }}>
        <div className="header flex justify-between items-center mb-6" style={{ paddingBottom: '1rem', borderBottom: '1px solid hsl(var(--border))' }}>
          <div>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Quản lý Chi phí Tiền ăn</h1>
            <p className="card-description">Dữ liệu được liên kết thông suốt giữa các tháng</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <label className="font-medium text-sm">Kỳ kế toán:</label>
              <select className="input" value={activeMonth} onChange={handleMonthChange} style={{ width: '150px' }}>
                {Object.keys(data.periods).sort().reverse().map(m => (
                  <option key={m} value={m}>Tháng {m.split('-')[1]}/{m.split('-')[0]}</option>
                ))}
              </select>
            </div>
            <button 
              className={`btn ${activeData?.isLocked ? 'btn-danger' : 'btn-primary'}`} 
              onClick={() => {
                toggleLockMonth(activeMonth);
                alert(activeData?.isLocked ? 'Đã mở khóa! Bạn có thể chỉnh sửa dữ liệu kỳ này.' : 'Đã lưu trạng thái & Khóa dữ liệu thành công! Toàn bộ số liệu đã được bảo vệ trên ổ cứng.');
              }}
              style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', height: '38px', padding: '0 1rem' }}
            >
              {activeData?.isLocked ? (
                <>
                  <Lock size={16} /> Đã khóa dữ liệu
                </>
              ) : (
                <>
                  <Unlock size={16} /> Lưu & Khóa dữ liệu
                </>
              )}
            </button>
            <button className="btn btn-outline" onClick={handleCreateMonth} style={{ height: '38px' }}>
              <CalendarPlus size={18} />
              Tạo tháng mới
            </button>
            <button className="btn-outline" style={{ border: '1px solid hsl(var(--border))', padding: '0.5rem', color: 'hsl(var(--muted-foreground))', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '38px', width: '38px' }} onClick={handleChangePassword} title="Đổi mật khẩu">
              <KeyRound size={18} />
            </button>
          </div>
        </div>
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {activeData?.isLocked && (
            <div style={{
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.4)',
              color: '#dc2626',
              padding: '0.75rem 1rem',
              borderRadius: '8px',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontWeight: '500',
              fontSize: '0.85rem'
            }}>
              <Lock size={16} /> 
              Kỳ kế toán này đã được KHÓA dữ liệu. Toàn bộ tính năng thêm, sửa, xóa hoặc import đã được tạm khóa để bảo vệ số liệu. Bấm nút "Đã khóa dữ liệu" ở trên để mở khóa nếu cần điều chỉnh.
            </div>
          )}
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

export default App;
