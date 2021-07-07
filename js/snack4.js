/*
SNACK 4:  Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro.
*/

var array1 = [1, 23, 89, 454546, 31, 656, 4, 645, 465, 46532];
var array2 = [3, 54, 4, 45, 78, 68, 65, 465, 465, 3, 132, 132, 64, 9643, 1, 32, 132];
var listNumber3 = [];


/*
1 - Creo due array di lunghezza differente;
2 - Creo un elemento random;
3 - Verificare quale array è il piu corto tra i due;
4 - Aggiungere l'elemento random all'array piu corto;
*/

while (array1.length !== array2.length) {
    var randomNumber = Math.floor(Math.random() * 100) + 1;

    if (array1.length > array2.length) {
        array2.push(randomNumber);
    } else {
        array1.push(randomNumber);
    }
}


console.log('Gli array hanno uguale lunghezza');

console.log(array1);
console.log(array2);