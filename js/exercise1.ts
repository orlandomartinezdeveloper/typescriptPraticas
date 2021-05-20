//Declaração de variaveis com asignação de valores
let carroSemImposto: number = 1000;
let impostoDeFabrica: number = carroSemImposto * (28 / 100);
let carroComImpostoDeFabrica: number = carroSemImposto + impostoDeFabrica;
let impostosGerais: number = carroComImpostoDeFabrica * (45 / 100);
let carroCostoParaVenda: number = carroComImpostoDeFabrica + impostosGerais;
console.log(carroCostoParaVenda);