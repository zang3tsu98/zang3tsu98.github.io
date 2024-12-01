// Funzione per calcolare l'MD5 del token
function md5Token(token) {
    return CryptoJS.MD5(token).toString(CryptoJS.enc.Hex);
}

// Funzione per verificare il token inserito
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Ottieni i valori dal form
    const matricola = document.getElementById('matricola').value;
    const token = document.getElementById('token').value;

    // Token MD5 valido (ad esempio, 'segreto123' trasformato in MD5)
    const validTokenMD5 = "0cf702314bad36f54f0731695f7763b5"; 

    // Calcola l'MD5 del token inserito
    const tokenMD5 = md5Token(token);

    // Verifica che la matricola sia tra 7 e 8 cifre e che il token MD5 sia corretto
    if (/^\d{7,8}$/.test(matricola) && tokenMD5 === validTokenMD5) {
        // Reindirizza a index_valid.html se tutto è corretto
        window.location.href = 'index_valid.html';
    } else {
        // Reindirizza a index_errore.html se qualcosa è sbagliato
        window.location.href = 'index_failed.html';
    }
});
// Funzione per verificare il token nell'URL
function checkURLToken() {
    // Ottieni l'URL attuale
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromURL = urlParams.get('token'); // Leggi il parametro 'token'

    // Token MD5 valido (ad esempio, 'segreto123' trasformato in MD5)
    const validTokenMD5 = "3f52a6b7d83f9f1f95bdb39e1890f7d268dfadf0d23129b4f540c1b9d4e48885";

    // Se il token è presente nell'URL, controlla se è valido
    if (tokenFromURL) {
        // Calcola l'MD5 del token nell'URL
        const tokenMD5 = CryptoJS.MD5(tokenFromURL).toString(CryptoJS.enc.Hex);

        // Verifica il token
        if (tokenMD5 === validTokenMD5) {
            // Token valido: reindirizza a index_valid.html
            window.location.href = 'index_valid.html';
        } else {
            // Token non valido: reindirizza a index_failed.html
            window.location.href = 'index_failed.html';
        }
    }
}

// Chiamare la funzione per controllare il token nell'URL all'avvio
checkURLToken();
