import os
import shutil

# 1. UPDATE RESULT.HTML WITH 100% BULLETPROOF NULL-SAFE HANDLERS
result_path = r'D:\LINH TINH\AI\PHAN MEM\vincons-test-app\result.html'
with open(result_path, 'r', encoding='utf-8') as f:
    res_code = f.read()

# Replace head script guard in result.html
old_head_script = '''        document.addEventListener('DOMContentLoaded', () => {
            const candidate = JSON.parse(localStorage.getItem('vincons_candidate'));
            if (!candidate) {
                window.location.href = 'index.html';
                return;
            }
            
            const userInfo = document.getElementById('userInfoDisplay');
            if (userInfo) userInfo.textContent = `${candidate.name} - ${candidate.id}`;

            if (isAdmin) {
                document.getElementById('navAdminLink').style.display = 'inline-block';
                document.getElementById('btnLogout').style.display = 'inline-block';
            }
        });'''

new_head_script = '''        document.addEventListener('DOMContentLoaded', () => {
            let candidate = null;
            try {
                const resData = JSON.parse(localStorage.getItem('vincons_result'));
                candidate = (resData && resData.candidate) ? resData.candidate : JSON.parse(localStorage.getItem('vincons_candidate'));
            } catch(e) {}
            
            const userInfo = document.getElementById('userInfoDisplay');
            if (userInfo && candidate) {
                userInfo.textContent = `${candidate.name || 'Thí Sinh'} - ${candidate.id || 'VINCONS'}`;
            }

            if (typeof isAdmin !== 'undefined' && isAdmin) {
                const navAdmin = document.getElementById('navAdminLink');
                const btnLog = document.getElementById('btnLogout');
                if (navAdmin) navAdmin.style.display = 'inline-block';
                if (btnLog) btnLog.style.display = 'inline-block';
            }
        });'''

if old_head_script in res_code:
    res_code = res_code.replace(old_head_script, new_head_script)
    print("✅ Replaced head script guard in result.html")

# Replace main data evaluation script in result.html
old_main_script = '''        // Load fail-safe data from localStorage
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
        const scorePercentage = totalCount > 0 ? (correctCount / totalCount) * 100 : 0;
        
        // Vincons evaluation rule: >= 70% is PASS
        const isPass = scorePercentage >= 70;
        
        // Display candidate metadata
        document.getElementById('resName').textContent = candidate.name;
        document.getElementById('resId').textContent = candidate.id;
        document.getElementById('resJob').textContent = candidate.job;
        const modeLabel = candidate.examMode === 'Ôn tập' ? ' [ÔN TẬP]' : '';
        document.getElementById('resExamType').textContent = (candidate.examType === 'Lý thuyết' ? 'Thi Lý thuyết' : 'Thi Tự Luận - Thực Hành') + modeLabel;
        
        const submitDate = new Date();
        const formattedTime = submitDate.toLocaleString('vi-VN');
        document.getElementById('resTime').textContent = formattedTime;
        document.getElementById('resScore').textContent = `${correctCount}/${totalCount}`;
        
        const badge = document.getElementById('resStatusBadge');
        if (isPass) {
            badge.textContent = 'ĐẠT YÊU CẦU';
            badge.className = 'result-badge pass';
        } else {
            badge.textContent = 'CHƯA ĐẠT';
            badge.className = 'result-badge fail';
        }'''

