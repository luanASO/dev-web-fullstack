let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");

// Passo a passo para inserir IMAGENS:

// Primeira maneira de adicionar imagem no "canvas":


let img = document.getElementById("img-canvas"); // atribue o elemento com o "id img-canvas" a variável "img".

ctx.drawImage(img, 20, 20, 100, 100); // O método "drawImage(img, x, y, w, h)" recebe argumentos como, ("img, para adicionar o elemento que contém uma imagem", "x, para definir a posição em que a imagem deve ficar neste eixo", "y, para definir a posição em que a imagem deve ficar neste eixo", "largura e altura da imagem").

// Segunda maneira:

let newImg = new Image(); // cria uma nova imagem.

img.src = "img/canvas-image.png"; // pega o caminho da imagem.

img.onload = desenharImg; // adiciona um evento, "quando a imagem carregar" executar a função "desenharImg()"

function desenharImg() { 
    ctx.drawImage(this, 250, 220, this.naturalWidth / 2, this.naturalHeight / 2);
}