var a = 3;
var b = "2";

var c = a + b; // vai somar "a" mais o valor de "b", é atribuir a "c". Mas, o "b" é uma string, e a operação aritimética +, concatena, quando há uma string sendo somada, e então, neste caso o valor de "a" vai ser transformado em uma string, e seu resultado será 36.
console.log(c);

var d = a + parseInt(b); // vai somar "a" mais o valor de "b", é atribuir a "d". Mas, utilizamos a função parseInt() para transformar um dado de string para um número inteiro.

console.log(d);


var e = "3";
var f = "6";
var g = parseInt(e) + parseInt(f); // transforma string em número e depois soma.

console.log(g)



var h = "3.5";
var i = "6";
var j = h + i;
console.log(j);

var k = parseFloat(h) + parseInt(i); // transforma a string em número inteiro e quebrado. Sendo o parseInt() para números inteiros, e parseFloat() para números quebrados.

console.log(k);