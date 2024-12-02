// Funzione che imposta il flag "canAccessValid" in sessionStorage
function grantAccessToValid() {
    // Imposta un flag che indica che l'accesso a index_valid è stato effettuato tramite uno script
    sessionStorage.setItem('canAccessValid', 'true');
}

// Questa funzione deve essere chiamata quando lo script ha completato l'accesso o il login
// Ad esempio, se l'accesso è stato verificato correttamente, puoi chiamare grantAccessToValid() prima del reindirizzamento
function onLoginSuccess() {
    // Imposta il flag di accesso
    grantAccessToValid();

    // Reindirizza a index_valid dopo aver effettuato il login con successo
    window.location.href = 'https://sapienzatoken.info/index_valid';
}

// Funzione per calcolare l'MD5 del token
function md5Token(token) {
    return CryptoJS.MD5(token).toString(CryptoJS.enc.Hex);
}
// Funzione per generare l'MD5 del token
function md5(string) {
    return CryptoJS.MD5(string).toString(CryptoJS.enc.Hex);
}

// Funzione che gestisce il reindirizzamento in base all'URL
function checkURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const currentUrl = window.location.href;

    // URL di riferimento che dovrebbe essere esattamente x.info
    const baseUrl = "https://x.info";

    // La stringa MD5 corretta del token
    const correctTokenMD5 = "0cf702314bad36f54f0731695f7763b5"; // Sostituisci con la tua stringa MD5 corretta

    // Escludiamo le pagine index_valid e index_failed dal controllo
    if (currentUrl.endsWith("/index_valid") || currentUrl.endsWith("/index_failed")) {
        // Non fare nulla su queste pagine
        return;
    }

    // Verifica se l'URL è esattamente x.info
    if (currentUrl === baseUrl) {
        // Se l'URL è esattamente x.info, non fare nulla
        return;
    }

    // Verifica se l'URL contiene il parametro '?token=XXXX'
    if (urlParams.has('token')) {
        const token = urlParams.get('token');
        const tokenMD5 = md5(token);

        // Confronta il token MD5 con quello corretto
        if (tokenMD5 === correctTokenMD5) {
            // Se il token è valido, reindirizza a index_valid
            onLoginSuccess()
        } else {
            // Se il token non è valido, reindirizza a index_failed
            window.location.href = `${baseUrl}/index_failed`;
        }
    } else {
        // Se l'URL non contiene '?token=XXXX', reindirizza a index_failed
        window.location.href = `${baseUrl}/index_failed`;
    }
}

// Esegui la verifica dell'URL quando la pagina è pronta
window.onload = checkURL;
