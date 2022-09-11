let d1 = document.getElementById("d1");

console.log(d1.children); // essa propriedade retorna os filhos do elemento "d1" e retorna em um "array".

let filho = d1.children[0]; // pega o primeiro elemento do elemento pai "d1".

console.log(filho);

let pai = filho.parentElement; // essa propriedade retorna o elemento pai desse elemento.

console.log(pai);

document.body.children; // retorna elementos filhos do elemento "body" em um "array".

let h1 = document.getElementsByTagName("h1");

for (let h of h1) {
    h.addEventListener("click", qop);
}

function qop(e) {
    let t = e.target;
    console.log(t.parentElement);
}

