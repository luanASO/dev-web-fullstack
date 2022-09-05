// Exemplo prático da aula de IF

var nota1 = 8.0;
var nota2 = 8.0;

var media = (nota1 + nota2) / 2;

if (media >= 7) {
    console.log("Você passou com média " + media);
} else {
    console.log("Sua nota " + media + " não foi o suficiente para passar!")
}

// Switch é uma condicional que avalia um valor de algo, e caso aquilo tiver o mesmo valor vai executar algum codigo, o outro codigo ou outro codigo....

var conceito = ""; // defini uma variável string vazia. Para podemos utilizar ela depois.

if (media >= 8) { // se a media for maior ou igual a 8 adicionar o valor "Otimo" na variável "conceito".
    conceito = "Ótimo!"
} else if (media > 6.5) { // se a média for maior que 6.5 adicionar o valor "Bom" na variável "conceito".
    conceito = "Bom!"
} else { // senão for nem maior ou igual a 8, e nem maior que 6.5, adicionar valor "Regular" na variável "conceito".
    conceito = "Regular!"
}

console.log(media);
console.log(conceito);

switch (conceito) { // diz para avaliar o valor da variável "conceito". Pode ser avaliado vários tipos de dados.
    case "Ótimo!": // analisa se "conceito" tem o valor "Otimo", caso estiver executa o codigo.
        console.log("Parabéns você é um ótimo aluno!");
    break; // diz que, se caso "conceito" o valor for "Otimo", parar a condição aqui. E não precisa executar o codigo abaixo.
    case "Bom!": // analisa se "conceito" tem o valor "Bom", caso estiver executa o codigo.
        console.log("Você está quase perfeito!");
    break;
    case "Regular!": // analisa se "conceito" tem o valor "Regular", caso estiver executa o codigo.
        console.log("Estuda mais um pouco!");
    break;
    default: // se conceito não estiver nenhum valor desses acima, ou simplismente não executar nenhuma dessas condições o "defaul", valor padrão será execultado.
        console.log("Houve algum erro!")



}