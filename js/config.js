const CONFIG = {
    DEFAULT_API_BASE_URL: "http://127.0.0.1:8000",
    GOOGLE_SCRIPT_URL: "https://script.google.com/macros/s/AKfycbz7qQIC81hraoGsaXGkDh-1m5hKtKHvwWbtBjEAdmxy9mq74aEd9BvH5xXK2bv0WmOD/exec",

    get API_BASE_URL() {
        let storedUrl = localStorage.getItem('api_base_url');
        if (storedUrl) return storedUrl;
        
        if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
            // Nếu không phải file: hoặc app, lấy URL máy chủ hiện tại (bao gồm cả IP LAN)
            return window.location.protocol + "//" + window.location.host;
        }
        
        return this.DEFAULT_API_BASE_URL;
    },

    get USE_GOOGLE_SHEETS() {
        return this.GOOGLE_SCRIPT_URL && this.GOOGLE_SCRIPT_URL !== "YOUR_GOOGLE_SCRIPT_URL_HERE" && this.GOOGLE_SCRIPT_URL.trim() !== "";
    },

    async apiCall(path, options = {}) {
        if (this.USE_GOOGLE_SHEETS) {
            let url = this.GOOGLE_SCRIPT_URL;
            let method = options.method || 'GET';
            let params = {};
            let body = options.body;

            // Chuyển đổi endpoint path sang GAS action
            let gasAction = '';
            if (path === '/api/auth/admin-login') {
                gasAction = 'adminLogin';
            } else if (path.startsWith('/api/auth/verify-pin')) {
                gasAction = 'verifyExamPin';
                const match = path.match(/pin=([^&]+)/);
                if (match) params.pin = decodeURIComponent(match[1]);
                const catMatch = path.match(/category=([^&]+)/);
                if (catMatch) params.category = decodeURIComponent(catMatch[1]);
            } else if (path === '/api/auth/get-settings') {
                gasAction = 'getSettings';
            } else if (path === '/api/auth/set-settings') {
                gasAction = 'setSettings';
            } else if (path === '/api/save-result') {
                gasAction = 'saveResult';
            } else if (path.startsWith('/api/get-results') || path.startsWith('/api/results')) {
                gasAction = 'getResults';
            } else if (path.startsWith('/api/delete-result')) {
                gasAction = 'deleteResult';
                const idMatch = path.match(/id=([^&]+)/);
                if (idMatch) params.id = decodeURIComponent(idMatch[1]);
                const pinMatch = path.match(/adminPin=([^&]+)/);
                if (pinMatch) params.adminPin = decodeURIComponent(pinMatch[1]);
            } else if (path.startsWith('/api/clear-results')) {
                gasAction = 'clearResults';
                const pinMatch = path.match(/adminPin=([^&]+)/);
                if (pinMatch) params.adminPin = decodeURIComponent(pinMatch[1]);
            } else if (path === '/api/admin/edit-question') {
                gasAction = 'editQuestion';
            } else if (path.startsWith('/api/get-question-overrides')) {
                gasAction = 'getQuestionOverrides';
            }

            if (method.toUpperCase() === 'GET' || method.toUpperCase() === 'DELETE') {
                params.action = gasAction;
                params._t = new Date().getTime(); // Cache buster
                const queryString = Object.keys(params)
                    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
                    .join('&');
                url += (url.indexOf('?') >= 0 ? '&' : '?') + queryString;
                
                return fetch(url, { method: 'GET' });
            } else {
                let parsedBody = {};
                if (body) {
                    if (typeof body === 'string') {
                        try { parsedBody = JSON.parse(body); } catch(e) {}
                    } else {
                        parsedBody = body;
                    }
                }
                parsedBody.action = gasAction;
                
                return fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(parsedBody)
                });
            }
        } else {
            // Chế độ chạy máy chủ cục bộ (Python)
            let finalUrl = this.API_BASE_URL + path;
            let finalOptions = { ...options };

            if (!finalOptions.method || finalOptions.method.toUpperCase() === 'GET' || finalOptions.method.toUpperCase() === 'DELETE') {
                const sep = finalUrl.indexOf('?') >= 0 ? '&' : '?';
                finalUrl += `${sep}_t=${new Date().getTime()}`;
            }

            return fetch(finalUrl, finalOptions);
        }
    }
};

// Helper to apply question overrides stored in localStorage and Google Sheets
window.applyQuestionOverrides = function() {
    if (typeof QUESTIONS === 'undefined' || !Array.isArray(QUESTIONS)) return;
    try {
        const overrides = JSON.parse(localStorage.getItem('vincons_question_overrides') || '{}');
        Object.keys(overrides).forEach(qId => {
            const qObj = QUESTIONS.find(item => String(item.id) === String(qId));
            if (qObj) {
                const item = overrides[qId];
                if (item.question) qObj.question = item.question;
                if (item.options) qObj.options = item.options;
                if (item.correct_index !== undefined) qObj.correct_index = parseInt(item.correct_index);
            }
        });
    } catch(e) {}
};

window.syncQuestionOverridesFromCloud = async function() {
    if (typeof CONFIG === 'undefined' || !CONFIG.USE_GOOGLE_SHEETS) return;
    try {
        const res = await CONFIG.apiCall('/api/get-question-overrides');
        const json = await res.json();
        if (json.status === 'success' && Array.isArray(json.data)) {
            let overrides = {};
            try { overrides = JSON.parse(localStorage.getItem('vincons_question_overrides') || '{}'); } catch(e){}
            json.data.forEach(row => {
                if (!row.id) return;
                let opts = row.options_json;
                if (typeof opts === 'string') {
                    try { opts = JSON.parse(opts); } catch(e) { opts = []; }
                }
                overrides[row.id] = {
                    question: row.question,
                    options: opts,
                    correct_index: parseInt(row.correct_index)
                };
            });
            localStorage.setItem('vincons_question_overrides', JSON.stringify(overrides));
            window.applyQuestionOverrides();
            window.dispatchEvent(new CustomEvent('questions_updated'));
        }
    } catch(e) {}
};

// Auto apply overrides on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.applyQuestionOverrides();
        window.syncQuestionOverridesFromCloud();
    });
} else {
    window.applyQuestionOverrides();
    window.syncQuestionOverridesFromCloud();
}
