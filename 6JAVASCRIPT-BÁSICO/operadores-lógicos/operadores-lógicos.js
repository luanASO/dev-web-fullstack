// && - e
// || - ou
// ! - Negativo
    // Operadores lógicos, faz uma avaliação entre dois valores booleanos.



var a = true;
var b = false;

var c = a && b; // diz, "a" é verdadeiro"true", e "b" é verdadeiro"true". Caso for os dois verdadeiro retorna "true", se for os dois "false", retorna "false", e se for um "verdadeiro" e outro "falso", retorna "falso". Resumo, os dois tem que ser "verdadeiro" para retorna "true".
console.log(c);

var d = a || b; // diz, "a" é verdadeiro, ou "b" é falso. Caso for um dos dois valores verdadeiro, retorna "true", caso os dois forem "true", retorna "true", mas caso os dois forem "falso", retona "false". Resumo, basta um valor valor ser "verdadeiro" para retornar "true".
console.log(d);

var e = !a ; // faz o valor "boolean" ficar verdadeiro se for falso, ou falso se for verdadeiro. Neste caso o "a" era "true", mas agora é "false".
var f = !b; // faz o "b" passar de "false" para ser "true".
console.log(e);
console.log(f);

 

var idade = 21;
var maior20 = idade > 20;
var menor30 = idade < 30;
var entre = maior20 && menor30;
console.log("idade é maior que 20 ", maior20);
console.log("idade é menor que 30 ", menor30);
console.log("Entre 20 e 30 ", entre);


var idade2 = 60;
var menor10 = idade2 <= 10;
var maior65 = idade2 >= 65;

var resposta = menor10 || maior65;

console.log("Pode ter gratuidade", resposta);