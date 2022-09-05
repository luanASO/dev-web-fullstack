var aluno = {
    nome: "Igor", // atribui "propriedade e um valor a "propriedade".
    notas: [7, 5], // atribui a "propriedade notas" um "array".
    
    media: function() { // atribui uma função ao "método" "media".
    return (this.notas[0] + this.notas[1]) / 2; // "this" diz que a notas que vão ser utilizadas, será a notas do objeto "aluno".
    }
}

console.log(aluno);
console.log(aluno.nome)
console.log(aluno.media());

// Quando um objeto tem como valor uma variável ele é chamado de  "propriedade", quando tem como valor uma função ele é chamado de "método".

// Quando utilizar métodos que podem ser modificado, mas ao mesmo tempo que usalás em outros objetos, é melhor criar ela fora do bloco de objetos é atribuir depois.

function calcMedia(no1, no2) {
    return (this.notas[0] + this.notas[1]) / 2; // indica que notas 0 e 1, se for usadas em um objeto que haja esses dados, ele irá pegar essas notas. 
}

var aluno1 = {
    nome: "João",
    notas: [6, 8],
    media: calcMedia
}

console.log(aluno1.nome)
console.log(aluno1.media())

