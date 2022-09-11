function sortear() {
    let pessoas = ["Luan", "Thayná", "Renata", "Patricia", "Ana", "Luana", "Luciene", "Isabella", "Analu"]
    let numeroPessoas = pessoas.length;
    let numeroSorteado = Math.floor(Math.random() * numeroPessoas);


    document.getElementById("d").innerHTML = pessoas[numeroSorteado];

}



