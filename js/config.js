// Cấu hình ứng dụng Vincons Exam
const CONFIG = {
    // URL máy chủ Backend (Python) cho ứng dụng di động (APK)
    // - Khi chạy mạng Wi-Fi nội bộ: Đổi thành "http://IP_MAY_TINH:8000" (Ví dụ: "http://192.168.1.80:8000")
    // - Khi đưa Backend lên Cloud: Đổi thành URL của Cloud (Ví dụ: "https://vincons-exam-backend.onrender.com")
    DEFAULT_API_BASE_URL: "http://192.168.1.80:8000",
    
    // Tự động nhận diện URL máy chủ phù hợp
    get API_BASE_URL() {
        // Nếu chạy trên trình duyệt web thông thường (giao thức http hoặc https)
        if (window.location.protocol.startsWith('http')) {
            return window.location.origin; // Sử dụng chính địa chỉ hiện tại (ví dụ http://localhost:8000)
        }
        // Nếu chạy trong ứng dụng di động (Cordova / WebView / file://)
        return this.DEFAULT_API_BASE_URL;
    }
};
