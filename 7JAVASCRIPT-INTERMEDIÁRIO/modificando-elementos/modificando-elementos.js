// Pode modificar elementos e atributos dos mesmos utilizando JS.

let d = document; // atribui o objeto "document" a variável "d". Ou seja, "d" tem todas as propriedades e métodos de "document".

let p = d.getElementById("p1"); // atribui a "p", o elemento com id "p1".

// Maneiras de modificar elementos

p.innerHTML = "<h2>Conteúdo Novo</h2>"; // pode receber um HTML. Pode receber tags, e etc.

p.innerText = "Conteúdo mais novo"; // não pode receber um HTML, mas vai mostrar o contúdo visível na página na web. Mas se algum elemento estiver oculto, no documento HTML, ele não irá mostrar.

p.textContent = "Conteúdo mais novo ainda"; // não pode receber um HTML, mas vai mostrar o conteúdo visível na página web e também vai mostrar o conteúdo oculto do documento HTML.

// Maneiras de modificar atributos de elementos.

p.className; // retorna ou modifica o atributo "class" do elemento HTML.

p.classList[0]; // retorna um "array" com os valores dos atributos "class", podemos modificar o atributo utilizando a indice do "array".

p.getAttribute("meuAtt"); // retorna um atributo, sendo ele já existente ou personalizado.

p.setAttribute("meuAtt", "Luan Alexandre"); // recebe dois argumentos, onde o primeiro é o nome do atributo que deseja modificar ou atribuir. E o segundo argumento, serve para passar o seu valor, seja para modificar ou atribuir.

p.id; // retorna ou modifica o atributo "id" do elemento HTML.

// Estilizar elementos

p.style; // acessa propriedades CSS que pode ser utilizado através do JS.

p.style.backgroundColor = "red"; // atribui ao elemento "p" um estilo com o  fundo "vermelho."