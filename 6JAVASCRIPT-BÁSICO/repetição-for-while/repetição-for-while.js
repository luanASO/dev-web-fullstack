// Repetições são chamados de LOOP, nada mais é que um código que se repete.

var numero = 5; // essa variável é para indicar quantas vezes o codigo dentro do "for()" vai ser repetido.



for(var vez = 0; vez < numero; vez++) {// criamos uma variável "vez" dentro de for(), dizendo qual é a vez que a repetição vai iniciar. Depois vemos se "vez" é menor que "numero", enquanto "vez" for menor que "numero", executa o codigo e depois adiciona 1 a "vez".
    console.log(vez);
} // for() serve para repetir algo certo números de vezes.


while(numero < 18) { // diz que, enquanto essa condição for verdadeira executa o codigo abaixo, neste caso diz, enquanto "numero" for menor que 18, executa o codigo.
    console.log("Número " + numero);  
    numero++; // somamos um número a "numero", pois se não definimos isso o "numero" sempre será menor que 18, então ocorrerá um loop infinito.
}

var number = Math.random(); // O objeto Math, se designa da Matemática, então há várias formas de calculos para utlizarmos. O método random(), faz gerar números aleatórios de 0 a 1.

number = Math.random() * 100; // multiplicando o valor de "number" por 100. Agora o valor de números aleátorios será de 0 a 100.

while (number < 90) { // enquanto o "number" gerar um valor abaixo de 90, executar o codigo abaixo.
    console.log(number);
    number = Math.random() * 100;
}

console.log(number);
console.log("Acabou!");

