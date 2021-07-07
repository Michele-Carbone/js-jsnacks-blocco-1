/*SNACK 2: Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo*/



var isValid = true;
var result;

var userNumber = parseInt(prompt('Inserisci un numero', '10'));
console.log('numero inserito: ', userNumber);


//validazione
if (isNaN(userNumber)) {
    isValid = false;
}

if (userNumber % 2 === 0) {
    // caso in cui è pari
    result = userNumber;
    console.log(result);
} else {
    result = userNumber + 1;
    console.log(result);
    // caso in cui fosse dispari
}


/*
//versione migliorata
var userNumber = 0;

do {
    userNumber = parseInt(prompt('Inserisci un numero', '2'));
} while (isNaN(userNumber) || userNumber <= 0);

if (userNumber % 2 === 0) {


    console.log(userNumber);
} else {
    console.log(userNumber + 1);

}
*/
