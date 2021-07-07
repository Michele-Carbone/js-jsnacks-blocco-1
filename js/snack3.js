/*SNACK 3: Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una 
lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.



/*
1 - Creare una lista di Nomi;
2 - Creare una lista di Cognomi;
3 - Creare una lista vuota;
4 - Sorteggiare un nome a Caso (Random);
5 - Sorteggiare un cognome a caso (Random);
6 - Unire le due parti sorteggiate per formare un nuovo Nome Cognome;
7 - Verifico che non esista la combinazione generata nell'array;
8 - Assegno un Array;
*/


var firstNames = [
    'Marco',
    'Michele',
    'Anna',
    'Filippo',
    'Giacomo',
    'Pietro'
];

var lastNames = [
    'Lanci',
    'Carbone',
    'Lanotte',
    'Botte',
    'Leopardi',
    'Tornaindietro'
];

var mixUser = [];

while (mixUser.length < 3) {
    var randomNumb1 = Math.floor(Math.random() * firstNames.length);
    var randomNumb2 = Math.floor(Math.random() * lastNames.length);
    var randomFirstnames = firstNames[randomNumb1];
    var randomLastNames = lastNames[randomNumb2];

    var fullName = randomFirstnames + ' ' + randomLastNames
    console.log('ho sorteggiato: ', fullName);

    if (!mixUser.includes(fullName)) {
        console.log('ho inserito: ', fullName);
        mixUser.push(fullName);
    }


}

console.table(mixUser);



