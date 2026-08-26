import os
import shutil

# 1. Update result.html
result_path = r'D:\LINH TINH\AI\PHAN MEM\vincons-test-app\result.html'
with open(result_path, 'r', encoding='utf-8') as f:
    res_code = f.read()

# Replace data loading block in result.html
old_data_load = '''        // Load data from localStorage
        const candidate = JSON.parse(localStorage.getItem('vincons_candidate'));
        const answers = JSON.parse(localStorage.getItem('vincons_answers')) || {};
        
        if (!candidate) {
            alert('Không tìm thấy thông tin thí sinh. Vui lòng đăng ký lại.');
            window.location.href = 'index.html';
        }
        
        // Load active questions from localStorage
        const activeQuestions = JSON.parse(localStorage.getItem('vincons_active_questions')) || [];
        
        // Calculate score
        let correctCount = 0;
        activeQuestions.forEach((q, index) => {
            // Type-safe lookup by both q.id and index
            const userAnswer = (answers && (answers[q.id] !== undefined ? answers[q.id] : answers[index]));
            if (userAnswer !== undefined && parseInt(userAnswer) === parseInt(q.correct_index)) {
                correctCount++;
            }
        });
        
        const totalCount = activeQuestions.length;
        const scorePercentage = totalCount > 0 ? (correctCount / totalCount) * 100 : 0;'''

new_data_load = '''        // Load fail-safe data from localStorage
        const resultData = JSON.parse(localStorage.getItem('vincons_result')) || {};
        const candidate = resultData.candidate || JSON.parse(localStorage.getItem('vincons_candidate'));
        const activeQuestions = resultData.activeQuestions || JSON.parse(localStorage.getItem('vincons_active_questions')) || [];
        const answers = resultData.answers || JSON.parse(localStorage.getItem('vincons_answers_backup')) || JSON.parse(localStorage.getItem('vincons_answers')) || {};
        
        if (!candidate) {
            alert('Không tìm thấy thông tin thí sinh. Vui lòng đăng ký lại.');
            window.location.href = 'index.html';
        }
        
        // Fail-safe score calculation
        let correctCount = 0;
        if (typeof resultData.correctCount === 'number' && resultData.correctCount >= 0) {
            correctCount = resultData.correctCount;
        } else {
            activeQuestions.forEach((q, index) => {
                const userAnswer = (answers && (answers[q.id] !== undefined ? answers[q.id] : answers[index]));
                if (userAnswer !== undefined && parseInt(userAnswer) === parseInt(q.correct_index)) {
                    correctCount++;
                }
            });
        }
        
        const totalCount = activeQuestions.length || resultData.totalQuestions || 20;
        const scorePercentage = totalCount > 0 ? (correctCount / totalCount) * 100 : 0;'''

if old_data_load in res_code:
    res_code = res_code.replace(old_data_load, new_data_load)
    print(f"✅ Replaced data load block in {result_path}")

# Fix review container rendering loop in result.html
old_review_loop = '''        activeQuestions.forEach((q, index) => {
            const userAnswer = answers[index];
            
            let isCorrect = false;
            if (q.type === 'multiple_choice') {
                isCorrect = userAnswer !== undefined && userAnswer === q.correct_index;
            }'''

new_review_loop = '''        activeQuestions.forEach((q, index) => {
            const userAnswer = (answers && (answers[q.id] !== undefined ? answers[q.id] : answers[index]));
            
            let isCorrect = false;
            if (q.type === 'multiple_choice' || !q.type) {
                isCorrect = (userAnswer !== undefined && parseInt(userAnswer) === parseInt(q.correct_index));
            }'''

if old_review_loop in res_code:
    res_code = res_code.replace(old_review_loop, new_review_loop)
    print(f"✅ Replaced review loop in {result_path}")

# Fix options rendering check in result.html
old_opt_render = '''                    if (optIdx === q.correct_index) {
                        statusClass = 'correct-answer'; 
                    } else if (userAnswer !== undefined && optIdx === userAnswer && !isCorrect) {
                        statusClass = 'selected-wrong'; 
                    }'''

new_opt_render = '''                    if (parseInt(optIdx) === parseInt(q.correct_index)) {
                        statusClass = 'correct-answer'; 
                    } else if (userAnswer !== undefined && parseInt(optIdx) === parseInt(userAnswer) && !isCorrect) {
                        statusClass = 'selected-wrong'; 
                    }'''

if old_opt_render in res_code:
    res_code = res_code.replace(old_opt_render, new_opt_render)
    print(f"✅ Replaced option rendering check in {result_path}")

with open(result_path, 'w', encoding='utf-8') as f:
    f.write(res_code)

# 2. Update app.js
app_path = r'D:\LINH TINH\AI\PHAN MEM\vincons-test-app\app.js'
with open(app_path, 'r', encoding='utf-8') as f:
    app_code = f.read()

old_app_submit = '''function submitExam() {
    if (timerInterval) clearInterval(timerInterval);
    let correctCount = 0;
    activeQuestions.forEach((q, index) => {
        const userAns = (answers && (answers[q.id] !== undefined ? answers[q.id] : answers[index]));
        if (userAns !== undefined && parseInt(userAns) === parseInt(q.correct_index)) {
            correctCount++;
        }
    });

    const score = Math.round((correctCount / activeQuestions.length) * 100);
    const resultData = {
        candidate: candidateInfo,
        activeQuestions: activeQuestions,
        answers: answers,
        score: score,
        correctCount: correctCount,
        totalQuestions: activeQuestions.length,
        submittedAt: new Date().toLocaleString('vi-VN')
    };

    localStorage.setItem('vincons_result', JSON.stringify(resultData));
    localStorage.removeItem('vincons_answers');
    localStorage.removeItem('vincons_time_left');
    window.location.href = 'result.html';
}'''

new_app_submit = '''function submitExam() {
    if (timerInterval) clearInterval(timerInterval);
    let correctCount = 0;
    activeQuestions.forEach((q, index) => {
        const userAns = (answers && (answers[q.id] !== undefined ? answers[q.id] : answers[index]));
        if (userAns !== undefined && parseInt(userAns) === parseInt(q.correct_index)) {
            correctCount++;
        }
    });

    const score = Math.round((correctCount / activeQuestions.length) * 100);
    const resultData = {
        candidate: candidateInfo,
        activeQuestions: activeQuestions,
        answers: answers,
        score: score,
        correctCount: correctCount,
        totalQuestions: activeQuestions.length,
        submittedAt: new Date().toLocaleString('vi-VN')
    };

    localStorage.setItem('vincons_result', JSON.stringify(resultData));
    localStorage.setItem('vincons_answers_backup', JSON.stringify(answers));
    localStorage.removeItem('vincons_time_left');
    window.location.href = 'result.html';
}'''

if old_app_submit in app_code:
    app_code = app_code.replace(old_app_submit, new_app_submit)
    with open(app_path, 'w', encoding='utf-8') as f:
        f.write(app_code)
    print(f"✅ Fixed submitExam in {app_path}")

# 3. Sync to target build folders
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
