// setTimeout() é um método do window, pode-se executar algum código em determinado tempo.

// setInterval() é um método do window, pode-se executar algum código em determinado tempo repetidamente.

// clearTimeout() é um método do window, pode-se para a execução do "setTimeout()".

// clearInterval é um método do window, pode-se parar a execução do "setInterval()".

let h1 = document.getElementsByTagName("h1")[0];

function mudarTexto() {
    h1.innerHTML = "Novo Texto"
    setTimeout(mudarCor, 3000); // recebe dois argumento, sendo esses, a função que vai ser executada, e por último em quantos millisegundos será executada essa função.

    setInterval(atualizarTexto, 3000); // recebe dois argumento, sendo esses, a função que vai ser executada, e por último em quantos millisegundos será executada essa função, a execução é feita repetidamente.

}

function mudarCor() { // função a ser executada após 3000 milisegundos, ou seja, 3 segundos. Usando o método "setTimeout()".
    h1.style.color = "blue";
}

let numero = 0; 

function atualizarTexto() { // função a ser executada repetidamente em cada 3000 milisegundos, ou seja, 3 segundos. Usando "setInterval()"
    h1.innerHTML += " " + numero;
    numero++;
}

var interval;

function iniciar() {
    interval  = setInterval(atualizarTexto, 1000); // "reatribui o método "setInterval()" a variável "interval".
}

function parar() {
    clearInterval(interval); // para a execução do método "setInterval()" ou "setTimeout()", quando adicionado a esse método "clear".
}