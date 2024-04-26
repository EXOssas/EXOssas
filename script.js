// Funzione per gestire il login
    function login(event) {
      event.preventDefault();
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;

      // Esempio di autenticazione (sostituire con il proprio sistema di autenticazione)
      if (username === "utente" && password === "password") {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "todo_list.html"; // Reindirizza alla pagina della to-do list
      } else {
        alert("Credenziali non valide. Riprova.");
      }
    }

    // Controllo se l'utente è già loggato
    window.onload = function() {
      if (localStorage.getItem("loggedIn") === "true") {
        window.location.href = "todo_list.html"; // Reindirizza alla pagina della to-do list se l'utente è già loggato
      }
    };
