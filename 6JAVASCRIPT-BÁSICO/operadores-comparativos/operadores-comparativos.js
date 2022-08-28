// Operadores comparativos
    // == igual a
    // === valor igual e igual a
    // != não é igual a
    // !== não igaul ou não igual a
    // > maior que 
    // < menor que 
    // >= maior que ou igual a
    // <= menor que ou igual a 

// Operadores comparativos, faz uma comparação entre valores para saber se essa comparação é verdade ou falsa. Se for verdadeira retorna "true", se for falsa retorna "false".

var a = 3;
var b = '3';
console.log(2 == 3); // diz para comparar, 2 é igual a 3? False, dois não é maior que 3. Retornando um valor "boolean".

console.log(a == b); // informa que mesmo "b" sendo "string" ele retorna "true", pois ele não deixa de ser igual.

console.log(a === b); // informa que "b" não é igual a "a", mesmo "b" tendo o mesmo valor, só será igual se o tipo de dados forem o mesmo.

console.log(a != b); // diz para comparar se "a" é diferente de "b", neste caso ele é igual a "b", então vai retornar false.

console.log(a !== b); // diz para comparar se "a" é diferente de "b", mesmo tendo o mesmo valor, se o tipo for diferente, vai retornar "true", pois "a" é igual ao valor de "b", mas seu tipo é diferente.

console.log(5 > 4) // retorna "true", pois compara se 5 é maior que 4, e sim 5 é maior que 4.

console.log(5 > 5) // retorna "false", pois 5 não é maior que 5, são iguais.

console.log(5 >= 5) // retorna "true", pois compara se 5 for maior ou igual a 5, retorna "true".