import React, { useState } from 'react';
import { LayoutDashboard, Users, Utensils, ReceiptText, Calculator, CalendarPlus, Wallet, KeyRound } from 'lucide-react';
import Dashboard from './components/Dashboard';
import Members from './components/Members';
import DailyFood from './components/DailyFood';
import OtherExpenses from './components/OtherExpenses';
import FundCollection from './components/FundCollection';
import Login from './components/Login';
import { useAppStore } from './store.jsx';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('food_cost_auth_session') === 'true';
  });
  const [activeTab, setActiveTab] = useState('dashboard');
  const { data, activeMonth, setActiveMonth } = useAppStore();

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
            <button className="btn btn-outline" onClick={handleCreateMonth}>
              <CalendarPlus size={18} />
              Tạo tháng mới
            </button>
            <button className="btn-outline" style={{ border: '1px solid hsl(var(--border))', padding: '0.5rem', color: 'hsl(var(--muted-foreground))' }} onClick={handleChangePassword} title="Đổi mật khẩu">
              <KeyRound size={18} />
            </button>
          </div>
        </div>
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

export default App;
