// Vincons Exam App Logic

// Check if candidate is registered
const candidateInfo = JSON.parse(localStorage.getItem('vincons_candidate'));
if (!candidateInfo && window.location.pathname.endsWith('exam.html')) {
    alert('Vui lòng đăng ký thông tin trước khi bắt đầu thi.');
    window.location.href = 'index.html';
}

// Variables
let activeQuestions = [];
let currentQuestionIndex = 0;
let answers = JSON.parse(localStorage.getItem('vincons_answers')) || {};
let timerInterval = null;
let timeLeft = parseInt(localStorage.getItem('vincons_time_left'));

// Initialize Exam
if (window.location.pathname.endsWith('exam.html')) {
    initExam();
}

function initExam() {
    // 1. Set exam title and filter questions
    const job = candidateInfo.job;
    const examType = candidateInfo.examType;
    
    document.getElementById('examTitle').textContent = `Phần Thi: ${examType === 'Lý thuyết' ? 'Lý Thuyết' : 'Thực Hành'}`;
    
    // Display candidate info in sidebar
    document.getElementById('candidateDisplayInfo').innerHTML = `
        <strong>Họ tên:</strong> ${candidateInfo.name}<br>
        <strong>SBD/SĐT:</strong> ${candidateInfo.id}<br>
        <strong>Vị trí:</strong> ${job}
    `;

    // Filter questions based on candidate job and exam type
    if (examType === 'Lý thuyết') {
        if (job.includes('M&E') || job.includes('Điện')) {
            activeQuestions = QUESTIONS.filter(q => q.category === 'Lý thuyết - Thợ điện');
        } else if (job.includes('Giám sát')) {
            // Combine B2 and B3 for supervisors
            activeQuestions = QUESTIONS.filter(q => q.category.includes('Lý thuyết - Bậc'));
        } else {
            activeQuestions = QUESTIONS.filter(q => q.category === 'Lý thuyết - Bậc 2');
        }
        
        // Randomly select 30 questions if there are more
        if (activeQuestions.length > 30) {
            activeQuestions = shuffle(activeQuestions).slice(0, 30);
        }
        
        // Set timer to 30 minutes if not already set
        if (isNaN(timeLeft) || timeLeft <= 0) {
            timeLeft = 30 * 60; 
        }
    } else { // Thực hành
        if (job.includes('M&E') || job.includes('Điện')) {
            activeQuestions = QUESTIONS.filter(q => q.category.includes('Thực hành - Điện'));
        } else {
            activeQuestions = QUESTIONS.filter(q => q.category.includes('Thực hành - Xây dựng'));
        }
        
        // Set timer to 60 minutes if not already set
        if (isNaN(timeLeft) || timeLeft <= 0) {
            timeLeft = 60 * 60; 
        }
    }

    // Save filtered questions for result page
    // We override QUESTIONS inside localStorage just for this candidate session
    localStorage.setItem('vincons_active_questions', JSON.stringify(activeQuestions));

    // 2. Render Question numbers in Sidebar Grid
    renderGrid();
    
    // 3. Show first question
    showQuestion(0);
    
    // 4. Start Timer
    startTimer();
}

// Fisher-Yates Shuffle
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

// Render Sidebar numbers
function renderGrid() {
    const grid = document.getElementById('questionsGrid');
    grid.innerHTML = '';
    
    activeQuestions.forEach((q, index) => {
        const item = document.createElement('div');
        item.className = 'grid-item';
        item.id = `grid-item-${index}`;
        item.textContent = index + 1;
        item.onclick = () => showQuestion(index);
        
        if (answers[index] !== undefined) {
            item.classList.add('answered');
        }
        
        grid.appendChild(item);
    });
}

// Show specific question details
function showQuestion(index) {
    if (index < 0 || index >= activeQuestions.length) return;
    
    // Update active grid item classes
    document.querySelectorAll('.grid-item').forEach(el => el.classList.remove('current'));
    const currentGridItem = document.getElementById(`grid-item-${index}`);
    if (currentGridItem) {
        currentGridItem.classList.add('current');
    }
    
    currentQuestionIndex = index;
    const q = activeQuestions[index];
    
    // Set question headers and text
    document.getElementById('questionNumLabel').textContent = `Câu hỏi ${index + 1}/${activeQuestions.length} (${q.category})`;
    document.getElementById('questionContent').textContent = q.question;
    
    // Render options list
    const container = document.getElementById('optionsContainer');
    container.innerHTML = '';
    
    q.options.forEach((opt, optIdx) => {
        const item = document.createElement('div');
        item.className = 'option-item';
        if (answers[index] === optIdx) {
            item.classList.add('active');
        }
        
        item.onclick = () => selectOption(index, optIdx);
        
        item.innerHTML = `
            <div class="option-radio"></div>
            <div class="option-label">${String.fromCharCode(65 + optIdx)}. ${opt}</div>
        `;
        
        container.appendChild(item);
    });
    
    // Handle Navigation buttons state
    document.getElementById('btnPrev').disabled = (index === 0);
    document.getElementById('btnNext').textContent = (index === activeQuestions.length - 1) ? 'Nộp bài' : 'Câu sau →';
}

