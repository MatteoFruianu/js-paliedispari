// Palindroma
// Chiedere all'utente di inserire una parola
// Creare una funzione per invertire i caratteri di una stringa.
// Capire se la parola inserita è palindroma

//chiedo all'utente di inserire una parola

var parolaUtente = prompt("inserire una parola").toLowerCase();

// creo una funzione if else con la comparazione della parola data dall'utente e la parola letta al contrario

if (parolaUtente === reverseWord(parolaUtente)) {
    console.log("La parola è palindroma")
} else {
    console.log("La parola non è palindroma")
}

// creo la funzione per invertire la parola

function reverseWord(word) {

var splitWord = word.split("");

splitWord;

var reverser = splitWord.reverse();

reverser;

var joinReverse = reverser.join("");

joinReverse;

return joinReverse;

}




// Pari e Dispari
// L'utente sceglie pari o dispari
// L'utente inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto in base alla scelta pario o dispari fatta all'inizio dall'utente.
// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.



 














