import json
import os
import shutil

# 1. Update app.js with 100% Bulletproof Null-Safe Logic
app_path = r'D:\LINH TINH\AI\PHAN MEM\vincons-test-app\app.js'

app_code = '''// Vincons Exam App Engine - 100% Null-Safe & GitHub Pages Ready

// Global State Initializer
let candidateInfo = {};
try {
    const raw = localStorage.getItem('vincons_candidate');
    candidateInfo = raw ? JSON.parse(raw) : {};
} catch(e) {
    candidateInfo = {};
}

// Fallback for direct URL access or empty session on GitHub Pages
if (!candidateInfo || !candidateInfo.name) {
    candidateInfo = {
        name: 'Thí Sinh Dự Thi',
        id: 'VINCONS2026',
        examCategory: 'Thi định kỳ',
        job: 'Thợ Điện nước (M&E)',
        discipline: 'Cấp thoát nước',
        examType: 'Lý thuyết',
        examMode: 'Thi chính thức',
        examSet: 'all'
    };
}

let activeQuestions = [];
let currentQuestionIndex = 0;
let answers = {};
try {
    const rawAns = localStorage.getItem('vincons_answers');
    answers = rawAns ? JSON.parse(rawAns) : {};
} catch(e) { answers = {}; }

let timerInterval = null;
let timeLeft = parseInt(localStorage.getItem('vincons_time_left')) || 30 * 60;

function seededRandom(seed) {
    let x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

function seededShuffle(array, seed) {
    let copy = [...array];
    let m = copy.length, t, i;
    let s = seed;
    while (m) {
        i = Math.floor(seededRandom(s++) * m--);
        t = copy[m];
        copy[m] = copy[i];
        copy[i] = t;
    }
    return copy;
}

// Execute safely on DOM ready or window load
if (window.location.pathname.endsWith('exam.html')) {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initExam);
    } else {
        initExam();
    }
}

function initExam() {
    try {
        if (typeof window.applyQuestionOverrides === 'function') {
            window.applyQuestionOverrides();
        }

        // Safely extract candidate options with 100% null fallbacks
        const job = String((candidateInfo && candidateInfo.job) || 'Thợ Điện nước (M&E)');
        const examType = String((candidateInfo && candidateInfo.examType) || 'Lý thuyết');
        const selectedSet = String((candidateInfo && candidateInfo.examSet) || 'all');
        const discipline = String((candidateInfo && candidateInfo.discipline) || 'Cấp thoát nước');
        const discLower = discipline.toLowerCase();

        let theoryQuestions = [];

        if (examType === 'Lý thuyết') {
            if (discLower.includes('cấp thoát nước') || discLower.includes('ctn') || discLower.includes('nước')) {
                theoryQuestions = QUESTIONS.filter(q => {
                    const c = String(q.category || '').toLowerCase();
                    const e = String(q.exam_set || '').toLowerCase();
                    return c.includes('cấp thoát nước') || c.includes('ctn') || e.includes('cấp thoát nước') || e.includes('ctn');
                });
            } else if (discLower.includes('điều hòa') || discLower.includes('đhtg') || discLower.includes('hvac')) {
                theoryQuestions = QUESTIONS.filter(q => {
                    const c = String(q.category || '').toLowerCase();
                    const e = String(q.exam_set || '').toLowerCase();
                    return c.includes('điều hòa') || c.includes('đhtg') || e.includes('điều hòa') || e.includes('đhtg');
                });
            } else if (discLower.includes('phòng cháy') || discLower.includes('pccc')) {
                theoryQuestions = QUESTIONS.filter(q => {
                    const c = String(q.category || '').toLowerCase();
                    const e = String(q.exam_set || '').toLowerCase();
                    return c.includes('pccc') || c.includes('phòng cháy') || e.includes('pccc');
                });
            } else { // Bộ môn Điện
                theoryQuestions = QUESTIONS.filter(q => {
                    const c = String(q.category || '').toLowerCase();
                    const e = String(q.exam_set || '').toLowerCase();
                    return c.includes('điện') || e.includes('điện');
                });
            }

            // Safely filter by Rank (Bậc 2 or Bậc 3)
            if (job.includes('Bậc 2') || selectedSet.includes('Bậc 2')) {
                let b2 = theoryQuestions.filter(q => String(q.category || '').includes('Bậc 2') || String(q.exam_set || '').includes('Bậc 2'));
                if (b2.length > 0) theoryQuestions = b2;
            } else if (job.includes('Bậc 3') || selectedSet.includes('Bậc 3')) {
                let b3 = theoryQuestions.filter(q => String(q.category || '').includes('Bậc 3') || String(q.exam_set || '').includes('Bậc 3'));
                if (b3.length > 0) theoryQuestions = b3;
            }

            // Global Safety Fallback: Ensure theoryQuestions is NEVER 0
            if (theoryQuestions.length === 0) {
                theoryQuestions = QUESTIONS.filter(q => String(q.category || '').toLowerCase().includes('lý thuyết'));
            }
            if (theoryQuestions.length === 0) {
                theoryQuestions = QUESTIONS;
            }

            let questionLimit = (candidateInfo && candidateInfo.examMode === 'Ôn tập') ? (candidateInfo.reviewLimit || 10) : 20;
            let counter = parseInt(localStorage.getItem('vincons_random_counter') || '0') % 30 + 1;
            localStorage.setItem('vincons_random_counter', counter.toString());
            let examSeed = counter * 12345 + (discipline.length * 99);
            let examTitleNotice = `Đề ngẫu nhiên số ${String(counter).padStart(2, '0')}/30`;

            activeQuestions = seededShuffle(theoryQuestions, examSeed).slice(0, questionLimit);

            const modeText = (candidateInfo && candidateInfo.examMode === 'Ôn tập') ? ' [CHẾ ĐỘ ÔN TẬP]' : '';
            const titleEl = document.getElementById('examTitle');
            if (titleEl) titleEl.textContent = `Phần Thi: Lý Thuyết - ${discipline} (${examTitleNotice})${modeText}`;

            if (isNaN(timeLeft) || timeLeft <= 0) {
                timeLeft = 30 * 60;
            }
        } else { // Thực hành
            let prac = QUESTIONS.filter(q => {
                const c = String(q.category || '').toLowerCase();
                const e = String(q.exam_set || '').toLowerCase();
                return c.includes('thực hành') || c.includes('tự luận') || e.includes('thực hành');
            });

            if (prac.length === 0) prac = QUESTIONS;
            activeQuestions = prac.slice(0, 20);

            const titleEl = document.getElementById('examTitle');
            if (titleEl) titleEl.textContent = `Phần thi Tự luận - Thực hành & Bóc Tách Bản Vẽ (${discipline})`;
            if (isNaN(timeLeft) || timeLeft <= 0) timeLeft = 60 * 60;
        }

        // Render Candidate info safely
        const candidateEl = document.getElementById('candidateDisplayInfo');
        if (candidateEl) {
            candidateEl.innerHTML = `
                <strong>Họ tên:</strong> ${candidateInfo.name || 'Thí Sinh'}<br>
                <strong>SBD/SĐT:</strong> ${candidateInfo.id || 'VINCONS'}<br>
                <strong>Hình thức:</strong> ${candidateInfo.examCategory || 'Thi định kỳ'}<br>
                <strong>Vị trí:</strong> ${job}
            `;
        }

        localStorage.setItem('vincons_active_questions', JSON.stringify(activeQuestions));

        renderGrid();
        showQuestion(0);
        startTimer();
    } catch(err) {
        console.error("Critical Exception in initExam:", err);
        // Emergency Fallback Render
        if (typeof QUESTIONS !== 'undefined' && QUESTIONS.length > 0) {
            activeQuestions = QUESTIONS.slice(0, 20);
            renderGrid();
            showQuestion(0);
            startTimer();
        }
    }
}

function renderGrid() {
    const grid = document.getElementById('questionsGrid');
    if (!grid) return;
    grid.innerHTML = '';
    activeQuestions.forEach((q, index) => {
        const item = document.createElement('div');
        item.className = 'grid-item';
        item.id = `gridItem_${index}`;
        item.textContent = index + 1;
        if (answers[q.id] !== undefined) {
            item.classList.add('answered');
        }
        if (index === currentQuestionIndex) {
            item.classList.add('current');
        }
        item.onclick = () => showQuestion(index);
        grid.appendChild(item);
    });
}

function showQuestion(index) {
    if (index < 0 || index >= activeQuestions.length) return;
    currentQuestionIndex = index;
    const q = activeQuestions[index];

    const imgPanel = document.getElementById('imagePanel');
    const imgEl = document.getElementById('questionImage');
    if (q && q.image && imgEl) {
        imgEl.src = q.image;
        if (imgPanel) imgPanel.style.display = 'block';
    } else if (imgPanel) {
        imgPanel.style.display = 'none';
    }

    const numLabel = document.getElementById('questionNumLabel');
    if (numLabel) numLabel.textContent = `Câu hỏi ${index + 1}/${activeQuestions.length} (${(q && q.category) || 'Lý thuyết'})`;

    const qContent = document.getElementById('questionContent');
    if (qContent) qContent.textContent = (q && q.question) || 'Văn bản câu hỏi đang được cập nhật...';

    const container = document.getElementById('optionsContainer');
    if (container) {
        container.innerHTML = '';
        const opts = (q && q.options && Array.isArray(q.options)) ? q.options : ['Đang cập nhật tùy chọn A', 'Đang cập nhật tùy chọn B'];
        opts.forEach((opt, optIndex) => {
            const label = document.createElement('label');
            label.className = 'option-item';
            
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `question_${q.id}`;
            radio.value = optIndex;
            if (answers[q.id] === optIndex) {
                radio.checked = true;
                label.classList.add('selected');
            }

            radio.onchange = () => {
                answers[q.id] = optIndex;
                localStorage.setItem('vincons_answers', JSON.stringify(answers));
                
                document.querySelectorAll('.option-item').forEach(el => el.classList.remove('selected'));
                label.classList.add('selected');
                
                const gridItem = document.getElementById(`gridItem_${index}`);
                if (gridItem) gridItem.classList.add('answered');
            };

            const span = document.createElement('span');
            span.textContent = `${String.fromCharCode(65 + optIndex)}. ${opt}`;

            label.appendChild(radio);
            label.appendChild(span);
            container.appendChild(label);
        });
    }

    const btnPrev = document.getElementById('btnPrev');
    const btnNext = document.getElementById('btnNext');
    if (btnPrev) btnPrev.disabled = (index === 0);
    if (btnNext) btnNext.disabled = (index === activeQuestions.length - 1);

    document.querySelectorAll('.grid-item').forEach((item, i) => {
        if (i === index) item.classList.add('current');
        else item.classList.remove('current');
    });
}

function prevQuestion() { showQuestion(currentQuestionIndex - 1); }
function nextQuestion() { showQuestion(currentQuestionIndex + 1); }

function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    const timerText = document.getElementById('countdownText');
    
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert('⏰ Đã hết thời gian làm bài! Hệ thống tự động nộp bài.');
            submitExam();
            return;
        }
        timeLeft--;
        localStorage.setItem('vincons_time_left', timeLeft.toString());
        
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        if (timerText) {
            timerText.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
    }, 1000);
}

function confirmSubmit() {
    const total = activeQuestions.length;
    const answeredCount = Object.keys(answers).length;
    if (confirm(`Bạn đã trả lời ${answeredCount}/${total} câu hỏi. Bạn có chắc chắn muốn NỘP BÀI KHÔNG?`)) {
        submitExam();
    }
}

function submitExam() {
    if (timerInterval) clearInterval(timerInterval);
    let correctCount = 0;
    activeQuestions.forEach(q => {
        if (answers[q.id] === q.correct_index) correctCount++;
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
}
'''

