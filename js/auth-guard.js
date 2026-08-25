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
