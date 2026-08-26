import os
import shutil

# Update index.html and dashboard.html
files = [
    r'D:\LINH TINH\AI\PHAN MEM\vincons-test-app\index.html',
    r'D:\LINH TINH\AI\PHAN MEM\vincons-test-app\dashboard.html'
]

old_stat_grid = '''            <div class="status-grid">
                <div class="stat-card">
                    <div class="stat-val">150</div>
                    <div class="stat-lbl">Câu hỏi Ngân hàng</div>
                </div>
                <div class="stat-card">
                    <div class="stat-val">5</div>
                    <div class="stat-lbl">Bộ đề Thi Lý thuyết</div>
                </div>
                <div class="stat-card">
                    <div class="stat-val">30</div>
                    <div class="stat-lbl">Phút / Bài thi</div>
                </div>
                <div class="stat-card">
                    <div class="stat-val">100%</div>
                    <div class="stat-lbl">Tự động chấm điểm</div>
                </div>
            </div>'''

new_stat_grid = '''            <div class="status-grid">
                <div class="stat-card">
                    <div class="stat-val" id="statTotalQuestions">520</div>
                    <div class="stat-lbl">Câu hỏi Ngân hàng</div>
                </div>
                <div class="stat-card">
                    <div class="stat-val" id="statTotalExamSets">30</div>
                    <div class="stat-lbl">Bộ đề Xoay vòng</div>
                </div>
                <div class="stat-card">
                    <div class="stat-val">30-60</div>
                    <div class="stat-lbl">Phút / Bài thi</div>
                </div>
                <div class="stat-card">
                    <div class="stat-val">100%</div>
                    <div class="stat-lbl">Tự động chấm điểm</div>
                </div>
            </div>'''

script_auto_calc = '''    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const elQ = document.getElementById('statTotalQuestions');
            if (elQ && typeof QUESTIONS !== 'undefined' && QUESTIONS.length > 0) {
                elQ.textContent = QUESTIONS.length;
            }
        });
    </script>'''

for fpath in files:
    if not os.path.exists(fpath): continue
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if old_stat_grid in content:
        content = content.replace(old_stat_grid, new_stat_grid)
    
    if '</body>' in content and 'statTotalQuestions' in content and 'QUESTIONS.length' not in content:
        content = content.replace('</body>', script_auto_calc + '\n</body>')
    
    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"✅ Updated stat cards in {fpath}")

# Sync to all target build directories
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
