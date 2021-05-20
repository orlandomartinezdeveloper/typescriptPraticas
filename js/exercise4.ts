let numeros: number[] = [10, 17, 9, 8, 70, 4, 3];
let numeroMaior: number = 0;
let numero: number;
for (numero of numeros) {
    if (numeroMaior < numero)
        numeroMaior = numero;
};
console.log(numeroMaior);
