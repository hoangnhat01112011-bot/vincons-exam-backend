import os
import shutil

# 1. Update result.html
result_path = r'D:\LINH TINH\AI\PHAN MEM\vincons-test-app\result.html'
with open(result_path, 'r', encoding='utf-8') as f:
    res_code = f.read()

old_res_loop = '''        activeQuestions.forEach((q, index) => {
            const userAnswer = answers[index];
            if (q.type === 'multiple_choice') {
                if (userAnswer !== undefined && userAnswer === q.correct_index) {
                    correctCount++;
                }
            } else if (q.type === 'input_group') {
                if (userAnswer !== undefined) {
                    let allCorrect = true;
                    q.sub_questions.forEach(subQ => {
                        if (String(userAnswer[subQ.id]) !== String(subQ.correct_value)) {
                            allCorrect = false;
                        }
                    });
                    if (allCorrect) correctCount++;
                }
            }
        });'''

new_res_loop = '''        activeQuestions.forEach((q, index) => {
            // Type-safe lookup by both q.id and index
            const userAnswer = (answers && (answers[q.id] !== undefined ? answers[q.id] : answers[index]));
            if (userAnswer !== undefined && parseInt(userAnswer) === parseInt(q.correct_index)) {
                correctCount++;
            }
        });'''

if old_res_loop in res_code:
    res_code = res_code.replace(old_res_loop, new_res_loop)
    with open(result_path, 'w', encoding='utf-8') as f:
        f.write(res_code)
    print(f"✅ Fixed scoring logic in {result_path}")

# 2. Update app.js
app_path = r'D:\LINH TINH\AI\PHAN MEM\vincons-test-app\app.js'
with open(app_path, 'r', encoding='utf-8') as f:
    app_code = f.read()

old_app_submit = '''function submitExam() {
    if (timerInterval) clearInterval(timerInterval);
    let correctCount = 0;
    activeQuestions.forEach(q => {
        if (answers[q.id] === q.correct_index) correctCount++;
    });'''

new_app_submit = '''function submitExam() {
    if (timerInterval) clearInterval(timerInterval);
    let correctCount = 0;
    activeQuestions.forEach((q, index) => {
        const userAns = (answers && (answers[q.id] !== undefined ? answers[q.id] : answers[index]));
        if (userAns !== undefined && parseInt(userAns) === parseInt(q.correct_index)) {
            correctCount++;
        }
    });'''

if old_app_submit in app_code:
    app_code = app_code.replace(old_app_submit, new_app_submit)

# Also update radio.onchange in app.js to save both answers[q.id] and answers[index]
old_onchange = '''            radio.onchange = () => {
                answers[q.id] = optIndex;
                localStorage.setItem('vincons_answers', JSON.stringify(answers));'''

new_onchange = '''            radio.onchange = () => {
                answers[q.id] = optIndex;
                answers[index] = optIndex;
                localStorage.setItem('vincons_answers', JSON.stringify(answers));'''

if old_onchange in app_code:
    app_code = app_code.replace(old_onchange, new_onchange)

with open(app_path, 'w', encoding='utf-8') as f:
    f.write(app_code)
print(f"✅ Fixed scoring logic in {app_path}")

# 3. Sync to all target build directories
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
