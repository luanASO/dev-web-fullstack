// O elemento "video" pode ser manipulado pelo Javascript através de propriedades e métodos proprios.

let video = document.getElementById("video_principal"); // atribue a "video" o elemento com o "id video_principla" do HTML.

let controle = document.getElementById("controle_principal"); // atribue a "controle" o elemento com "id controle_principal" do HTML.

controle.style.display = "none"; // diz que o elemento "controle" vai ficar escondido na página web.

video.addEventListener("mouseover", function(){ // quando o mouse ficar sobre o elemento "video" vai executar a função anônima.
    controle.style.display = "block"; // diz que o elemento "controle" vai aparecer na página web.
})

controle.addEventListener("mouseout", function(){ // quando mouse ficar fora do elemento "controle" vai executar a função anônima.
    controle.style.display = "none"; // diz que o elemento "controle" não vai ficar escondido na página web.
})

var parar_tempoAtual; // usada mais a frente, na função "play()".

function retroceder() { 
    video.currentTime = video.currentTime - 10; // diz que a "hora atual" do elemento "video" vai receber -10, ou seja, vai voltar 10 segundos.
}

function avancar() {
    video.currentTime = video.currentTime + 10; // diz que a "hora atual" do elemento "video" vai receber +10, ou seja, vai avançar 10 segundos
}

function diminuir_vel() {
    video.playbackRate -= 0.1; // diz que sua "taxa de reprodução" vai diminuir -0.1 segundos de sua velocidade, ou seja, o elemento "video" vai ficar mais lenta.
}

function aumentar_vel() {
    video.playbackRate += 0.1; // diz que sua "taxa de reprodução" vai aumentar +0.1 segundos de sua velocidade, ou seja, o elemento "video" vai ficar mais rápida.
}

function play() {
    video.play(); // diz que o elemento "video" pode "iniciar".
    parar_tempoAtual = setInterval(tempoAtual, 1000); // executa a função "tempoAtual()" a cada 1 segundo.
}

function pausar() {
    video.pause(); // diz que o elemento "video" vai "parar" de onde estava.
}

function stop() {
    video.pause(); // diz que o elemento "video" vai "parar" de onde estava.
    video.currentTime = 0; // diz que o "tempo atual" do elemento "video" vai ficar em 0 segundos, ou seja, voltar ao inicio.
    clearInterval(parar_tempoAtual); // diz que vai para a execução da função "tempoAtual()"
}

function tempoAtual() {
    console.log(video.currentTime);
} 




