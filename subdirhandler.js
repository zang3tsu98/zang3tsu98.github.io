// Funzione per calcolare l'MD5 del token
function calculateMD5(token) {
    return CryptoJS.MD5(token).toString();
  }
  
  // Lista di token validi (in formato MD5)
  const validTokens = [
    "0cf702314bad36f54f0731695f7763b5", // Esempi di hash MD5
    // Aggiungi altri hash validi qui
  ];
  
  // Funzione per controllare il token e fare il reindirizzamento
  function handleTokenValidation() {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
  
    if (token) {
      // Token presente, procedi con la convalida
      const tokenHash = calculateMD5(token);
      if (validTokens.includes(tokenHash)) {
        // Token valido, reindirizza a html_valid
        window.location.href = "html_valid.html";
      } else {
        // Token non valido, reindirizza a html_failed
        window.location.href = "html_failed.html";
      }
    } else {
      // Nessun token presente, reindirizza a html_failed
      window.location.href = "html_failed.html";
    }
  }
  
  // Esegui la funzione al caricamento della pagina
  window.onload = handleTokenValidation;
  
  // **Importante:** Assicurati di includere la libreria CryptoJS prima di questo script per poter calcolare l'MD5.