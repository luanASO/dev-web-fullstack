// Eventos Document Object Model

function h1click(e) { // esta função está sendo utilizada no documento HTML, mas especificamente dentro do evento "onclick", ou seja, ao clicar no elemento executará esta função.
    console.log(e); 
    e.style.color = "red"; // já que este argumento "e", esta sendo relacionado com o "this", o proprio elemento, pode se modificar este elemento a partir disso.
}

function changeh1(input) { // esta função esta sendo utilizada no documento HTML.
    let h1 = document.getElementsByTagName("h1")[0]; // retorna um "array" com elementos com a tag "h1".

    console.log(h1);

    h1.innerHTML = input.value; // retorna em vez o elemento em si, retorna seu valor e atribui ao elemento "h1".
    
}