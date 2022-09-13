// pensar na solução do problema.
// - sempre que for criar um programa, precisa saber exatamente o que esse programa vai fazer.
// - criar um algoritimo antes de começar a codar.


// PROBLEMA : criar um programa que calcula a quantidade de comida e bebida que vai ter em um churrasco dependendo do número de pessoas, e se elas são adultos e crianças, e quanto tempo será a duração desse churrasco.

// Carne - 400 gr por pessoa, se for mais de 6 horas, 650 gr.
// Cerveja - 1200 ml por pessoa, se for mais de 6 horas, 2000 ml.
// Refrigerante/água - 1000ml por pessoa, se for mais de 6 horas, 1500 ml.

// crianças valem por meia pessoa (0,5).

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultados = document.getElementById("resultado");

function calcular() {
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdCarne = adultos * carnePP(duracao)  + (carnePP(duracao) / 2 * criancas);
    let qtdCerveja = cervejaPP(duracao) * adultos;
    let qtdBebidas = adultos * bebidasPP(duracao) + (bebidasPP(duracao) / 2 * criancas);

    resultados.innerHTML = `<p>${qtdCarne / 1000}Kg de Carne</p>`;
    resultados.innerHTML += `<p>${Math.ceil(qtdCerveja / 365)} latas de Cerveja</p>`;
    resultados.innerHTML += `<p>${Math.ceil(qtdBebidas / 2000)} Pet's de 2L de Bebidas</p>`;
}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}
function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}
function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}