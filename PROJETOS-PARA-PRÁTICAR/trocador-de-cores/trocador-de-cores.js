let fundo = document.querySelector("#fundo");
let btn = document.getElementById("btn");
let colorName = document.querySelector("#color");

let cores = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "orangered",
    "white"
]

btn.addEventListener("click", function(){ // adiciona um evento "click" a variável "btn", assim quando eu clico neste elemento, ele executa a função anonima.
    let corSorteada = cores[sortear()];

    fundo.style.backgroundColor = corSorteada;
    colorName.style.color = corSorteada;
    colorName.innerHTML = corSorteada.toUpperCase();
})




function sortear() { // essa função retorna um valor de 0 ao tamanho do "array cores".
    let numeroAleatorio = Math.floor(Math.random() * cores.length);
    return numeroAleatorio;
}

