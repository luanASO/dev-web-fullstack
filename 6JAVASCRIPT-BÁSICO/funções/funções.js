// Uma função ela define um apelido para um bloco de comando, portanto, quando eu chamar este apelido o computador vai executar esse bloco de comando.


function media() { // declara a função, cujo o apelido é "media". O codigo em bloco só será executada, caso a função seja chamada.
    var nota1 = 10;
    var nota2 = 8;
    var media = (nota1 + nota2) / 2
    console.log(media);
    
}

media(); // O bloco de código com apelido "media" será executada.


function media1(n1, n2) { // nas funções pode-se adicionar argumentos dentro dos parenteses. Os argumentos são nada mais que variáveis, mas neste caso não é necessário usar o "var".

    var nota1 = n1; // diz que valor de "n1" vai ser atribuido a "nota1", sendo valor de "n1" (undefined).
    var nota2 = n2;
    var media = (nota1 + nota2) / 2;
    console.log(media); // O resultado será (NaN).
}

media1(); // chamando a função "media1", para executar o código.

media1(10, 8); // adiciona valores aos argumentos (n1 e n2) da função "media1", neste caso o valor 10 vai ser atribuido a variável "n1", e valor 8 atribuido ao "n2". Logo em seguida o código será executado.

function media2(n1, n2) {
    var nota1 = n1; 
    var nota2 = n2;
    var media = (nota1 + nota2) / 2;
    
    return media; // retorna o valor de "media" a "media2", ou seja, retorna o valor a propria função.
}

media2(4, 10); // quando eu faço isto executa o bloco de código, mas como não tem nenhum console.log, não irá imprimir nada. 

console.log(media2(4, 10)); // isto imprime o bloco de código que retorna valor de média nela mesma, então imprime na tela o valor retornado de "media2"