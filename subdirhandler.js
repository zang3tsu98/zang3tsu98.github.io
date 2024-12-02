
let urlParams = new URLSearchParams(window.location.search);

function handleUrlRedirection() {
    // Get current URL
    let currentUrl = window.location.href;
    let baseUrl = "https://www.sapienzatoken.info";

    // Allow index_valid and index_failed without checks
    if (currentUrl.endsWith("/index_valid.html") || currentUrl.endsWith("/index_failed.html")) {
        return;
    }

    // Check if on homepage
    if (currentUrl === baseUrl || currentUrl === baseUrl + '/') {
        console.log('On homepage:', currentUrl);
        return;
    }

    // Check for token parameter
    if (urlParams.has('token')) {
        const token = urlParams.get('token');
        const validTokenMD5 = "0cf702314bad36f54f0731695f7763b5"; // Replace with correct MD5 token

        // Validate token
        if (CryptoJS.MD5(token).toString(CryptoJS.enc.Hex) === validTokenMD5) {
            // Redirect to index_valid if token is valid
            sessionStorage.setItem('canAccessValid', 'true');
            window.location.href = baseUrl + '/index_valid.html';
        } else {
            // Redirect to index_failed if token is invalid
            window.location.href = baseUrl + '/index_failed.html';
        }
    } else {
        // Redirect to index_failed for invalid URLs
        window.location.href = baseUrl + '/index_failed.html';
    }
}

// Call redirection handler on page load
window.onload = handleUrlRedirection;