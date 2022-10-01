let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");


// Passo a passo de como desenhar um RETÂNGULO:

ctx.fillStyle = "#0000FF"; // A propriedade "fillStyle" diz para preencher a cor de fundo.

ctx.fillRect(10, 10, 200, 100); // O método "fillRect(x, y, w, h)" recebe quatro argumentos, como "x, para definir de onde quer iniciar o desenho neste eixo", "y, para definir de onde quer iniciar o desenho neste eixo", "largura, para definir uma largura para este desenho" e "altura, para definir uma altura para este desenho". Este método é chamado de "retângulo preenchido".


ctx.strokeStyle = "red"; // A propriedade "strokeStyle" define a cor da linha.

ctx.strokeRect(10, 150, 200, 200); // O método "strokeRect(x, y, w, h)" recebe quatro argumentos, como "x, para definir de onde quer iniciar o desenho neste eixo", "y, para definir de onde quer iniciar o desenho neste eixo", "largura, para definir uma largura para este desenho" e "altura, para definir uma altura para este desenho". Este método é chamado de "retângulo de linha comum".

ctx.rect(300, 10, 100, 200); // O método "rect(x, y, w, h)" recebe quatro argumentos, como "x, para definir de onde quer iniciar o desenho neste eixo", "y, para definir de onde quer iniciar o desenho neste eixo", "largura, para definir uma largura para este desenho" e "altura, para definir uma altura para este desenho".

ctx.fillStyle = "orangered"; 

ctx.lineWidth = 5;

ctx.strokeStyle = "black";

ctx.fill(); // O método "fill()" diz para preencher o desenho.

ctx.stroke(); 

ctx.clearRect(330 , 20 , 30, 30); // O método "clearRect(x, y, w, h)" recebe quatro argumentos, como "x, para definir de onde quer iniciar o desenho neste eixo", "y, para definir de onde quer iniciar o desenho neste eixo", "largura, para definir uma largura para este desenho" e "altura, para definir uma altura para este desenho". Este método serve para limpar uma parte do desenho.