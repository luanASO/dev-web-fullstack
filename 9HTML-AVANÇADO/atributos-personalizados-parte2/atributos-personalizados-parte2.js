let lista = document.getElementById("lista");

lista.dataset.num = 12; // modifica o valor do atributo modificado "num" com o método "dataset".

let num = parseInt(lista.dataset.num); // a propriedade "dataset" retorna o atributo personalizado no documento HTML "lista", onde "num" foi criado.

let id = lista.dataset.id; // retorna o valor do atributo personalizado "id".
console.log(id); // retorna uma "string".



let conteudo = "";

for(let i = 0; i < num; i++) {

    conteudo += "<li>" + i + "<li>";

}

lista.innerHTML = conteudo;

