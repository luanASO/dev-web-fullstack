// O objeto "Math" tem diversas propriedades é métodos que ajuda a fazer calculos matemáticos.

let pi = Math.PI; // retorna o valor de "PI", 3.1415...
console.log(pi); 

let e = Math.E; //retorna o valor de "E", 2.7182...
console.log(e); 

let raizQuadrada = Math.sqrt(16); // é um método que retorna a raiz quadrada do numero entre parenteses().
console.log(raizQuadrada);

let potencia = Math.pow(2, 3); // é um método que retorna a potencia, recebe dois argumentos, o número "base" é o numero exponeciado, neste caso fica, 2 elevado a 3. (2x2x2 = 8).
console.log(potencia);

let numeroAleatorio = Math.random(); // é um método que retorna um valor aleatório de 0 a 1, 0.0000000000000 a 1.000000000000
console.log(numeroAleatorio);

let numeroAleatorio10 = Math.random() * 10; // retorna um número aleátorio de 0 a 10.
console.log(numeroAleatorio10);

let numeroInteiro = Math.round(5.5); // retorna um número arredondado dependendo do número depois do ponto flutuante, caso o núnero flutuante for 5.4 ou menor, arredonda pra "5", caso o número for 5.5 ou maior, arredonda pra "6".
console.log(numeroInteiro);

let numeroInteiro1 = Math.floor(5.99); // retorna um número arredondado, independentemente se os número depois do ponto flutuante for quase "6", o número será arredondado pra "5".
console.log(numeroInteiro1);

let numeroSeguinte = Math.ceil(5.001); // o número vai arredondar se o numero for maior que "5" por completo. Se caso for "5", continuará "5", mas se passar arredonda pra "6".
console.log(numeroSeguinte);