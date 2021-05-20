"use strict";
document.addEventListener('DOMContentLoaded', () => {
    let button = document.getElementById('enviar');
    button.addEventListener('click', valorFinal);
    function valorFinal() {
        //Declaração de variaveis com asignação de valores
        let carroSemImposto = document.getElementById('precoCarro').value;
        let impostoDeFabrica = Number(carroSemImposto) * (28 / 100);
        let carroComImpostoDeFabrica = Number(carroSemImposto) + impostoDeFabrica;
        let impostosGerais = carroComImpostoDeFabrica * (45 / 100);
        let carroCostoParaVenda = carroComImpostoDeFabrica + impostosGerais;
        alert(carroCostoParaVenda.toFixed(2));
    }
});
