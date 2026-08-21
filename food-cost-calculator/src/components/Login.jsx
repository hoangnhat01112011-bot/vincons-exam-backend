import React, { useState, useEffect } from 'react';
import { Lock, ShieldCheck, KeyRound } from 'lucide-react';

const PASS_KEY = 'food_cost_app_password';

export default function Login({ onLoginSuccess }) {
  const [password, setPassword] = useState('');
  const [isSettingUp, setIsSettingUp] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Kiểm tra xem đã có mật khẩu trong máy chưa
    const savedPass = localStorage.getItem(PASS_KEY);
    if (!savedPass) {
      setIsSettingUp(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!password.trim()) return;

    if (isSettingUp) {
      // Lưu mật khẩu mới
      localStorage.setItem(PASS_KEY, password);
      onLoginSuccess();
    } else {
      // Kiểm tra mật khẩu
      const savedPass = localStorage.getItem(PASS_KEY);
      if (password === savedPass) {
        onLoginSuccess();
      } else {
        setError('Mật khẩu không chính xác!');
        setPassword('');
      }
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'hsl(var(--background))'
    }}>
      <div className="card" style={{ width: '100%', maxWidth: '400px', textAlign: 'center', padding: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem', color: 'hsl(var(--primary))' }}>
          {isSettingUp ? <ShieldCheck size={64} /> : <Lock size={64} />}
        </div>
        
        <h2 className="card-title" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
          {isSettingUp ? 'Thiết lập Mật khẩu' : 'Đăng nhập Hệ thống'}
        </h2>
        <p className="card-description mb-6">
          {isSettingUp 
            ? 'Tạo một mật khẩu để bảo vệ dữ liệu phần mềm của bạn khỏi việc bị sửa đổi trái phép.' 
            : 'Vui lòng nhập mật khẩu để truy cập vào dữ liệu quản lý tiền ăn.'}
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group mb-4 relative">
            <KeyRound className="absolute left-3 top-1/2" style={{ transform: 'translateY(-50%)', color: 'hsl(var(--muted-foreground))' }} size={20} />
            <input 
              type="password" 
              className="input pl-10" 
              style={{ width: '100%', height: '45px', fontSize: '1.1rem' }}
              placeholder="Nhập mật khẩu..." 
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              autoFocus
            />
          </div>
          
          {error && <div style={{ color: 'hsl(var(--destructive))', marginBottom: '1rem', fontSize: '0.9rem', fontWeight: 500 }}>{error}</div>}

          <button type="submit" className="btn btn-primary" style={{ width: '100%', height: '45px', fontSize: '1rem' }}>
            {isSettingUp ? 'Lưu Mật khẩu & Truy cập' : 'Đăng Nhập'}
          </button>
        </form>
      </div>
    </div>
  );
}
