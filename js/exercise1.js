"use strict";
//Declaração de variaveis com asignação de valores
let carroSemImposto = 1000;
let impostoDeFabrica = carroSemImposto * (28 / 100);
let carroComImpostoDeFabrica = carroSemImposto + impostoDeFabrica;
let impostosGerais = carroComImpostoDeFabrica * (45 / 100);
let carroCostoParaVenda = carroComImpostoDeFabrica + impostosGerais;
console.log(carroCostoParaVenda);
