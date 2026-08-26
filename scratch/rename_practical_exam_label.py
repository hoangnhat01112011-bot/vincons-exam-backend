import os
import shutil

# Files to update
files = [
    r'D:\LINH TINH\AI\PHAN MEM\vincons-test-app\index.html',
    r'D:\LINH TINH\AI\PHAN MEM\vincons-test-app\dashboard.html',
    r'D:\LINH TINH\AI\PHAN MEM\vincons-test-app\result.html',
    r'D:\LINH TINH\AI\PHAN MEM\vincons-test-app\app.js'
]

for filepath in files:
    if not os.path.exists(filepath): continue
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update option text in index.html and dashboard.html
    content = content.replace(
        '<option value="Thực hành">Thi Thực hành (Thời gian: 60 phút)</option>',
        '<option value="Thực hành">Thi Tự Luận - Thực Hành (Thời gian: 60 phút)</option>'
    )
    
    # 2. Update result.html display label
    content = content.replace(
        "candidate.examType === 'Lý thuyết' ? 'Thi Lý thuyết' : 'Thi Thực hành'",
        "candidate.examType === 'Lý thuyết' ? 'Thi Lý thuyết' : 'Thi Tự Luận - Thực Hành'"
    )

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"✅ Updated {filepath}")

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
