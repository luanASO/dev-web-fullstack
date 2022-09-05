//  Objetos construtores

function aluno(nome, n1, n2) { // cria uma função que não retorna nada, mas é uma maneira de retornar um objeto usando uma função, mesmo sem instanciar de fato um objeto.
    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;

    this.media = function() {
        return (nota1 + nota2) / 2
    }

}


var a = new aluno("Luan", 9, 9); // diz que "new" faz "aluno" se tornar um objeto, ou seja, ele é um instacia de um objeto.

console.log(a);


// INSTACIAR É QUANDO UM MODELO DE OBJETO É TRASFORMADO DE FATO EM UM OBJETO.
