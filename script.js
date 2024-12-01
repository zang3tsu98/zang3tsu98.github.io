<<<<<<< HEAD
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
function handleURLRouting() {
    // Ottieni la parte dopo ".info"
    const currentPath = window.location.search; // Contiene la stringa dopo '?'

    // Hash MD5 del token valido
    const validTokenMD5 = "0cf702314bad36f54f0731695f7763b5"; // Hash di 'segreto123'

    // Verifica che l'URL sia esattamente '?/token=segreto123'
    if (currentPath.startsWith("?/token=")) {
        // Estrai il token dall'URL
        const tokenFromURL = currentPath.replace("?/token=", "");

        // Calcola l'MD5 del token dall'URL
        const tokenMD5 = CryptoJS.MD5(tokenFromURL).toString(CryptoJS.enc.Hex);

        // Se il token hash combacia, reindirizza a index_valid.html
        if (tokenMD5 === validTokenMD5) {
            window.location.href = 'index_valid.html';
            return; // Termina l'esecuzione
        }
    }

    // Se non è il caso corretto, reindirizza sempre a index_failed.html
    window.location.href = 'index_failed.html';
}

// Chiamare la funzione all'avvio della pagina
handleURLRouting();
=======
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
// Controllo dell'URL per la validità del token
document.addEventListener("DOMContentLoaded", function () {
    // Estrarre i parametri dall'URL
    const urlParams = new URLSearchParams(window.location.search);
    const urlToken = urlParams.get("token");

    // Token valido (hashato in MD5)
    const validTokenMD5 = "0cf702314bad36f54f0731695f7763b5"; // MD5 di "segreto123"

    // Funzione per verificare il token
    function verifyToken(token) {
        if (!token) return false; // Nessun token trovato
        const hashedToken = CryptoJS.MD5(token).toString(); // Hash MD5 del token
        return hashedToken === validTokenMD5; // Confronto con il token valido
    }

    // Controllo e reindirizzamento
    if (urlToken) {
        if (verifyToken(urlToken)) {
            console.log("Token valido. Reindirizzamento a html_valid.");
            window.location.href = "index_valid.html";
        } else {
            console.log("Token non valido. Reindirizzamento a html_failed.");
            window.location.href = "index_failed.html";
        }
    } else {
        console.log("Nessun token fornito. Reindirizzamento a html_failed.");
        window.location.href = "index_failed.html";
    }
});

>>>>>>> b5a99b1f9ebee5aabe1e8d7ed69c7849667c3235
