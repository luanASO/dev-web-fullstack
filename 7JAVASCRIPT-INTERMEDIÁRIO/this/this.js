let t1 = document.getElementById("t1");

let t2 = document.getElementById("t2");

t1.onclick = colocarEmMaiusculo;

t2.onclick = colocarEmMaiusculo;



function colocarEmMaiusculo(i) { // this funciona através do contexto.
    this.innerHTML = this.innerHTML.toUpperCase();
    console.log(this);
    console.log(i.target)
}