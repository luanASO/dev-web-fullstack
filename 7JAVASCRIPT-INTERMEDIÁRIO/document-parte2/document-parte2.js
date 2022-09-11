// DOM (Document Object Model), ou seja, modelo de objeto do documento.

// Todos elementos do HTML, está dentro da propriedade "document", ou seja, podemos manipular esses elementos a partir desse "document".

// pode-se...
    // acessar uma tag HTML.
    // modificar essa tag.
    // apagar essa tag.
    // entre muitas outras coisas.

document; // acessa os elementos do documento HTML.
document.body; // acessa o documeto HTML, mas acessa somente o elemento "body".

// Document é um objeto que, dentro dele existe outros objetos.

document.body.innerHTML; // mostra o que tem dentro do elemento "body", mas em forma de "string", com isso podemos modificar, concatenar e fazer outras coisas nesses elemetos.

document.body.innerHTML = "<h1>Esse título foi inserido no JS</h1>" + document.body.innerHTML; // concatena um string que já existia a outra que não existia.

console.log(document); // mostra a modificação do documento HTML.