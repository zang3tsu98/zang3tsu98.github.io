// Funzione per calcolare l'MD5 del token
function calculateMD5(token) {
    return CryptoJS.MD5(token).toString();
}

// Funzione per controllare il token e fare il reindirizzamento
function handleFormSubmit(event) {
    event.preventDefault();
    
    const matricola = document.getElementById("matricola").value;
    const token = document.getElementById("token").value;
    
    const validTokenMD5 = "0cf702314bad36f54f0731695f7763b5"; // MD5 di "segreto123"
    
    const tokenHash = calculateMD5(token);
    
    if (tokenHash === validTokenMD5) {
        // Token valido, redirigi a index_valid.html
        window.location.href = "index_valid.html";
    } else {
        // Token non valido, redirigi a index_failed.html
        window.location.href = "index_failed.html";
    }
}

document.getElementById("loginForm").addEventListener("submit", handleFormSubmit);

