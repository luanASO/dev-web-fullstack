// Os atributos personalizados são maneira de pegar, mudar ou atribuir atributos nos elementos HTML.
    // elemetoHTML.src = "", esta propriedade muda o atributo "src".
    // elementoHTML.setAttribute("src", "./img"), este método tem dois argumentos, sendo o primeiro o atributo que deseja modificar ou atribuir, e o segundo argumento serve para adicionar um valor para aquele atributo.
    // elementoHTML.getAttribute("src"), este método serve para retornar o valor do atributo que estar como argumento. Neste caso retorna o valor do atributo "src".

let image = document.getElementById("like"); // pega o elemento com o "id like" no HTML.

image.addEventListener("click", function() { // adiciona um evento de "clicar" a variável "image".
this.setAttribute("src", "./img/thumbs down.png") // troca o atributo "src" quando o elemento "image" for clicada.
})

image.setAttribute("cor", "vermelha"); // cria um atributo "cor" com o valor "vermelho".

let lista = document.getElementById("lista"); // pega o elemento HTML com "id lista".

let num = lista.getAttribute("num"); // atribui a variável "num", o valor do atributo personalizado "num".

let conteudo = ""; // cria uma variável com uma string vazia.
for (let i = 0; i < num; i++) { // cria uma repetição onde, enquanto "i" for menor que "num" "i" vai receber "mais um".
    conteudo += "<li>" + i + "</li>"; 
    lista.innerHTML = conteudo;
}