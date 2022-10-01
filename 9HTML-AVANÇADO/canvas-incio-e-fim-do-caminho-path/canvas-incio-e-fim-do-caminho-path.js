let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");

// Begin e Close Path (começando ou fechando um novo caminho)

ctx.beginPath(); // O método "beginPath()" diz que está iniciando um novo caminho.

ctx.lineWidth = 4;

ctx.strokeStyle = "red";

ctx.moveTo(10, 10);

ctx.lineTo(400, 300);

ctx.stroke();

ctx.beginPath(); // Começa um novo caminho.

ctx.lineWidth = 7;

ctx.strokeStyle = "blue";

ctx.moveTo(50, 10);

ctx.lineTo(300, 300);

ctx.lineTo(50, 300);

ctx.closePath(); // O método "closePath()" diz para fechar o novo caminho.

ctx.fillStyle = "yellow";

ctx.fill();

ctx.stroke();
