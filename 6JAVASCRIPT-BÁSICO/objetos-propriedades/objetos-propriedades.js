// Objetos é muito parecido com "array". 

var objeto = {}; // declara um objeto, para abrir um "objeto" e só abrir chaves "{}"

var aluno = { // cria chaves para acessar determinadas propriedades de um certo elemento. As propriredades se comporta igual varáveis, ou seja, pode se conter qualquer tipo de dado como valor de propriedade.
    nome: "Igor", // indica que "Igor" vai ser o "nome" do meu aluno.
    notas: [10, 10] // indica que "o array [10,10]" é as "notas" do meu aluno.
}

console.log(aluno); // imprime o objeto "aluno".

console.log(aluno.nome); // acessa o "objeto aluno", e pega o valor da propriedade "nome".

console.log(aluno["nome"]); // outra maneira de acessar propriedades em um "objeto".

console.log(aluno["notas"][0]);// acessa o valor da propriedade "notas".

console.log(aluno.notas[1]); // outra maneira de acessar o indice de uma array usando objetos com propriedades.

aluno.matricula = "12345"; // atribui uma nova propriedade ao objeto "aluno".

console.log(aluno.matricula); // imprime a propriedade atribuida fora do bloco do objeto.

aluno["sobrenome"] = "Oliveira"; // outra maneira de se atribuir um objeto.

// Uma forma util de definir um objeto assim, objeto[""], é que dentro desses colchetes podemos passar uma variável com um valor de string.

var saladoAluno = "serie";

aluno[saladoAluno] = "3ºD"; // define que serie recebeu um valor "3ºD".

console.log(aluno.serie)


var aluno = new Object( // uma maneira mais complicada de atribuir um objeto.
    {
    aluno: "Igor",
    nomes: ["luan", "Luan"]
    }
);

console.log(aluno);