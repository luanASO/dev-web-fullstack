// O elemento "canvas" é manipulado através do JS, e é necessário seguir alguns passos para isso.

// Com canvas pode-se criar ("linha", "retângulo", "circulo", "texto") e muitas outras coisas.


// Passo a passo de como desenhar LINHAS:

let tela = document.getElementById("tela");
let ctx = tela.getContext("2d"); // este método "getContext("2d")", indica que o elemento terá todas as propriedades e métodos para "desenhar" elementos em "2d".

ctx.moveTo(0, 0); // O método "moveTo(x, y)" indica onde deve começar o desenho.

ctx.lineTo(250, 250); // O método "lineTo(x, y)" diz para criar uma linha de um ponto até o outro ponto.

ctx.lineWidth = 5; // A propriedade "lineWidth" serve para definir a largura da linha. Deve ser utilizado antes do método "stroke()".

ctx.lineTo(500, 0); 

ctx.strokeStyle = "#FF0000"; // A propriedade "strokeStyle" serve para definir uma cor para a linha.

ctx.stroke(); // O método "stroke()" adiciona uma espessura para linha. Se utilizar várias vezes este método a espessura será mais grossa.



