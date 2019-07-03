// TRACCIA
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere
// e stampa un messaggio appropriato

// Dichiarazione variabili
var email_invitati, email_utente;
var invitato = document.getElementById("invitato");
var trovato = false;
// console.log(invitato);

// Elenco email invitati
email_invitati = [
  "utente1@gmail.com",
  "utente2@gmail.com",
  "utente3@gmail.com",
  "utente4@gmail.com",
  "utente5@gmail.com"
];

// Chiedo email utente
email_utente = prompt("Qual è la tua email?");
// console.log(email_utente);

// Controllo corrispondenza fra email utente e elenco invitati
for (var i = 0; i < email_invitati.length; i++) {
  if (email_utente == email_invitati[i]) {
    trovato = true;
    //invitato.innerHTML = "Sei nella lista degli invitati! Ti aspettiamo";
    console.log("trovato");
  }
}

// Sei stato invitato?
if (trovato == true) {
  invitato.innerHTML = "Sei nella lista degli invitati! Ti aspettiamo";
} else {
  invitato.innerHTML = "Non sei nella lista degli invitati!";
}
