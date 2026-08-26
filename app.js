// Vincons Exam App Engine - 100% Strict Discipline Isolation & Instant Web Login Ready

let candidateInfo = {};
try {
    const raw = localStorage.getItem('vincons_candidate');
    candidateInfo = raw ? JSON.parse(raw) : {};
} catch(e) {
    candidateInfo = {};
}

// Fallback for direct URL access
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
                    return c.includes('điều hòa') || c.includes('đhtg') || c.includes('hvac') || e.includes('điều hòa') || e.includes('đhtg') || e.includes('hvac');
                });
            } else if (discLower.includes('phòng cháy') || discLower.includes('pccc')) {
                theoryQuestions = QUESTIONS.filter(q => {
                    const c = String(q.category || '').toLowerCase();
                    const e = String(q.exam_set || '').toLowerCase();
                    return c.includes('pccc') || c.includes('phòng cháy') || e.includes('pccc');
                });
            } else { // Điện
                theoryQuestions = QUESTIONS.filter(q => {
                    const c = String(q.category || '').toLowerCase();
                    const e = String(q.exam_set || '').toLowerCase();
                    return c.includes('điện') || e.includes('điện');
                });
            }

            // Strictly filter by Rank (Bậc 2 or Bậc 3) WITHIN discipline
            if (job.includes('Bậc 2') || selectedSet.includes('Bậc 2')) {
                let b2 = theoryQuestions.filter(q => String(q.category || '').includes('Bậc 2') || String(q.exam_set || '').includes('Bậc 2'));
                if (b2.length > 0) theoryQuestions = b2;
            } else if (job.includes('Bậc 3') || selectedSet.includes('Bậc 3')) {
                let b3 = theoryQuestions.filter(q => String(q.category || '').includes('Bậc 3') || String(q.exam_set || '').includes('Bậc 3'));
                if (b3.length > 0) theoryQuestions = b3;
            }

            // SAFETY: NEVER leak questions from other disciplines!
            if (theoryQuestions.length === 0) {
                alert(`Bộ môn ${discipline} đang được cập nhật thêm câu hỏi. Vui lòng chọn bộ môn khác.`);
                window.location.href = 'index.html';
                return;
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
        } else { // Thực hành / Tự Luận - Thực Hành
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
            activeQuestions = seededShuffle(prac, seed).slice(0, 20);

            const titleEl = document.getElementById('examTitle');
            if (titleEl) titleEl.textContent = `Phần thi Tự luận - Thực hành & Bóc Tách Bản Vẽ (${discipline})`;
            if (isNaN(timeLeft) || timeLeft <= 0) timeLeft = 60 * 60;
        }

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
        const imgSrc = q.image.includes('?') ? q.image : q.image + '?v=20260826_v2';
        imgEl.src = imgSrc;
        imgEl.onerror = function() {
            if (imgSrc.endsWith('.png?v=20260826_v2') || imgSrc.endsWith('.png')) {
                imgEl.src = q.image.replace('.png', '.svg');
            }
        };
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
        const opts = (q && q.options && Array.isArray(q.options)) ? q.options : ['Tùy chọn A', 'Tùy chọn B'];
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
                answers[index] = optIndex;
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
}