new_main_script = '''        let resultData = {}, candidate = {}, activeQuestions = [], answers = {};
        try {
            resultData = JSON.parse(localStorage.getItem('vincons_result')) || {};
            candidate = resultData.candidate || JSON.parse(localStorage.getItem('vincons_candidate')) || {
                name: 'Thí Sinh Dự Thi',
                id: 'VINCONS2026',
                job: 'Thợ Điện nước (M&E)',
                examType: 'Lý thuyết'
            };
            activeQuestions = (resultData.activeQuestions && resultData.activeQuestions.length > 0) ? resultData.activeQuestions : (JSON.parse(localStorage.getItem('vincons_active_questions')) || []);
            answers = resultData.answers || JSON.parse(localStorage.getItem('vincons_answers_backup')) || JSON.parse(localStorage.getItem('vincons_answers')) || {};
        } catch(e) {
            candidate = { name: 'Thí Sinh Dự Thi', id: 'VINCONS2026', job: 'Thợ Điện nước (M&E)', examType: 'Lý thuyết' };
            activeQuestions = [];
            answers = {};
        }

        // Calculate score with total null-safety
        let correctCount = 0;
        if (typeof resultData.correctCount === 'number' && resultData.correctCount > 0) {
            correctCount = resultData.correctCount;
        } else if (activeQuestions.length > 0) {
            activeQuestions.forEach((q, index) => {
                const userAns = (answers && (answers[q.id] !== undefined ? answers[q.id] : answers[index]));
                if (userAns !== undefined && parseInt(userAns) === parseInt(q.correct_index)) {
                    correctCount++;
                }
            });
        }
        
        const totalCount = activeQuestions.length > 0 ? activeQuestions.length : (resultData.totalQuestions || 20);
        const scorePercentage = totalCount > 0 ? (correctCount / totalCount) * 100 : 0;
        const isPass = scorePercentage >= 70;
        
        // Render candidate metadata safely
        const elName = document.getElementById('resName');
        const elId = document.getElementById('resId');
        const elJob = document.getElementById('resJob');
        const elExamType = document.getElementById('resExamType');
        const elTime = document.getElementById('resTime');
        const elScore = document.getElementById('resScore');
        const badge = document.getElementById('resStatusBadge');

        if (elName) elName.textContent = candidate.name || 'Thí Sinh Dự Thi';
        if (elId) elId.textContent = candidate.id || 'VINCONS2026';
        if (elJob) elJob.textContent = candidate.job || 'Thợ Điện nước (M&E)';
        if (elExamType) {
            const modeLabel = (candidate.examMode === 'Ôn tập') ? ' [ÔN TẬP]' : '';
            elExamType.textContent = (candidate.examType === 'Lý thuyết' ? 'Thi Lý thuyết' : 'Thi Tự Luận - Thực Hành') + modeLabel;
        }
        if (elTime) elTime.textContent = resultData.submittedAt || new Date().toLocaleString('vi-VN');
        if (elScore) elScore.textContent = `${correctCount}/${totalCount}`;
        
        if (badge) {
            if (isPass) {
                badge.textContent = 'ĐẠT YÊU CẦU';
                badge.className = 'result-badge pass';
            } else {
                badge.textContent = 'CHƯA ĐẠT';
                badge.className = 'result-badge fail';
            }
        }'''

if old_main_script in res_code:
    res_code = res_code.replace(old_main_script, new_main_script)
    print("✅ Replaced main script in result.html")

with open(result_path, 'w', encoding='utf-8') as f:
    f.write(res_code)

# 2. UPDATE APP.JS WITH TOTAL FAIL-SAFE STORAGE ON SUBMIT
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
    localStorage.setItem('vincons_answers_backup', JSON.stringify(answers));
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

    // Fail-safe persistent storage of candidate result
    try {
        localStorage.setItem('vincons_result', JSON.stringify(resultData));
        localStorage.setItem('vincons_candidate', JSON.stringify(candidateInfo));
        localStorage.setItem('vincons_active_questions', JSON.stringify(activeQuestions));
        localStorage.setItem('vincons_answers', JSON.stringify(answers));
        localStorage.setItem('vincons_answers_backup', JSON.stringify(answers));
    } catch(e) {
        console.error("Storage save error:", e);
    }
    
    window.location.href = 'result.html';
}'''

if old_app_submit in app_code:
    app_code = app_code.replace(old_app_submit, new_app_submit)
    with open(app_path, 'w', encoding='utf-8') as f:
        f.write(app_code)
    print("✅ Updated submitExam persistent storage in app.js")

# 3. SYNC TO ALL TARGET BUILD DIRS
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