with open(app_path, 'w', encoding='utf-8') as f:
    f.write(app_code)
print(f"✅ Updated {app_path} with 100% null-safe logic.")

# 2. Update auth-guard.js to never wipe sessions
guard_path = r'D:\LINH TINH\AI\PHAN MEM\vincons-test-app\js\auth-guard.js'
guard_code = '''// Vincons Central Authentication Guard
(function() {
    const currentPath = window.location.pathname;
    const isLoginPage = currentPath.endsWith('login.html');
    const isAdminPage = currentPath.endsWith('admin.html');
    const isIndexPage = currentPath === '/' || currentPath.endsWith('index.html');
    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.protocol === 'file:';

    let isAdmin = false;
    try {
        const raw = localStorage.getItem('vincons_admin');
        if (raw === 'true') isAdmin = true;
    } catch (e) { isAdmin = false; }

    if (isAdminPage && !isAdmin) {
        window.location.href = 'login.html';
        return;
    }
    if (isLoginPage && isAdmin) {
        window.location.href = 'admin.html';
        return;
    }
})();
'''
with open(guard_path, 'w', encoding='utf-8') as f:
    f.write(guard_code)
print(f"✅ Updated {guard_path}")

# 3. Update exam.html with inline fail-safe watchdog
exam_path = r'D:\LINH TINH\AI\PHAN MEM\vincons-test-app\exam.html'
with open(exam_path, 'r', encoding='utf-8') as f:
    html = f.read()

