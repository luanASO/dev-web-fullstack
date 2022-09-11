// Comparando as maneira de se criar um evento
// atributo no HTML, ou AddEventListener no JS.
    // - HTML tem que usar a função com parenteses "()", senão ele não identifica que é uma função.
    // - JS não precisa adicionar parenteses, senão ele acha que a função está sendo executada.
    // - HTML, o nome do evento deve ser escrito com o "on".
    // - JS não precisa utilizar o "on".
    // - HTML, o "this" é a janela, o proprio objeto "window".
    // - JS, o "this" é o proprio elemento HTML.
    // - HTML, ao adicionar um argumento, o seu valor é "undefined";
    // - JS, ao adicionar um argumento, retorna o evento "que está sendo executado". 
    // JS, retorna o elemento que está acionando aquele evento, se no argumento da função for adicionado a propriedade "target"




function f(e) {
    console.log("Teste")
    console.log(this);
    console.log(e);
}

function f1(e) {
    console.log("Teste f1");
    console.log(this);
    console.log(e.target);
}

let h1 = document.getElementsByTagName("h1")[0];

h1.addEventListener("click", f1);