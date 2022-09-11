// Maneiras de adicionar eventos em elementos HTML pelo JS.

let t = document.getElementById("titulo"); // atribui o elemento HTML com id "titulo" a variável "t".

t.onclick = mudarTexto; // adiciona um evento na variável com o elemento HTML com id "titulo". E atribui a esse evento uma função, que será executada quando o evento for acionado.


function mudarTexto() { // essa função é executada quando o evento "click" for acionada.
    this.innerHTML = "Oi";
}


let t2 = document.getElementById("titulo2");
t2.addEventListener("click", mudarTexto); // esse método adiciona a um elemento HTML um evento, esse método recebe dois argumentos, sendo o primeiro, o nome do evento a ser executado, e o segundo, a função que será executada quando o evento for acionado.

// ao passar o evento com o método (addEventListener) não precisa adicionar "on" antes do nome do evento.
