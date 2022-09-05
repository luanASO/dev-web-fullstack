// Operador ternário é quase mesma coisa que o if, mas ele é usado para escrever uma condição em uma linha de código.

var idade = 71;
idade >= 18 ? console.log("pode!") : console.log("não pode!") // fazedo uma comparação em uma linha de código, diz que, se idade for maior ou igual a 18, "pode", senão, "não pode".

var pode = idade >= 18 && idade <= 70 ? true : false;  // podemos usar valores e guardar na variável caso algo seja verdade, ou guardar outros valores se caso for falso. Neste exemplo diz, se idade for maior ou igual a 18, guarda na variável o valor "true", se idade não for maior ou igual a 18, guarda na variável "false".
console.log(pode);

var condicao;

condicao ? true : false // está é a sintaxe, caso a condição for verdadeira executa a parte "?" e caso a condição for falsa executa a parte ":"