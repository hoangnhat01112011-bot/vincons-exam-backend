const CONFIG = {
    DEFAULT_API_BASE_URL: "http://127.0.0.1:8000",
    GOOGLE_SCRIPT_URL: "https://script.google.com/macros/s/AKfycbw29tgNOEDGZROO5fA6x1F4_oDCI_jlHYUGzQ2Do-ftp5-YwOSElNmFTf0UsxmoqGmJ/exec",

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
            } else if (path.startsWith('/api/get-results')) {
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
