"use strict";
let numeros = [10, 17, 9, 8, 70, 4, 3];
let numeroMaior = 0;
let numero;
for (numero of numeros) {
    if (numeroMaior < numero)
        numeroMaior = numero;
}
;
console.log(numeroMaior);
