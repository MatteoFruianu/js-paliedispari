// Palindroma
// Chiedere all'utente di inserire una parola
// Creare una funzione per invertire i caratteri di una stringa.
// Capire se la parola inserita è palindroma



//chiedo all'utente di inserire una parola

// var parolaUtente = prompt("inserire una parola").toLowerCase();

// // creo una funzione if else con la comparazione della parola data dall'utente e la parola letta al contrario

// if (parolaUtente === reverseWord(parolaUtente)) {
//     console.log("La parola è palindroma")
// } else {
//     console.log("La parola non è palindroma")
// }

// // creo la funzione per invertire la parola

// function reverseWord(word) {

// var splitWord = word.split("");

// splitWord;

// var reverser = splitWord.reverse();

// reverser;

// var joinReverse = reverser.join("");

// joinReverse;

// return joinReverse;

// }




// Pari e Dispari
// L'utente sceglie pari o dispari
// L'utente inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto in base alla scelta pario o dispari fatta all'inizio dall'utente.


// chiedo all'utente se sceglie pari o dispari

var pariDispari = prompt("Pari o dispari?").toLowerCase();

// faccio scegliere all'utente un numero da 1 a 5

var numeroUtente = parseInt( prompt("Scegli un numero da 1 a 5") );
console.log("L'utente ha scelto il numero: " + numeroUtente);

// in base alla funzione creata faccio scegliere un numero random al pc da 1 a 5

var numeroComputer = randomComputer(1,5);

console.log("Il computer ha scelto il numero: " + numeroComputer);

// sommo il valore utente e il valore pc

var sommaTotale = numeroUtente + numeroComputer;
console.log("La somma totale è " + sommaTotale);

console.log("L'utente ha scelto: " + pariDispari)

// richiamando la funzione verdetto stabilisco chi vince con if/else

if (verdetto(sommaTotale) === pariDispari) {
    console.log("L'utente ha vinto")
} else {
    console.log("Ha vinto il computer");
}

function verdetto (num) {
    if (num % 2 === 0) {
        return "pari"
    }

    return "dispari"
}



function randomComputer(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }





 














