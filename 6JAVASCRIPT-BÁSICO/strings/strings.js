var str = 'Valor qualquer "texto entre aspas"'; // caso for usar aspas duplas ("") em uma string, e necessário iniciar a string com aspas simples ('').

var str = "Valor qualquer d'agua"; // caso for usar aspas simples ('') em uma string, e necessário iniciar a string com aspas duplas ("").

str += " outro texto"; // concatenando string com outra string.

var numero = 8; 
str += numero; // concatenando número com string, o numero passa a ser string.


var n = "Algum texto " * 2; // este valor não é um número, então ele não vai fazer a soma. O resultado desta operação é NaN, não é um número.
var num = "8" * 2; // quando um operador aritimético se encontra com uma string, e essa string tiver um valor numerico, ele vai fazer a soma. E transformar a string em número.