// Local Storage serve para salvar dados na memória do navegador, se fechar o navegador os dados continuam salvos, por exemplo.
// Local Storage é um objeto do window que tem três métodos. sendo eles.
    //setItem(); armazena um dado na memória do navegador, para que possa ser usado depois.
    //getItem(); retorna o dado que estar salvo na memória do navegador.
    //removeItem(); apagar o dado que estar salvo na memória do navegador.
    //clear(); apaga toda a memória.

localStorage.setItem("nome", "Igor"); // recebe dois argumentos, o primeiro é uma chave e no segundo argumento é um valor que será atribuido ao primeiro argumento.  Ou seja, "nome" recebe "Igor". Agora esses dados estão salvos na memória do navegador.

let n = localStorage.getItem("nome"); // atribui a "n", o valor que está armazenada na memória e que foi atribuiada a "nome".

console.log(n);

localStorage.removeItem("nome"); // remove esse dado da memória.


function atualizar(elemento) { 
    let h1 = document.getElementById("nome"); // atribui a "h1" o elemento HTML com o "id nome".
    let valor = elemento.value; // // atribui a valor, o valor do elemento input do HTML.
    h1.innerHTML = valor; // modifica o elemento HTML "h1" para  valor de "valor".
    localStorage.setItem("n", valor); // armazena o valor do elemento HTML, "valor" a classe "n" na memória do navegador.
}

onload = function carregar() { // quando a página atualizar/carregar executar esta função. 
    let h1 = document.getElementById("nome"); 
    let nome = localStorage.getItem("n"); // pega o dado salvo de "n" é atribui este valor a variável "nome".
    h1.innerHTML = nome; // modifica o elemento HTML "h1" para  valor de "nome". 
}



