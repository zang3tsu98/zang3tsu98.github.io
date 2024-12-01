// Funzione per calcolare l'MD5 del token
function calculateMD5(token) {
    return CryptoJS.MD5(token).toString();
}

// Funzione principale per gestire il reindirizzamento
function handleSubdirectories() {
    // Recupera l'URL corrente
    const currentURL = window.location.href;
    const validTokenMD5 = "0cf702314bad36f54f0731695f7763b5";

    // Controlla se l'URL contiene il parametro token
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (token) {
        // Se il token esiste, calcola l'MD5 e confronta
        const tokenHash = calculateMD5(token);

        if (tokenHash === validTokenMD5) {
            // Reindirizza a index_valid.html
            window.location.href = "index_valid.html";
        } else {
            // Reindirizza a index_failed.html
            window.location.href = "index_failed.html";
        }
    } else {
        // Reindirizza a index_failed.html se non ci sono token
        window.location.href = "index_failed.html";
    }
}

// Esegui la funzione quando la pagina viene caricata
document.addEventListener("DOMContentLoaded", handleSubdirectories);
