// Vincons Central Authentication Guard
(function() {
    const currentPath = window.location.pathname;
    const isLoginPage = currentPath.endsWith('login.html');
    const isAdminPage = currentPath.endsWith('admin.html');

    // Mọi người đều có thể truy cập index.html, history.html, exam.html mà không cần tài khoản!
    // Trừ trang Quản trị (admin.html), yêu cầu phải có quyền Giám thị
    
    let isAdmin = false;
    try {
        const raw = localStorage.getItem('vincons_admin');
        if (raw === 'true') {
            isAdmin = true;
        }
    } catch (e) {
        isAdmin = false;
    }

    if (isAdminPage && !isAdmin) {
        window.location.href = 'login.html';
        return;
    }

    if (isLoginPage && isAdmin) {
        window.location.href = 'admin.html';
        return;
    }

    // Clean up old storage formats to avoid bugs
    try {
        if (localStorage.getItem('vincons_logged_in_user')) {
            localStorage.removeItem('vincons_logged_in_user');
            localStorage.removeItem('vincons_registered_cache');
        }
    } catch(e) {}
})();
