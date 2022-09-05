function saudacao() {
    return "Olá Mundo!"
}


var s = saudacao; // atribui a "s" um bloco de funções, mas sem execução.
console.log(s);


// Uma função em javascript pode ser uma variável. Então, quando foi atribuido o bloco de código à "s", ele agora pode ser executada como tal.

s(); // sendo executada, mas apenas retornando o valor.

console.log(s()); // sendo executada e imprimindo o valor.




function media(n1, n2) {

    var nota1 = n1;
    var nota2 = n2;
    var media = (nota1 + nota2) / 2;

    return media;
}

var resultado = media(6, 7);

var m = media; // atribui a "m" o bloco de código da função "media", então "m" também pode ser executado.

var resultado2 = m(2, 1); // atribui a "resultado2" o valor da execução de "m".

console.log(resultado);
console.log(resultado2);


var media1 = function(n1, n2) { // atribui à variável uma função anonima, ou seja, uma função sem apelido, com bloco pronto para ser executado.

    return (n1 + n2) / 2;
}

console.log(media1(6, 5));


var media2 = (n, n2) => { // outra maneira de atribuir função a uma variável chamada de "arrow function" ou função de seta.
    return (n + n2) / 2;
}

console.log(media2(2,7));
