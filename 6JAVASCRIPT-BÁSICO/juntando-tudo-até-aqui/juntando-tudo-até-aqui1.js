// Nome do aluno;
// Nota1 - Nota2 e media
// Aprovado ou Reprovado

// maior ou igual a 5 - Aprovado, mas precisa estudar mais.
// menor que 5 - Reprovado, estudar é bom.
// maior ou igual a 8 - Aprovado, com excelencia


var nome = prompt("Qual é seu nome:");

var nota1 = parseInt(prompt("Qual foi sua primeira nota?"));

var nota2 = parseInt(prompt("Por último qual foi sua segunda nota?"));

var media = (nota1 + nota2) / 2;

function resultado() {
    if (media >= 8) {
        return "Aprovado, com excelencia!";
    } else if (media >= 5) {
        return "Aprovado, mas precisa estudar mais!";
    } else {
        return "Reprovado, estudar é bom.";
    }
}

var resultadoFinal = "Olá " + nome + ", sua primeira nota foi " + nota1 + ", sua segunda nota foi " + nota2 + " é sua media foi " + media + " \nResultado Final : " + resultado() + ".";
 

alert(resultadoFinal);