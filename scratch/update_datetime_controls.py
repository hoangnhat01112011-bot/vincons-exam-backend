import os
import shutil

# Files to update
index_path = r'D:\LINH TINH\AI\PHAN MEM\vincons-test-app\index.html'
dash_path = r'D:\LINH TINH\AI\PHAN MEM\vincons-test-app\dashboard.html'
admin_path = r'D:\LINH TINH\AI\PHAN MEM\vincons-test-app\admin.html'

def update_widget_html(filepath):
    if not os.path.exists(filepath): return
    with open(filepath, 'r', encoding='utf-8') as f:
        html = f.read()

    # 1. Update Widget Card to include interactive link/button for Date & Time sync
    old_widget = '''        <div class="widget-card">
            <div class="widget-main">
                <small>📅 Hệ Thống Đánh Giá Bậc Thợ Vincons</small>
                <h3 id="liveClockDisplay">20:15:00</h3>
                <p id="liveDateDisplay">Thứ Sáu, Ngày 21 tháng 08 năm 2026</p>
            </div>
            <div style="font-size: 2.5rem;">⏱️</div>
        </div>'''

    new_widget = '''        <div class="widget-card" style="position: relative;">
            <div class="widget-main">
                <small style="display: flex; align-items: center; justify-content: space-between; gap: 8px;">
                    <span>📅 Hệ Thống Đánh Giá Bậc Thợ Vincons</span>
                    <a href="javascript:void(0)" onclick="refreshSystemDateTime()" title="Bấm để cập nhật lại ngày giờ" style="color: #3b82f6; font-weight: 600; text-decoration: none; font-size: 0.8rem; background: rgba(59, 130, 246, 0.1); padding: 2px 8px; border-radius: 4px; transition: all 0.2s;">🔄 Cập nhật ngày giờ</a>
                </small>
                <h3 id="liveClockDisplay" style="margin: 4px 0;">--:--:--</h3>
                <p id="liveDateDisplay" style="font-weight: 500; opacity: 0.9;">Đang cập nhật ngày giờ hệ thống...</p>
            </div>
            <div style="font-size: 2.5rem; cursor: pointer;" onclick="refreshSystemDateTime()" title="Click để đồng bộ ngày giờ">⏱️</div>
        </div>'''

    if old_widget in html:
        html = html.replace(old_widget, new_widget)

    # 2. Update updateClock() to dynamically format Date & Time
    old_clock_func = '''    function updateClock() {
        const now = new Date();
        document.getElementById('liveClockDisplay').innerText = now.toLocaleTimeString('vi-VN');
    }'''

    new_clock_func = '''    function updateClock() {
        const now = new Date();
        const clockEl = document.getElementById('liveClockDisplay');
        const dateEl = document.getElementById('liveDateDisplay');

        if (clockEl) {
            clockEl.innerText = now.toLocaleTimeString('vi-VN');
        }

        if (dateEl) {
            const days = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
            const dayName = days[now.getDay()];
            const day = String(now.getDate()).padStart(2, '0');
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const year = now.getFullYear();
            dateEl.innerText = `${dayName}, Ngày ${day} tháng ${month} năm ${year}`;
        }
    }

    function refreshSystemDateTime() {
        updateClock();
        const now = new Date();
        const days = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
        const dayName = days[now.getDay()];
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = now.getFullYear();
        const timeStr = now.toLocaleTimeString('vi-VN');
        
        alert(`✅ ĐÃ CẬP NHẬT NGÀY GIỜ HỆ THỐNG THÀNH CÔNG!\\n\\n🕒 Giờ hiện tại: ${timeStr}\\n📅 Ngày hiện tại: ${dayName}, Ngày ${day}/${month}/${year}`);
    }'''

    if old_clock_func in html:
        html = html.replace(old_clock_func, new_clock_func)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"✅ Updated date/time control in {filepath}")

update_widget_html(index_path)
update_widget_html(dash_path)

# Also update admin.html to add Date/Time Management card
if os.path.exists(admin_path):
    with open(admin_path, 'r', encoding='utf-8') as f:
        admin_html = f.read()

    admin_card = '''
        <!-- System Date/Time Sync Widget for Admin -->
        <div class="card" style="max-width: 600px; margin: 20px auto 0 auto; background: #f8fafc; border: 1px solid #cbd5e1;">
            <div style="display: flex; align-items: center; justify-content: space-between;">
                <div>
                    <h3 style="margin: 0; color: #1e293b; font-size: 16px; display: flex; align-items: center; gap: 8px;">
                        <span>🕒</span> QUẢN LÝ & ĐỒNG BỘ THỜI GIAN HỆ THỐNG
                    </h3>
                    <p id="adminDateDisplay" style="margin: 4px 0 0 0; color: #64748b; font-size: 13px;">Đang nạp thời gian...</p>
                </div>
                <button onclick="syncAdminDateTime()" class="btn btn-primary btn-sm" style="padding: 8px 14px; font-size: 13px; font-weight: 600;">🔄 Cập nhật ngày giờ</button>
            </div>
        </div>

        <script>
            function updateAdminClock() {
                const now = new Date();
                const days = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
                const dayName = days[now.getDay()];
                const day = String(now.getDate()).padStart(2, '0');
                const month = String(now.getMonth() + 1).padStart(2, '0');
                const year = now.getFullYear();
                const timeStr = now.toLocaleTimeString('vi-VN');

                const el = document.getElementById('adminDateDisplay');
                if (el) el.innerText = `${timeStr} | ${dayName}, ${day}/${month}/${year}`;
            }
            setInterval(updateAdminClock, 1000);
            document.addEventListener('DOMContentLoaded', updateAdminClock);

            function syncAdminDateTime() {
                updateAdminClock();
                const now = new Date();
                alert('✅ Đã đồng bộ ngày giờ hệ thống thành công!\\nThời gian hiện tại: ' + now.toLocaleString('vi-VN'));
            }
        </script>
'''

    if 'QUẢN LÝ & ĐỒNG BỘ THỜI GIAN HỆ THỐNG' not in admin_html:
        admin_html = admin_html.replace('</main>', admin_card + '\n</main>')
        with open(admin_path, 'w', encoding='utf-8') as f:
            f.write(admin_html)
        print(f"✅ Updated {admin_path} with admin time management widget.")

# Sync across all build directories
target_dirs = [
    r'D:\LINH TINH\AI\PHAN MEM\vincons-test-app\apk_unpacked\assets\www',
    r'D:\LINH TINH\AI\PHAN MEM\vincons-test-app\android_build\android\app\src\main\assets\public',
    r'D:\LINH TINH\AI\PHAN MEM\vincons-test-app\android_build\www'
]

for f in ['index.html', 'dashboard.html', 'admin.html', 'exam.html', 'result.html', 'app.js', 'questions.js']:
    src = os.path.join(r'D:\LINH TINH\AI\PHAN MEM\vincons-test-app', f)
    if os.path.exists(src):
        for tdir in target_dirs:
            if os.path.exists(tdir):
                shutil.copy(src, os.path.join(tdir, f))
                print(f"Synced {f} -> {tdir}")
