// Arrays é uma maneira de adicionar varios tipos de dados em uma mesma variável.
// Os valores do "array" tem que ser separado por vírgula.
// Dentro de Array podemos ter outras variáveis, objetos, ate mesmo outros arrays.
// Os métodos do array também são bem utéis.

var vetor = new Array('luan', true, 'false', 12, undefined, NaN); // cria um "array" usando a palavra chave "new" e adiciona um novo array.
console.log(vetor);


var alunos = new Array("Igor", "José", "Marcos", "Mariana"); // Define uma lista de alunos.

console.log(alunos); // imprime na tela a lista de alunos definida acima.

console.log(alunos[0]); // retorna a posição da índice "0" do "array", que neste caso é "Igor". todos os "arrays" se iniciam na posição 0.

console.log(alunos[1]); // retorna a posição da indice "1" do "array", que neste caso é "José".

console.log(alunos[4]); // retorna um valor indefinido(undefined), pois não tem nenhum elemento na posição da indice "4" do "array".


var alunos1 = ["Igor", "José", "Marcos", "Mariana"]; // outra forma de definir um "array, utilizando colchetes "[]".

console.log(alunos1.length); // retorna o tamanho de elementos de um "array", neste caso é 4.

for (var a = 0; alunos1.length > a; a++) { // varre o "array", mostrando cada elemento separado, como se fosse uma lista. Neste caso faz, declara uma variável "a" e pergunta em seguida, se o tamanho do "array" é maior que a variável "a", caso for executa, e soma 1 a "a".
   
    console.log(alunos1[a]);
}

for(var indiceArray in alunos) { // uma maneira de varrer o indice do "array". utilizando a palavra chave "in".
    console.log(indiceArray);
}

for(var aluno of alunos) { // uma maneira de varrer os elementos do "array", utilizando a palavra chave "of".
    console.log(aluno);
}