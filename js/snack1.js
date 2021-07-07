/*SNACK 1 : Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.*/

/*
1 - Creare con un ciclo While o For le 5 richieste di un numero;
2 - Effettuare la validazione sul numero che venga inserito;
3 - Sommare tutti i numeri che sono stati inseriti;
4 - Stampare la somma di tutti i numeri;
5 - Ricontrollare il codice (per il ciclo while controllare che venga inserito i++);
*/


var sum = 0;

//ciclo di For
for (var i = 1; i <= 5; i++) {
    var userNumber = parseInt(prompt('Inserisci un numero (' + i + '/ 5)'));

    //validazione
    if (!isNaN(userNumber)) {
        sum += userNumber;

    }
}
console.log(sum);

//ciclo di While

var i = 1;
while (i <= 5) {

    var userNumber = parseInt(prompt('Inserisci un numero (' + i + '\5)'));

    //validazione
    if (!isNaN(userNumber)) {
        sum += userNumber;
    }
    i++
}
console.log(sum);

