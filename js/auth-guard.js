// Vincons Central Authentication Guard
(function() {
    const currentPath = window.location.pathname;
    const isLoginPage = currentPath.endsWith('login.html');
    const isAdminPage = currentPath.endsWith('admin.html');
    const isIndexPage = currentPath === '/' || currentPath.endsWith('index.html');
    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.protocol === 'file:';

    let isAdmin = false;
    try {
        const raw = localStorage.getItem('vincons_admin');
        if (raw === 'true') {
            isAdmin = true;
        }
    } catch (e) {
        isAdmin = false;
    }

    // Xử lý bảo mật cho môi trường Public (GitHub Pages)
    if (!isLocalhost) {
        // Kiểm tra xem đây có phải là tab mới mở không
        if (!sessionStorage.getItem('vincons_tab_active')) {
            // Tab mới mở -> Xóa trắng phiên làm việc cũ
            sessionStorage.setItem('vincons_tab_active', 'true');
            localStorage.removeItem('vincons_candidate');
            localStorage.removeItem('vincons_admin');
            isAdmin = false;
            
            // Bắt buộc quay về trang chủ để đăng nhập
            if (!isIndexPage && !isLoginPage) {
                window.location.href = 'index.html';
                return;
            }
        } else {
            // Tab đang dùng (reload) -> Kiểm tra xem đã đăng nhập chưa
            const isCandidate = localStorage.getItem('vincons_candidate') !== null;
            if (!isCandidate && !isAdmin && !isIndexPage && !isLoginPage) {
                window.location.href = 'index.html';
                return;
            }
        }
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
