/*
Estrutura condicionais (if) faz algo se for verdade, e não faz se for falso.



*/

var idade =18;

// Quando só há uma linha de codigo, não precisa utilizar blocos de comandos. A partir de mais de um comando já é necessáro utilizar.
if (idade >= 18) 
    console.log("Pode entrar!")
else 
    console.log("Não pode entrar!")



if (idade > 18 ) { // diz para executar o codigo entre chaves só se algo for verdade. Neste caso, diz, se a idade for maior ou igual a 18 executar o codigo, se a idade for menor que 18, o codigo não será executado.
   console.log("pode"); 
   console.log("Qual o seu pedido?");
} else { // diz para executar o codigo entre chaves caso a condição de cima for falsa, se a posição de cima for verdade, o codigo não será executado. Neste caso diz, se a idade for maior ou igual a 18, o codigo acima será executado, senão, este codigo será executado.
   console.log("não pode"); 
   console.log("Volta futuramente!")
}


if (idade >= 35) { // diz para executar o codigo entre chaves, se a idade for maior ou igual a 35. Neste caso é, Se a idade for maior ou igual a 35, executar codigo.
    console.log("pode"); 
    console.log("Qual é seu pedido?");
} else if (idade >= 18) { // Neste caso é, Senão for maior ou igual a 35, mas idade for maior ou igual a 18, executar codigo.
    console.log("pode"); 
    console.log("Mostre sua identidade!");
} else { // Senão for maior e igual a 35, nem for maior ou igual a 18, executar codigo.
    console.log("não pode"); 
    console.log("Volta futuramente!");
}

