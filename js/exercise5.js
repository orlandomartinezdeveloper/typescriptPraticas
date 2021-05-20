"use strict";
const numeroPrimo = (numero) => {
    if (numero == 0 || numero == 1 || numero == 4)
        return false;
    for (let x = 2; x < numero / 2; x++) {
        if (numero % x == 0)
            return false;
    }
    return true;
};
const numerosParaProbar = [0, 23, 45, 22, 31, 2, 3];
numerosParaProbar.forEach(numero => {
    if (numeroPrimo(numero) == true) {
        console.log(numero);
    }
});
