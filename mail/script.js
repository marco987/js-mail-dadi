// TRACCIA
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere
// e stampa un messaggio appropriato

// Dichiarazione variabili
var elenco_email, utente_email;
var invitato = document.getElementById("invitato")

// Elenco email degli utenti invitati
elenco_email = ["invitato1@gmail.com", "invitato2@gmail.com", "invitato3@gmail.com", "invitato4@gmail.com", "invitato5@gmail.com"];

// L'utente inserisce sua email
utente_email = prompt("Qual è la tua email?");

// Verifica email utente
for (var i = 0; i < elenco_email.length; i++) {
  if (i == utente_email) {
    invitato.innerHTML = "Sei nella lista degli invitati! Ti aspettiamo.";
  }
  else {
    invitato.innerHTML = "Spiacente, non sei nella lista degli invitati.";
  }
}

// Messaggio di invito
