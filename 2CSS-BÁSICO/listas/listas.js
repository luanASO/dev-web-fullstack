function acertou() {
    var res = document.getElementById('res')
    res.innerHTML = `<p>Voce acertou\n PARABENS!!`
    res.style.background = "rgb(0, 255, 0)"
}

function errou() {
    var res1 = document.getElementById('res1')
    res1.innerHTML = `<p>Errou\n TENTE NOVAMENTE!</p>`
    res1.style.background = "red"
}

function errou1() {
    var res2 = document.getElementById('res2')
    res2.innerHTML = `<p>Errou\n TENTE NOVAMENTE!</p>`
    res2.style.background = "red"

}

function acertouErrou() {
    var resp = document.getElementById('errado')
    resp.innerHTML = ` <p> [ERROU!!] TENTE NOVAMENTE! </p>`
    resp.style.background = "red"
}

function acertouErrou1() {
    var resp1 = document.getElementById('errado1')
    resp1.innerHTML = `<p> [ERROU!] TENTE NOVAMENTE!</p>`
    resp1.style.background = "red"
}

function acertou1() {
    var resp2 = document.getElementById('certo')
    resp2.innerHTML = `<p>Voce acertou\n PARABENS!!<p>`
    resp2.style.background = "rgb(0, 255, 0)"
}

var tentarN = document.getElementById('tentarN')
tentarN.innerHTML = `<input type="button" value="Tentar Novamente"id="sty" onclick="recarregar()">`