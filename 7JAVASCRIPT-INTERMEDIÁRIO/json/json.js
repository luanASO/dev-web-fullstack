// JSON (JavaScript Object Notation), é uma forma de representar um objeto JS.
// JSON é um objeto, que tem dois métodos, "parse()" e "stringfy()".
// "stringfy()", esse método pega o objeto JS e transforma em uma "string".
// "parse()", esse método pega o objeto em forma de "string" e tenta transformar em um objeto JS.


let aluno = {
    nome: "Igor",
    nota: 8.9
}

console.log(aluno); // objeto

let a = JSON.stringify(aluno); // objeto "aluno" transformado em "string".

console.log(a); // string

let b = '{"nome":"Luan", "nota": 7.8}'; // "string" com esqueleto de um objeto.

console.log(b); // string

let c = JSON.parse(b); // "string" "b" sendo transformada em um objeto.

console.log(c); // objeto

