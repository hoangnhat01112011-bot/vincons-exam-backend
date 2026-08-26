import os
import shutil

# 1. UPDATE RESULT.HTML WITH ULTIMATE FAIL-SAFE ENGINE
result_path = r'D:\LINH TINH\AI\PHAN MEM\vincons-test-app\result.html'

result_html_content = '''<!DOCTYPE html>
<html lang="vi">
<head>
    <meta name="format-detection" content="telephone=no, date=no, email=no, address=no">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kết Quả Đánh Giá Bậc Thợ - Vincons</title>
    <link rel="stylesheet" href="style.css">
    <script src="js/auth-guard.js"></script>
    <script src="js/config.js"></script>
    <script>
        const isAdmin = localStorage.getItem('vincons_admin') === 'true';

        function handleLogout() {
            if (confirm('Bạn có chắc chắn muốn thoát quyền Giám thị?')) {
                localStorage.removeItem('vincons_admin');
                window.location.reload();
            }
        }
    </script>
</head>
<body>
    <header>
        <div class="logo-container">
            <div class="logo-icon">VC</div>
            <div class="logo-text">
                <h1>Vincons</h1>
                <p>BCH Hạ Long Xanh</p>
            </div>
        </div>
        <div class="header-nav" style="display: flex; align-items: center; gap: 15px;">
            <a href="index.html" class="nav-link">🏠 Trang chủ</a>
            <a href="history.html" class="nav-link">📋 Lịch sử bài thi</a>
            <a href="admin.html" class="nav-link" id="navAdminLink" style="display: none;">👑 Quản trị Admin</a>
            <button onclick="handleLogout()" id="btnLogout" class="btn btn-secondary btn-sm" style="display: none; padding: 6px 12px; font-size: 12px;">Thoát Admin</button>
        </div>
    </header>

    <div id="toastContainer" class="toast-container"></div>

    <main style="flex-direction: column; justify-content: flex-start; gap: 30px;">
        <div class="card" style="max-width: 900px; padding: 30px;">
            <h2 class="card-title" style="margin-bottom: 10px;">BÁO CÁO KẾT QUẢ ĐÁNH GIÁ</h2>
            <p style="text-align: center; color: #7f8c8d; font-size: 13px; font-weight: 600; text-transform: uppercase; margin-bottom: 20px;">
                Dự án: Khu Đô Thị Phức Hợp Hạ Long Xanh
            </p>
            
            <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 30px; border-top: 1.5px solid var(--border); padding-top: 24px;">
                <div style="font-size: 15px; line-height: 1.8; display: flex; flex-direction: column; gap: 10px;">
                    <div><strong style="color: var(--primary);">Họ và tên:</strong> <span id="resName" style="font-weight: 700;">Thí Sinh Dự Thi</span></div>
                    <div><strong style="color: var(--primary);">Số báo danh/SĐT:</strong> <span id="resId">VINCONS2026</span></div>
                    <div><strong style="color: var(--primary);">Vị trí đánh giá:</strong> <span id="resJob" style="font-weight: 600;">Thợ Điện nước (M&E)</span></div>
                    <div><strong style="color: var(--primary);">Phần thi thực hiện:</strong> <span id="resExamType" style="font-weight: 700; color: var(--accent);">Thi Lý thuyết</span></div>
                    <div><strong style="color: var(--primary);">Thời gian nộp bài:</strong> <span id="resTime">-</span></div>
                </div>

                <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; border-left: 1.5px solid var(--border); padding-left: 20px;">
                    <div class="score-badge">
                        <span class="score-num" id="resScore">0/20</span>
                        <span class="score-lbl">Câu đúng</span>
                    </div>
                    
                    <div class="result-badge" id="resStatusBadge">CHƯA ĐẠT</div>
                </div>
            </div>
            
            <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 15px; margin-top: 30px; border-top: 1.5px solid var(--border); padding-top: 20px;">
                <button class="btn btn-primary" onclick="window.print()">🖨️ In báo cáo (PDF)</button>
                <a href="history.html" class="btn btn-secondary">📜 Xem lịch sử thi</a>
                <a href="index.html" class="btn btn-secondary">Quay lại trang chủ</a>
            </div>
        </div>

        <div class="result-details-section">
            <h3 class="grid-title" style="font-size: 16px; margin-bottom: 10px; border-bottom: 2px solid var(--primary); padding-bottom: 8px;">
                CHI TIẾT BÀI LÀM CỦA THÍ SINH
            </h3>
            <div id="reviewContainer" style="display: flex; flex-direction: column; gap: 15px;">
            </div>
        </div>
    </main>

    <footer>
        &copy; 2026 Vincons - Ban Chỉ Huy Dự Án Hạ Long Xanh. All rights reserved.
    </footer>

    <script src="questions.js?v=20260826_v3"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            renderResultPage();
        });

        function renderResultPage() {
            let resultData = null;
            try {
                resultData = JSON.parse(localStorage.getItem('vincons_result'));
            } catch(e) {}

            if (!resultData || !resultData.activeQuestions || resultData.activeQuestions.length === 0) {
                try {
                    const history = JSON.parse(localStorage.getItem('vincons_exam_history')) || [];
                    if (history.length > 0) {
                        resultData = history[history.length - 1];
                    }
                } catch(e) {}
            }

            if (!resultData || !resultData.activeQuestions || resultData.activeQuestions.length === 0) {
                const demoQuestions = (typeof QUESTIONS !== 'undefined' && QUESTIONS.length >= 20) ? QUESTIONS.slice(0, 20) : [];
                resultData = {
                    candidate: JSON.parse(localStorage.getItem('vincons_candidate')) || {
                        name: 'Thí Sinh Dự Thi',
                        id: 'VINCONS2026',
                        job: 'Thợ Điện nước (M&E)',
                        examType: 'Lý thuyết',
                        examMode: 'Thi chính thức'
                    },
                    activeQuestions: demoQuestions,
                    answers: {},
                    score: 0,
                    correctCount: 0,
                    totalQuestions: demoQuestions.length || 20,
                    submittedAt: new Date().toLocaleString('vi-VN')
                };
            }

            const candidate = resultData.candidate || { name: 'Thí Sinh Dự Thi', id: 'VINCONS2026', job: 'Thợ Điện nước (M&E)', examType: 'Lý thuyết' };
            const activeQuestions = resultData.activeQuestions || [];
            const answers = resultData.answers || {};

            let correctCount = 0;
            if (typeof resultData.correctCount === 'number' && resultData.correctCount >= 0) {
                correctCount = resultData.correctCount;
            } else {
                activeQuestions.forEach((q, index) => {
                    const uAns = (answers && (answers[q.id] !== undefined ? answers[q.id] : answers[index]));
                    if (uAns !== undefined && parseInt(uAns) === parseInt(q.correct_index)) {
                        correctCount++;
                    }
                });
            }

            const totalCount = activeQuestions.length > 0 ? activeQuestions.length : (resultData.totalQuestions || 20);
            const scorePercentage = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;
            const isPass = scorePercentage >= 70;

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
            }

            const reviewContainer = document.getElementById('reviewContainer');
            if (reviewContainer && activeQuestions.length > 0) {
                reviewContainer.innerHTML = '';
                activeQuestions.forEach((q, index) => {
                    const userAnswer = (answers && (answers[q.id] !== undefined ? answers[q.id] : answers[index]));
                    const isCorrect = (userAnswer !== undefined && parseInt(userAnswer) === parseInt(q.correct_index));

                    const item = document.createElement('div');
                    item.className = 'review-item';

                    let optionsHTML = '';
                    const opts = q.options || ['Tùy chọn A', 'Tùy chọn B', 'Tùy chọn C', 'Tùy chọn D'];
                    opts.forEach((opt, optIdx) => {
                        let statusClass = '';
                        if (parseInt(optIdx) === parseInt(q.correct_index)) {
                            statusClass = 'correct-answer';
                        } else if (userAnswer !== undefined && parseInt(optIdx) === parseInt(userAnswer) && !isCorrect) {
                            statusClass = 'selected-wrong';
                        }

                        optionsHTML += `
                            <div class="review-opt ${statusClass}">
                                ${String.fromCharCode(65 + optIdx)}. ${opt}
                                ${parseInt(optIdx) === parseInt(q.correct_index) ? ' ✓ (Đáp án đúng)' : ''}
                                ${userAnswer !== undefined && parseInt(optIdx) === parseInt(userAnswer) && !isCorrect ? ' ✗ (Lựa chọn của bạn)' : ''}
                            </div>
                        `;
                    });

                    item.innerHTML = `
                        <div class="review-q-num">Câu hỏi ${index + 1}/${activeQuestions.length} (${q.category || 'Lý thuyết'}) — <span style="color: ${isCorrect ? '#22c55e' : '#ef4444'}; font-weight: bold;">${isCorrect ? 'ĐÚNG' : (userAnswer === undefined ? 'CHƯA TRẢ LỜI' : 'SAI')}</span></div>
                        <div class="review-q-text">${q.question || 'Văn bản câu hỏi...'}</div>
                        ${q.image ? `<div style="margin: 10px 0;"><img src="${q.image}" style="max-width: 100%; max-height: 300px; border-radius: 6px;"></div>` : ''}
                        <div class="review-options">${optionsHTML}</div>
                    `;
                    reviewContainer.appendChild(item);
                });
            }
        }
    </script>
</body>
</html>'''

with open(result_path, 'w', encoding='utf-8') as f:
    f.write(result_html_content)
print(f"✅ Saved ultimate fail-safe {result_path}")

# 2. UPDATE APP.JS WITH PERMANENT HISTORY LOGGING
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
        
        let history = [];
        try {
            history = JSON.parse(localStorage.getItem('vincons_exam_history')) || [];
        } catch(err) { history = []; }
        history.push(resultData);
        localStorage.setItem('vincons_exam_history', JSON.stringify(history));
    } catch(e) {
        console.error("Storage save error:", e);
    }
    
    window.location.href = 'result.html';
}'''

if old_app_submit in app_code:
    app_code = app_code.replace(old_app_submit, new_app_submit)
    with open(app_path, 'w', encoding='utf-8') as f:
        f.write(app_code)
    print(f"✅ Updated submitExam with permanent history in {app_path}")

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
