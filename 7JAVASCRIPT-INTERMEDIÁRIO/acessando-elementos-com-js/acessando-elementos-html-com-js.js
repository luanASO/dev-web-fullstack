// document é um objeto que contem várias propriedades e métodos.

// Document: Root element html:  
             //element head:
                //element title
                    //text "My title"
             //element body:
                //element a:
                    //atribute "href"
                    //text "My ânk"
                //element h1:
                    //text "My header"

// Podemos acessar elementos, atributos, e modificalos pelo JS.

let p1 = document.getElementById("p1"); // diz, pega o elemento pelo id "p1", e retorna o objeto, e atribua este valor a variável "p1".

console.log(p1);

let paragrafos = document.getElementsByClassName("paragrafo"); // diz, pega os elementos com a classe "paragrafo", e retorna um array, e atribua este valor a variável "paragrafos".

console.log(paragrafos);

for(let p of paragrafos){ // varre o array paragrafos e adiciona a "p".og(p);
    console.log(p);
}

let todosParagafos = document.getElementsByTagName("p"); // diz, pega os elementos que contem a tag "p", e retorna um array, e atribua este valor a variável "todosParagrafos" .

console.log(todosParagafos);

console.log(todosParagafos[0]); // imprime o elemento 1, ou seja, o primeiro paragrafo.