let urlParams = new URLSearchParams(window.location.search);
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
    window.location.href = '"https://www.sapienzatoken.info"/index_valid';
}
function handleUrlRedirection() {
// Recupera l'URL corrente
let currentUrl = window.location.href;
let baseUrl = '"https://www.sapienzatoken.info"';  // Assicurati che l'URL base sia corretto

 // Escludiamo le pagine index_valid e index_failed dal controllo
 if (currentUrl.endsWith("/index_valid") || currentUrl.endsWith("/index_failed")) {
    // Non fare nulla su queste pagine  
    return;
}

// 1. Controllo Home Page
if (currentUrl === baseUrl || currentUrl === baseUrl + '/') {
    // Se l'URL è esattamente x.info o x.info/, non fare nulla
    console.log('Sei sulla pagina principale: ', currentUrl);
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
            console.log('Reindirizzamento a index_failed avvenuto da11:', window.location.href);

            window.location.href = `${baseUrl}/index_failed`;
        }
    } else {
        // 3. Se l'URL non è la home e non contiene il token, manda a failed
        console.log('URL non valido, reindirizzamento a index_failed 33:', currentUrl);
        window.location.href = '"https://www.sapienzatoken.info"/index_failed';
    }

}
window.onload = handleUrlRedirection();