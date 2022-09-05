// Objetos construtores

function calcMedia() { // cria uma função que calcula a média de notas, sendo "notas1" e "notas2".
    return (this.nota1 + this.nota2) / 2;
}

var turma = [ // cria um "array" de uma turma, e dentro desse "array", pode ter vários alunos.
    { // cria um objeto com nome, notas e media.
        nome: "Luan",
        nota1: 6,
        nota2: 7,
        media: calcMedia
    },
    {
        nome: "João",
        nota1: 9,
        nota2: 7.5,
        media: calcMedia
    }
    
]; 

console.log(turma) // imprime o "array" turma.

var aluno = turma[0]; // imprime o primeiro "aluno" de "turma" é atribui a variável "aluno".
console.log(aluno); 
console.log(aluno.media())

// UMA MANEIRA DE SIMPLIFICAR, E ESCAPAR DE ERROS É USAR FUNÇÕES COM PARAMETROS.


function criarAluno(nome, n1, n2) { // cria um aluno. Retornando um objeto.
      return  {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: calcMedia
    }
}

var turma = [ // cria um "array" que vai ter os alunos.
    criarAluno("Luan", 8, 9), // cria um aluno é atribui ao "array turma".
    criarAluno("João", 5, 4)
]

var aluno = turma[0];
console.log(aluno);
console.log(aluno.media());

for(var aluno of turma) { // varre o "array turma" é imprime no console.
    console.log(aluno.nome + " - " + aluno.media());
}



