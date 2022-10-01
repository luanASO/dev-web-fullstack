let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");


// Passo a passo para criar um CIRCULO. 

let x = 250;
let y = 250;
let raio = 100;
let inicio = 0;
let fim = 2 * Math.PI;

ctx.beginPath();

ctx.strokeStyle = "red";

ctx.fillStyle = "blue"

ctx.arc(x, y, raio, inicio, fim); // O método "arc(x, y, raio, ângulo inicial, ângulo final)" serve para criar um arco, com vários argumentos que o contém.

ctx.lineWidth = 4;

ctx.fill();

ctx.stroke();