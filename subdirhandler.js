// Configurazione
const validTokenMD5 = "0cf702314bad36f54f0731695f7763b5"; // MD5 di "segreto123"
const TOKEN_EXPIRY_TIME = 60 * 1000; // 1 minuto in millisecondi

// Funzione per calcolare l'MD5
function calculateMD5(input) {
    return CryptoJS.MD5(input).toString();
}

// Funzione per verificare se il token è scaduto
function isTokenExpired(tokenTimestamp) {
    const currentTime = Date.now();
    return currentTime - tokenTimestamp > TOKEN_EXPIRY_TIME;
}

// Funzione principale per controllare l'URL e il token
function handleURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    const tokenTimestamp = parseInt(urlParams.get('timestamp'), 10); // Timestamp fornito con il token

    // Verifica se il token è presente e se è valido
    if (!token || isNaN(tokenTimestamp) || isTokenExpired(tokenTimestamp)) {
        window.location.href = "index_failed.html"; // Reindirizzamento se mancante, non valido o scaduto
        return;
    }

    const tokenHash = calculateMD5(token);

    if (tokenHash === validTokenMD5) {
        window.location.href = "index_valid.html"; // Reindirizzamento alla pagina valida
    } else {
        window.location.href = "index_failed.html"; // Reindirizzamento alla pagina di errore
    }
}

// Funzione per generare un URL con token e timestamp (per i QR code o invii)
function generateSecureURL(baseURL, token) {
    const timestamp = Date.now();
    const encodedToken = encodeURIComponent(token);
    return `${baseURL}/?token=${encodedToken}&timestamp=${timestamp}`;
}

// Avvia il controllo al caricamento della pagina
handleURL();
