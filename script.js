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
        onLoginSuccess();
    } else {
        // Reindirizza a index_errore.html se qualcosa è sbagliato
        window.location.href = 'index_failed.html';
    }
});