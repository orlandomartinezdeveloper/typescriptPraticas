document.addEventListener('DOMContentLoaded', () => {
    let button = (<HTMLInputElement>document.getElementById('enviar'));
    button.addEventListener('click', valorFinal);
    function valorFinal() {
        //Declaração de variaveis com asignação de valores
        let carroSemImposto = (<HTMLInputElement>document.getElementById('precoCarro')).value;
        let impostoDeFabrica: number = Number(carroSemImposto) * (28 / 100);
        let carroComImpostoDeFabrica: number = Number(carroSemImposto) + impostoDeFabrica;
        let impostosGerais: number = carroComImpostoDeFabrica * (45 / 100);
        let carroCostoParaVenda: number = carroComImpostoDeFabrica + impostosGerais;
        alert(carroCostoParaVenda.toFixed(2));
    }
})


