/*
A variável é um espaço vazio na memoria, e serve para armazenar um dado.
Variável pode ter um nome, e quando esse nome for chamado ele trará como valor dessa variável o dado que lhe foi obtido.

var - quer dizer variável.

Nome de variáveis (REGRAS):
    - usar nomes específicos, em vez de usar "cx", e melhor usar "caixa".
    - pode usar underscore, pode se iniciar com underscore também (_).
    - pode conter números, mas não pode iniciar com números.
    - pode usar é começar com cifrão ($).
    - não pode conter espaços.
    - se usar palavra composta, é indicado usar desta forma
        caixaGrande ou caixa_grande.
    - letra minúscula e maiúscula fazem diferença.
*/

var a; // isto indica que a variável "a" existe, mas não foi atribuido nem um valor, ou só não sabemos o valor que a tem.

console.log(a); // imprime no console o valor de "a".
// O valor de "a" é indefinido(undefined), pode ter qualquer coisa ou pode ter nada.

var a = "Placa de captura"; // atribui a variável "a" um texto,"Placa de captura".

console.log(a); // imprime no console o valor de "a", agora que sabemos o seu valor, não será mais (undefined).
// O valor de "a" é Placa de captura.

var b; // cria a variável e atribuindo um valor depois.

b = "hd"; // coloca um novo valor na variável "b", antes ela erá (undefined) agora ela é "hd".

b = "Placa de captura"; // Define um novo valor a variável "b", retirando o valor "hd" e adicionando "Placa de captura".

console.log(b); // Imprime no console o valor de "b", neste caso é "Placa de captura"

var c; // cria uma váriavel sem saber o seu valor.

var d = "Placa"; // atrubui o valor "Placa" a variável "d".

c = "Hd"; // atribui o valor "Hd" a variável "c".

d  = c; // atribui a variável "d" o valor da variável "c", agora o valor de "d" passa a ser "Hd".

console.log(d); // imprime o valor de "d", o seu valor é "Hd".

