let jogador = document.getElementById("jogador"); // pega o elemento HTML com o "id jogador" e atribue a variável "jogador".

let xInicial = 0; // define uma posição inicial para o eixo X.
let yInicial = 0; // define uma posição inicial para o eixo Y.

function moverJogadorPara(x, y) { // essa função recebe dois argumentos "x" e "y".
    let posiX = x + "px"; // diz que a variável "posiX" vai receber o valor do argumento "x" e vai concatenar com a "string px".
    let posiY = y + "px"; // diz que a variável "posiY" vai receber o valor do argumento "y" e vai concatenar com a "string px".

    jogador.style.top = posiX; // diz que o "style" do elemento HTML "jogador" vai ter a propriedade "top" com o valor da variável "posiX".
    jogador.style.left = posiY; // diz que o "style" do elemento HTML "jogador" vai ter a propriedade "left" com o valor da variável "posiY".

}


setInterval(function () { // executa a função anônima a cada 10 millisegudos.
    moverJogadorPara(xInicial++, yInicial++); // a função a ser executada, recebe como argumento a variável "xIncial" com o valor "0", e a variável "yInicial" com o valor "0". Cada vez que essa função for executada, ou seja, a cada 50 millisegundos, as variáveis "xInicial" e "yInicial" recebe mais "1" em seu valor.

    if (jogador.style.top == "500px") { // diz, "se" o elemento HTML "jogador" ter um "style" com a propriedade "top" com o valor de "500px" o valor das variáveis "xIncial" e "yInicial" será "0".
        xInicial = 0;
        yInicial = 0;
    }
}, 10)
