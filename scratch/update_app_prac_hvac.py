import os
import shutil

app_path = r'D:\LINH TINH\AI\PHAN MEM\vincons-test-app\app.js'

with open(app_path, 'r', encoding='utf-8') as f:
    code = f.read()

old_prac_block = '''        } else { // Thực hành
            let prac = QUESTIONS.filter(q => {
                const c = String(q.category || '').toLowerCase();
                const e = String(q.exam_set || '').toLowerCase();
                return c.includes('thực hành') || c.includes('tự luận') || e.includes('thực hành');
            });

            if (prac.length === 0) prac = QUESTIONS;
            activeQuestions = prac.slice(0, 20);'''

new_prac_block = '''        } else { // Thực hành / Tự Luận - Thực Hành
            let prac = [];
            if (discLower.includes('điều hòa') || discLower.includes('đhtg') || discLower.includes('hvac')) {
                prac = QUESTIONS.filter(q => String(q.category || '').toLowerCase().includes('đhtg') || String(q.category || '').toLowerCase().includes('điều hòa'));
            } else if (discLower.includes('cấp thoát nước') || discLower.includes('ctn')) {
                prac = QUESTIONS.filter(q => String(q.category || '').toLowerCase().includes('ctn') || String(q.category || '').toLowerCase().includes('cấp thoát nước'));
            } else if (discLower.includes('phòng cháy') || discLower.includes('pccc')) {
                prac = QUESTIONS.filter(q => String(q.category || '').toLowerCase().includes('pccc') || String(q.category || '').toLowerCase().includes('phòng cháy'));
            } else {
                prac = QUESTIONS.filter(q => String(q.category || '').toLowerCase().includes('thực hành') || String(q.category || '').toLowerCase().includes('cnch'));
            }

            if (prac.length === 0) prac = QUESTIONS.filter(q => String(q.category || '').toLowerCase().includes('thực hành'));
            if (prac.length === 0) prac = QUESTIONS;

            let counter = parseInt(localStorage.getItem('vincons_prac_counter') || '0') % 30 + 1;
            localStorage.setItem('vincons_prac_counter', counter.toString());
            let seed = counter * 54321 + (discipline.length * 11);
            activeQuestions = seededShuffle(prac, seed).slice(0, 20);'''

if old_prac_block in code:
    code = code.replace(old_prac_block, new_prac_block)
    with open(app_path, 'w', encoding='utf-8') as f:
        f.write(code)
    print(f"✅ Updated practical discipline isolation in {app_path}")

# Sync to all target build folders
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
