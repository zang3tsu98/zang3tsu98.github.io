// Funzione che verifica se l'utente può accedere alla pagina index_valid
function checkValidAccess() {
    // Verifica se il flag "canAccessValid" è impostato in sessionStorage
    if (sessionStorage.getItem('canAccessValid') !== 'true') {
        // Se il flag non è presente o non è valido, reindirizza a index_failed
        window.location.href = 'https://www.sapienzatoken.info/index_failed';
    }
}

// Esegui il controllo quando la pagina index_valid viene caricata
window.onload = checkValidAccess;