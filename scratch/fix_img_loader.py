import os
import shutil

app_path = r'D:\LINH TINH\AI\PHAN MEM\vincons-test-app\app.js'

with open(app_path, 'r', encoding='utf-8') as f:
    code = f.read()

old_show_img = '''    const imgPanel = document.getElementById('imagePanel');
    const imgEl = document.getElementById('questionImage');
    if (q && q.image && imgEl) {
        imgEl.src = q.image;
        if (imgPanel) imgPanel.style.display = 'block';
    } else if (imgPanel) {
        imgPanel.style.display = 'none';
    }'''

new_show_img = '''    const imgPanel = document.getElementById('imagePanel');
    const imgEl = document.getElementById('questionImage');
    if (q && q.image && imgEl) {
        const imgSrc = q.image.includes('?') ? q.image : q.image + '?v=20260826_v1';
        imgEl.src = imgSrc;
        imgEl.onerror = function() {
            if (imgSrc.endsWith('.png?v=20260826_v1') || imgSrc.endsWith('.png')) {
                imgEl.src = q.image.replace('.png', '.svg');
            }
        };
        if (imgPanel) imgPanel.style.display = 'block';
    } else if (imgPanel) {
        imgPanel.style.display = 'none';
    }'''

if old_show_img in code:
    code = code.replace(old_show_img, new_show_img)
    with open(app_path, 'w', encoding='utf-8') as f:
        f.write(code)
    print(f"✅ Updated image handling in {app_path}")

# Sync to target build folders
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
