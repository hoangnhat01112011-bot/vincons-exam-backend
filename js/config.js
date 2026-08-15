// Cấu hình ứng dụng Vincons Exam
const CONFIG = {
    // 1. URL Web App của Google Apps Script (Sử dụng Google Sheets Cloud)
    GOOGLE_SCRIPT_URL: "https://script.google.com/macros/s/AKfycbw9KjUEuIKq0HYu4S8MWLvEd4cHaCNFSttPnEQOQlM0bqo_-F3VNBqfQ42CG8XH8itw/exec",

    // URL Google Sheet hiển thị dữ liệu lịch sử bài thi
    GOOGLE_SHEET_URL: "https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit",

    // 2. URL máy chủ Backend (Python) dự phòng hoặc dùng chạy cục bộ
    DEFAULT_API_BASE_URL: "http://192.168.1.80:8000",
    
    get USE_GOOGLE_SHEETS() {
        return this.GOOGLE_SCRIPT_URL && this.GOOGLE_SCRIPT_URL !== "YOUR_GOOGLE_SCRIPT_URL_HERE" && this.GOOGLE_SCRIPT_URL.trim() !== "";
    },

    // Tự động nhận diện URL máy chủ phù hợp
    get API_BASE_URL() {
        // Nếu là ứng dụng di động (Cordova, file:// hoặc chạy webview localhost trên điện thoại)
        const isMobileApp = window.cordova || 
                            window.location.protocol === 'file:' || 
                            (window.location.hostname === 'localhost' && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent));
                            
        if (isMobileApp) {
            return this.DEFAULT_API_BASE_URL;
        }
        
        // Nếu chạy trên trình duyệt web thông thường (PC hoặc trình duyệt di động truy cập trực tiếp qua IP)
        if (window.location.protocol.startsWith('http')) {
            return window.location.origin;
        }
        
        return this.DEFAULT_API_BASE_URL;
    },

    // Hàm gọi API hợp nhất: Tự động chuyển hướng giữa Google Sheets Cloud và Local Python Server
    async apiCall(path, options = {}) {
        if (this.USE_GOOGLE_SHEETS) {
            let url = this.GOOGLE_SCRIPT_URL;
            let method = options.method || 'GET';
            let headers = options.headers || {};
            let body = options.body;

            const sheetMaps = {
                'danh_sach_cong_nhan': 'DANH SÁCH CÔNG NHÂN',
                'don_gia_vincons': 'DON_GIA_VINCONS',
                'danh_muc_to': 'DANH_MUC_TO',
                'bang_luong_chuan': 'BANG_LUONG_CHUAN',
                'nhan_su_quy_luong': 'NHAN_SU_QUY_LUONG',
                'danh_gia_tong': 'DANH_GIA_TONG',
                'danh_muc_hangmuc_cv': 'DANH_MUC_HANG_MUC',
                'giao_viec_hoa_von': 'GIAO_VIEC_HOA_VON',
                'luu_tru_pgv': 'LUU_TRU_PGV',
                'bao_cao_san_luong_ngay': 'bao_cao_san_luong_ngay',
                'danh_gia_tong_trung_doi_truong': 'danh_gia_tong_trung_doi_truong',
                'danh_gia_tong_da': 'DANH_GIA_TONG_DA'
            };

            // Phân tích endpoint để xác định action và các tham số cho Google Apps Script
            let gasAction = '';
            let params = {};

            if (path.startsWith('/api/kpi/sheet')) {
                gasAction = 'getSheet';
                const nameMatch = path.match(/[?&]name=([^&]+)/);
                if (nameMatch) {
                    const decoded = decodeURIComponent(nameMatch[1]);
                    params.name = sheetMaps[decoded] || decoded;
                }
            } else if (path.startsWith('/api/results')) {
                gasAction = 'getResults';
                const userIdMatch = path.match(/[?&]userId=([^&]+)/);
                const roleMatch = path.match(/[?&]role=([^&]+)/);
                if (userIdMatch) params.userId = decodeURIComponent(userIdMatch[1]);
                if (roleMatch) params.role = decodeURIComponent(roleMatch[1]);
            } else if (path.startsWith('/api/list-pdfs')) {
                gasAction = 'listPdfs';
            } else if (path.startsWith('/api/delete-result')) {
                gasAction = 'deleteResult';
                const idMatch = path.match(/[?&]id=([^&]+)/);
                if (idMatch) params.id = decodeURIComponent(idMatch[1]);
            } else if (path.startsWith('/api/clear-results')) {
                gasAction = 'clearResults';
            } else if (path === '/api/kpi/save-record') {
                gasAction = 'saveRecord';
            } else if (path === '/api/kpi/delete-record') {
                gasAction = 'deleteRecord';
            } else if (path === '/api/kpi/import-data') {
                gasAction = 'importData';
            } else if (path === '/api/auth/login') {
                gasAction = 'login';
            } else if (path === '/api/auth/register') {
                gasAction = 'register';
            } else if (path === '/api/save-result') {
                gasAction = 'saveResult';
            }

            if (method.toUpperCase() === 'GET' || method.toUpperCase() === 'DELETE') {
                params.action = gasAction;
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
                if (parsedBody.sheet && sheetMaps[parsedBody.sheet]) {
                    parsedBody.sheet = sheetMaps[parsedBody.sheet];
                }
                parsedBody.action = gasAction;
                
                return fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(parsedBody)
                });
            }
        } else {
            // Chế độ chạy máy chủ cục bộ (Python)
            const url = this.API_BASE_URL + path;
            return fetch(url, options);
        }
    }
};