# Make sure exam.html has clean cache buster timestamp
timestamp = 'v=20260825_final'
lines = html.splitlines()
cleaned_lines = []
for line in lines:
    if 'questions.js' in line and '<script' in line:
        cleaned_lines.append(f'    <script src="questions.js?{timestamp}"></script>')
    elif 'app.js' in line and '<script' in line:
        cleaned_lines.append(f'    <script src="app.js?{timestamp}"></script>')
    else:
        cleaned_lines.append(line)

new_exam_html = '\n'.join(cleaned_lines)
if 'Fail-Safe Question Watchdog' not in new_exam_html:
    watchdog = '''
    <!-- Fail-Safe Question Watchdog -->
    <script>
        window.addEventListener('load', function() {
            setTimeout(function() {
                var qContent = document.getElementById('questionContent');
                if (qContent && (qContent.textContent === 'Đang tải câu hỏi...' || qContent.textContent.trim() === '')) {
                    console.warn('Watchdog triggered initExam()');
                    if (typeof initExam === 'function') initExam();
                }
            }, 300);
        });
    </script>
    '''
    new_exam_html = new_exam_html.replace('</body>', watchdog + '\n</body>')

with open(exam_path, 'w', encoding='utf-8') as f:
    f.write(new_exam_html)
print(f"✅ Updated {exam_path}")

# 4. Sync across all build directories
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

js_src = r'D:\LINH TINH\AI\PHAN MEM\vincons-test-app\js'
for tdir in target_dirs:
    js_dst = os.path.join(tdir, 'js')
    if os.path.exists(js_src) and os.path.exists(tdir):
        os.makedirs(js_dst, exist_ok=True)
        for f in os.listdir(js_src):
            shutil.copy(os.path.join(js_src, f), os.path.join(js_dst, f))