// Select option
function selectOption(qIndex, optIndex) {
    answers[qIndex] = optIndex;
    localStorage.setItem('vincons_answers', JSON.stringify(answers));
    
    // Mark grid item as answered
    const gridItem = document.getElementById(`grid-item-${qIndex}`);
    if (gridItem) {
        gridItem.classList.add('answered');
    }
    
    // Update active class in options list
    document.querySelectorAll('.option-item').forEach((item, idx) => {
        if (idx === optIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Navigation Functions
function nextQuestion() {
    if (currentQuestionIndex === activeQuestions.length - 1) {
        confirmSubmit();
    } else {
        showQuestion(currentQuestionIndex + 1);
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        showQuestion(currentQuestionIndex - 1);
    }
}

// Timer
function startTimer() {
    updateTimerDisplay();
    
    timerInterval = setInterval(() => {
        timeLeft--;
        localStorage.setItem('vincons_time_left', timeLeft);
        
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert('Đã hết thời gian làm bài! Hệ thống tự động nộp bài.');
            submitExam();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    document.getElementById('countdownText').textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Submit Exam
function confirmSubmit() {
    const answeredCount = Object.keys(answers).length;
    const totalCount = activeQuestions.length;
    const unansweredCount = totalCount - answeredCount;
    
    let confirmMsg = 'Bạn có chắc chắn muốn nộp bài thi?';
    if (unansweredCount > 0) {
        confirmMsg = `Bạn còn ${unansweredCount}/${totalCount} câu hỏi chưa trả lời. Bạn có chắc chắn muốn nộp bài thi không?`;
    }
    
    if (confirm(confirmMsg)) {
        submitExam();
    }
}

function submitExam() {
    clearInterval(timerInterval);
    // Redirect to results
    window.location.href = 'result.html';
}

/* =========================================================
   BLUEPRINT PDF VIEWER LOGIC (FOR PRACTICAL EXAM MODE)
   ========================================================= */
let pdfScale = 1.0;
let pdfRotate = 0;

function initBlueprintViewer() {
    const blueprintPanel = document.getElementById('blueprintPanel');
    const examContainer = document.getElementById('examContainer');
    
    if (!blueprintPanel || !examContainer) return;
    
    // Show blueprint panel and expand layout grid
    blueprintPanel.style.display = 'flex';
    examContainer.classList.add('has-blueprint');
    
    // Load available PDF files list from server API
    fetch(CONFIG.API_BASE_URL + '/api/list-pdfs')
        .then(res => res.json())
        .then(pdfFiles => {
            populatePdfDropdown(pdfFiles);
        })
        .catch(err => {
            console.log('Using default PDF list:', err);
            populatePdfDropdown([
                {
                    name: 'Bản vẽ Concept 3D Ikigai Wellness Center Cụm 3',
                    url: 'data/241223_VYHP_PA TK concept Noi that ctrinh Ikigai Wellness Center lo B3-CX26 Ikigai Park tai PK Nomur.pdf'
                }
            ]);
        });
}

function populatePdfDropdown(pdfFiles) {
    const pdfSelect = document.getElementById('pdfSelect');
    if (!pdfSelect) return;
    
    pdfSelect.innerHTML = '';
    
    // Default fallback PDF if none found
    if (!pdfFiles || pdfFiles.length === 0) {
        pdfFiles = [
            {
                name: 'Bản vẽ Concept 3D Ikigai Wellness Center Cụm 3',
                url: 'data/241223_VYHP_PA TK concept Noi that ctrinh Ikigai Wellness Center lo B3-CX26 Ikigai Park tai PK Nomur.pdf'
            }
        ];
    }
    
    pdfFiles.forEach((file, index) => {
        const option = document.createElement('option');
        option.value = file.url;
        option.textContent = file.name;
        if (index === 0) option.selected = true;
        pdfSelect.appendChild(option);
    });
    
    // Load the first PDF file into iframe
    if (pdfFiles.length > 0) {
        changePdfSource(pdfFiles[0].url);
    }
}

function changePdfSource(url) {
    const iframe = document.getElementById('pdfIframe');
    if (!iframe || !url) return;
    
    let targetUrl = url;
    // If it's a relative server path, prepend the CONFIG.API_BASE_URL
    if (!url.startsWith('http') && !url.startsWith('blob:') && !url.startsWith('data:')) {
        targetUrl = CONFIG.API_BASE_URL + (url.startsWith('/') ? '' : '/') + url;
    }
    
    iframe.src = targetUrl;
    resetZoomPdf();
}

function handlePdfFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    if (file.type !== 'application/pdf') {
        alert('Vui lòng chọn tệp tin định dạng PDF.');
        return;
    }
    
    const fileUrl = URL.createObjectURL(file);
    const pdfSelect = document.getElementById('pdfSelect');
    
    if (pdfSelect) {
        const customOpt = document.createElement('option');
        customOpt.value = fileUrl;
        customOpt.textContent = `📁 ${file.name}`;
        customOpt.selected = true;
        pdfSelect.appendChild(customOpt);
    }
    
    changePdfSource(fileUrl);
    document.getElementById('blueprintTitleText').textContent = `Bản vẽ: ${file.name}`;
}

function zoomPdf(delta) {
    pdfScale += delta;
    if (pdfScale < 0.5) pdfScale = 0.5;
    if (pdfScale > 3.0) pdfScale = 3.0;
    updatePdfTransform();
}

function resetZoomPdf() {
    pdfScale = 1.0;
    pdfRotate = 0;
    updatePdfTransform();
}

function rotatePdf() {
    pdfRotate = (pdfRotate + 90) % 360;
    updatePdfTransform();
}

function updatePdfTransform() {
    const iframe = document.getElementById('pdfIframe');
    if (iframe) {
        iframe.style.transform = `scale(${pdfScale}) rotate(${pdfRotate}deg)`;
    }
}

function toggleFullscreenPdf() {
    const blueprintPanel = document.getElementById('blueprintPanel');
    if (blueprintPanel) {
        blueprintPanel.classList.toggle('fullscreen');
    }
}

/* =========================================================
   3D IKIGAI CENTER & M&E SITE INSPECTION LOGIC
   ========================================================= */
function init3DModel() {
    const model3dPanel = document.getElementById('model3dPanel');
    const examContainer = document.getElementById('examContainer');
    
    if (!model3dPanel || !examContainer) return;
    
    model3dPanel.style.display = 'flex';
    examContainer.classList.add('has-3d');
    
    // Initialize 3D Engine
    if (window.Ikigai3D) {
        window.Ikigai3D.init('model3dViewport', on3DHotspotSelected);
    }
}

function navigateToHotspot(id) {
    if (window.Ikigai3D) {
        window.Ikigai3D.selectHotspot(id);
    }
}

function on3DHotspotSelected(hotspot) {
    if (!hotspot) return;
    
    // Update UI info
    const nameEl = document.getElementById('currentLocationName');
    const descEl = document.getElementById('currentLocationDesc');
    const selectEl = document.getElementById('hotspotSelect');
    
    if (nameEl) nameEl.textContent = hotspot.name;
    if (descEl) descEl.textContent = `${hotspot.desc} (Phòng: ${hotspot.room})`;
    if (selectEl) selectEl.value = hotspot.id;
    
    // Auto-update blueprint title or zoom to corresponding section
    const blueprintTitle = document.getElementById('blueprintTitleText');
    if (blueprintTitle) {
        blueprintTitle.textContent = `Bản Vẽ PDF: ${hotspot.room}`;
    }
}

/* =========================================================
   REVIT BIM MEP SYSTEM SWITCHING & PARAMETER INSPECTION LOGIC
   ========================================================= */
function switchMepSystem(sysId) {
    // 1. Update active class on MEP System Tab Buttons
    document.querySelectorAll('.mep-tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const activeBtn = document.querySelector(`.mep-tab-btn[onclick*="${sysId}"]`);
    if (activeBtn) activeBtn.classList.add('active');
    
    // 2. Trigger Revit MEP 3D system filter & X-Ray mode
    if (window.RevitMEP) {
        window.RevitMEP.setSystemFilter(sysId);
        
        // Inspect default element for the system
        const db = window.RevitMEP.MEP_BIM_DATABASE;
        const firstMatch = db.find(item => sysId === 'all' || item.system === sysId);
        if (firstMatch) {
            updateBimInspectorUI(firstMatch);
        }
    }
}

function updateBimInspectorUI(bimData) {
    if (!bimData) return;
    
    const familyEl = document.getElementById('bimFamilyName');
    const catEl = document.getElementById('bimCategory');
    const sizeEl = document.getElementById('bimSize');
    const elevEl = document.getElementById('bimElevation');
    const codeEl = document.getElementById('bimCode');
    const specEl = document.getElementById('bimSpec');
    
    if (familyEl) familyEl.textContent = bimData.family;
    if (catEl) catEl.textContent = bimData.category;
    if (sizeEl) sizeEl.textContent = bimData.size;
    if (elevEl) elevEl.textContent = bimData.elevation;
    if (codeEl) codeEl.textContent = bimData.code;
    if (specEl) specEl.textContent = `${bimData.spec} (Vị trí: ${bimData.location})`;
}

// Register Revit MEP inspection listener
if (window.RevitMEP) {
    window.RevitMEP.setOnInspectCallback(updateBimInspectorUI);
}

// Auto-trigger Blueprint Viewer and 3D Model initialization for Practical exam
if (window.location.pathname.endsWith('exam.html')) {
    const currentCandidate = JSON.parse(localStorage.getItem('vincons_candidate'));
    if (currentCandidate && currentCandidate.examType === 'Thực hành') {
        setTimeout(() => {
            initBlueprintViewer();
            init3DModel();
            
            // Build Revit MEP 3D Elements if Three.js scene exists
            if (window.Ikigai3D && window.RevitMEP) {
                switchMepSystem('all');
            }
        }, 250);
    }
}



