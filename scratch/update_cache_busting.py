import os
import shutil

app_path = r'D:\LINH TINH\AI\PHAN MEM\vincons-test-app\app.js'

with open(app_path, 'r', encoding='utf-8') as f:
    code = f.read()

code = code.replace('?v=20260826_v1', '?v=20260826_v2')

with open(app_path, 'w', encoding='utf-8') as f:
    f.write(code)

print(f"✅ Updated cache buster v2 in {app_path}")

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
