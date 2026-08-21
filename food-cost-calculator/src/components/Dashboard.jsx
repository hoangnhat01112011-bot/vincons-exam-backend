import React from 'react';
import { Users, Utensils, ShoppingCart, DollarSign, Download, PieChart, Activity } from 'lucide-react';
import { exportToExcel } from '../utils/excel';
import { useAppStore } from '../store.jsx';

const formatCurrency = (val) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(val || 0);
};

export default function Dashboard() {
  const { activeData, activeMonth, stats } = useAppStore();

  const handleExport = () => {
    exportToExcel(stats, activeData, activeMonth);
  };

  return (
    <div className="dashboard-container">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="card-title" style={{ fontSize: '1.5rem' }}>Tổng quan chi phí</h2>
          <p className="card-description">Báo cáo tổng hợp chi phí tiền ăn trong tháng</p>
        </div>
        <button className="btn btn-primary" onClick={handleExport}>
          <Download size={18} />
          Xuất Excel báo cáo
        </button>
      </div>

      <div className="grid-cards">
        <div className="stat-card">
          <div className="flex items-center gap-2 mb-2">
            <Utensils size={20} className="text-primary" style={{ color: 'hsl(var(--primary))' }} />
            <h3 className="stat-title">Đơn giá 1 xuất ăn</h3>
          </div>
          <div className="stat-value text-primary" style={{ color: 'hsl(var(--primary))' }}>
            {formatCurrency(stats.costPerMeal)}
          </div>
          <div className="card-description mt-2">Phân bổ đều từ thực phẩm & gia vị, ga gạo</div>
        </div>

        <div className="stat-card">
          <div className="flex items-center gap-2 mb-2">
            <Users size={20} className="text-primary" style={{ color: 'hsl(var(--warning))' }} />
            <h3 className="stat-title">Tổng số xuất ăn</h3>
          </div>
          <div className="stat-value">{stats.totalMeals}</div>
          <div className="card-description mt-2">Tổng xuất ăn của tất cả thành viên</div>
        </div>

        <div className="stat-card">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign size={20} className="text-primary" style={{ color: 'hsl(var(--success))' }} />
            <h3 className="stat-title">Tổng tiền đã thu (Ứng)</h3>
          </div>
          <div className="stat-value" style={{ color: 'hsl(var(--success))' }}>
            {formatCurrency(stats.totalAdvance)}
          </div>
          <div className="card-description mt-2">Quỹ hiện tại đang có</div>
        </div>
      </div>

      <div className="grid-cards" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        <div className="card">
          <h3 className="card-title mb-4 flex items-center gap-2">
            <PieChart size={20} />
            Cấu trúc Chi phí Ăn uống
          </h3>
          <div className="flex justify-between items-center mb-2">
            <span>Thực phẩm thuần túy:</span>
            <span className="font-medium">{formatCurrency(stats.totalFood)}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span>Gia vị:</span>
            <span className="font-medium">{formatCurrency(stats.totalSpices)}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span>Đồ uống:</span>
            <span className="font-medium">{formatCurrency(stats.totalDrinks)}</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span>Ga, Gạo:</span>
            <span className="font-medium">{formatCurrency(stats.totalGasRice)}</span>
          </div>
          <div className="flex justify-between items-center pt-4" style={{ borderTop: '1px solid hsl(var(--border))' }}>
            <span className="font-bold">Tổng chi phí ĂN:</span>
            <span className="font-bold text-primary" style={{ fontSize: '1.25rem', color: 'hsl(var(--primary))' }}>
              {formatCurrency(stats.totalEatingCost)}
            </span>
          </div>
        </div>

        <div className="card">
          <h3 className="card-title mb-4 flex items-center gap-2">
            <ShoppingCart size={20} />
            Chi phí Đồ dùng (Tính riêng)
          </h3>
          <p className="card-description mb-4">
            Chi phí đồ dùng sinh hoạt được tính riêng và chia đều cho số lượng người (không chia theo số xuất ăn).
          </p>
          <div className="flex justify-between items-center mb-4">
            <span>Tổng chi phí đồ dùng:</span>
            <span className="font-medium">{formatCurrency(stats.totalSupplies)}</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span>Số người chia sẻ:</span>
            <span className="font-medium">{activeData.members.length} người</span>
          </div>
          <div className="flex justify-between items-center pt-4" style={{ borderTop: '1px solid hsl(var(--border))' }}>
            <span className="font-bold">Đồ dùng / 1 người:</span>
            <span className="font-bold text-primary" style={{ fontSize: '1.25rem', color: 'hsl(var(--primary))' }}>
              {formatCurrency(stats.suppliesPerPerson)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
