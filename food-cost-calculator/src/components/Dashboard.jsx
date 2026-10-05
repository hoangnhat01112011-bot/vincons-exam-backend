import React from 'react';
import { Users, Utensils, ShoppingCart, DollarSign, Download, PieChart, Activity, Database, CloudLightning, Save } from 'lucide-react';
import { exportToExcel } from '../utils/excel';
import { useAppStore } from '../store';

const formatCurrency = (val) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(val || 0);
};

export default function Dashboard() {
  const { data, activeData, stats, updateGoogleSheetUrl } = useAppStore();
  const [syncStatus, setSyncStatus] = React.useState('idle');
  const [urlInput, setUrlInput] = React.useState(data.googleSheetUrl || '');

  const handleExport = () => {
    exportToExcel(stats, data);
  };

  const handleSaveUrl = () => {
    updateGoogleSheetUrl(urlInput);
    alert('Đã lưu URL cấu hình Google Sheets!');
  };

  const handleSync = async () => {
    if (!urlInput.trim()) {
      alert('Vui lòng nhập URL Web App của Google Sheets trước!');
      return;
    }
    setSyncStatus('syncing');
    try {
      // Gửi POST request dưới dạng text/plain để vượt qua giới hạn CORS preflight
      const response = await fetch(urlInput, {
        method: 'POST',
        mode: 'no-cors', // Sử dụng no-cors để đảm bảo request gửi đi thành công mà không bị chặn bởi CORS
        headers: {
          'Content-Type': 'text/plain'
        },
        body: JSON.stringify({
          action: 'sync',
          database: data
        })
      });
      
      // Với mode no-cors, response sẽ là opaque (status = 0), không thể đọc body.
      // Tuy nhiên, trình duyệt vẫn gửi request đi thành công tới Google Apps Script.
      setSyncStatus('success');
      alert('Đã gửi yêu cầu đồng bộ! Vui lòng kiểm tra trang Google Sheet của bạn sau vài giây.');
    } catch (err) {
      setSyncStatus('error');
      alert('Lỗi khi gửi yêu cầu đồng bộ. Vui lòng kiểm tra lại kết nối mạng hoặc URL Web App.');
    }
  };

  const handleDownloadBackup = () => {
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(data, null, 2)
    )}`;
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', jsonString);
    downloadAnchor.setAttribute('download', `foodcost_db_backup_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
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
            <span className="font-medium">{(activeData?.members || []).length} người</span>
          </div>
          <div className="flex justify-between items-center pt-4" style={{ borderTop: '1px solid hsl(var(--border))' }}>
            <span className="font-bold">Đồ dùng / 1 người:</span>
            <span className="font-bold text-primary" style={{ fontSize: '1.25rem', color: 'hsl(var(--primary))' }}>
              {formatCurrency(stats.suppliesPerPerson)}
            </span>
          </div>
        </div>
      </div>

      {/* Panel cấu hình Đồng bộ Google Sheets & Sao lưu dự phòng */}
      <div className="card mt-6">
        <h3 className="card-title mb-4 flex items-center gap-2" style={{ color: 'hsl(var(--success))' }}>
          <CloudLightning size={20} />
          Đồng bộ Google Sheets & Sao lưu dự phòng an toàn
        </h3>
        <p className="card-description mb-6">
          Bảo vệ dữ liệu của bạn trước mọi sự cố mất mát bằng cơ chế sao lưu kép: Tự động lưu ra ổ cứng ngoài Git và đồng bộ trực tuyến lên Google Sheets của bạn.
        </p>

        <div className="grid-cards" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {/* Cấu hình Google Sheets */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h4 className="font-bold text-sm" style={{ marginBottom: '0.25rem' }}>1. Thiết lập Đồng bộ Google Sheets</h4>
            <div className="form-group" style={{ marginBottom: '0.5rem' }}>
              <label className="text-xs font-medium mb-1 block">URL Web App của Google Apps Script:</label>
              <input 
                type="text" 
                className="input w-full"
                placeholder="Dán URL Web App của bạn tại đây..." 
                value={urlInput}
                onChange={e => setUrlInput(e.target.value)}
                style={{ fontSize: '0.85rem' }}
              />
            </div>
            <div className="flex gap-2">
              <button className="btn btn-outline" onClick={handleSaveUrl} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem' }}>
                <Save size={16} /> Lưu cấu hình
              </button>
              <button 
                className="btn btn-primary" 
                onClick={handleSync} 
                disabled={syncStatus === 'syncing'}
                style={{ flex: 1, backgroundColor: '#0f9d58', borderColor: '#0f9d58', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem' }}
              >
                <Database size={16} /> {syncStatus === 'syncing' ? 'Đang đồng bộ...' : 'Đồng bộ ngay'}
              </button>
            </div>
          </div>

          {/* Sao lưu ổ cứng dự phòng */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h4 className="font-bold text-sm" style={{ marginBottom: '0.25rem' }}>2. Sao lưu dự phòng ổ cứng (Offline Backup)</h4>
            <p className="text-xs" style={{ color: 'hsl(var(--muted-foreground))', lineHeight: '1.4' }}>
              <strong>📂 Thư mục sao lưu an toàn:</strong><br />
              Dữ liệu của bạn được tự động ghi đè và sao lưu theo mốc thời gian ngoài thư mục Git tại:<br />
              <code style={{ backgroundColor: 'hsl(var(--muted))', padding: '0.2rem 0.4rem', borderRadius: '4px', display: 'block', marginTop: '0.25rem', overflowX: 'auto', fontSize: '0.75rem' }}>
                C:\Users\DELL\Desktop\Theo doi chi tiêu nhà ở\backups\
              </code>
            </p>
            <button className="btn btn-outline w-full" onClick={handleDownloadBackup} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem', marginTop: 'auto' }}>
              <Download size={16} /> Tải bản sao lưu JSON thủ công
            </button>
          </div>
        </div>

        {/* Hướng dẫn cài đặt Google Apps Script */}
        <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid hsl(var(--border))' }}>
          <h4 className="font-bold text-xs mb-2">📋 Hướng dẫn cài đặt Google Apps Script cho Trang tính của bạn:</h4>
          <ol className="text-xs text-muted-foreground" style={{ paddingLeft: '1.2rem', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <li>1. Mở một Trang tính Google Sheets mới hoặc có sẵn của bạn.</li>
            <li>2. Chọn <strong>Tiện ích mở rộng (Extensions)</strong> &gt; <strong>Apps Script</strong>.</li>
            <li>3. Xóa hết code cũ, dán đoạn mã sau vào rồi bấm <strong>Lưu</strong>:</li>
          </ol>
          <pre style={{ 
            backgroundColor: '#1e1e1e', 
            color: '#d4d4d4', 
            padding: '1rem', 
            borderRadius: '6px', 
            fontSize: '0.75rem', 
            overflowX: 'auto', 
            marginTop: '0.5rem',
            maxHeight: '180px',
            fontFamily: 'monospace'
          }}>
{`function doPost(e) {
  try {
    var payload = JSON.parse(e.postData.contents);
    var db = payload.database;
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    
    // Đồng bộ từng kỳ kế toán thành các sheet riêng biệt
    for (var monthKey in db.periods) {
      var period = db.periods[monthKey];
      var sheetName = "ChiTieu_" + monthKey;
      var sheet = ss.getSheetByName(sheetName);
      if (!sheet) {
        sheet = ss.insertSheet(sheetName);
      }
      sheet.clear();
      
      // Ghi tiêu đề thành viên
      sheet.appendRow(["Họ và tên", "Số xuất ăn", "Đã ứng trước", "Lũy kế tháng trước", "Truy thu", "Đóng quỹ"]);
      if (period.members) {
        period.members.forEach(function(m) {
          sheet.appendRow([m.name, m.meals, m.advance, m.prevMonthBalance, m.arrears, m.fundUsed]);
        });
      }
      
      // Ghi tiêu đề chuyển khoản
      sheet.appendRow([]);
      sheet.appendRow(["--- LỊCH SỬ CHUYỂN KHOẢN ---"]);
      sheet.appendRow(["Tên thành viên", "Số tiền chuyển", "Ngày giao dịch"]);
      if (period.transfers) {
        period.transfers.forEach(function(t) {
          sheet.appendRow([t.name, t.amount, t.date]);
        });
      }
    }
    return ContentService.createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({success: false, error: err.message}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}`}
          </pre>
          <ol className="text-xs text-muted-foreground" style={{ paddingLeft: '1.2rem', lineHeight: '1.6', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <li>4. Bấm nút <strong>Triển khai (Deploy)</strong> ở góc trên bên phải &gt; chọn <strong>Tải triển khai mới (New deployment)</strong>.</li>
            <li>5. Chọn loại cấu hình là <strong>Ứng dụng web (Web app)</strong>.</li>
            <li>6. Tại mục "Ai có quyền truy cập" (Who has access) chọn <strong>Bất kỳ ai (Anyone)</strong>. Bấm <strong>Triển khai</strong>.</li>
            <li>7. Copy lấy <strong>URL Ứng dụng web</strong> nhận được rồi dán vào ô thiết lập ở trên là hoàn tất!</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
