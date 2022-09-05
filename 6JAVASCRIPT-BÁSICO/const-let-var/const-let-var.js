// Const é uma constante, ou seja, uma vez que lhe foi atribuido um valor não será possível reatribuir. Contudo, os valores contidos dentro de um "array" ou um "objeto" podem ser alterados.

const n = 4; // não pode ser reatribuido outro valor para "n".
console.log(n);
const numero3 = [9, 8]; // não pode ser reatribuido um outro valor, mas pode-se alterar os valores do "array".
numero3.push(2); // adiciona o valor "2" no final do "array".
console.log(numero3);

// Let é uma variável que pode ser reatribuida, mas a difernça entre "let" e "var" é o "escopo", ou seja, onde aquela variável existe e pode ser usada, e onde ela não existe, não é possível usa-la.

{ // isto é um "escopo", pode-se encontrar esse mesmo "escopo" em (if, for, while, switch, function, etc). Se uma variável for criada dentro desse "escopo", só poderá ser usado dentro desse "escopo".

    var numero1 = 2; // pode ser usada fora desse escopo, ou seja, seu escopo é "global".
    let numero2 = 3; // não pode ser usada fora desse escopo, ou seja, seu escopo é local.
    const numero3 = 2; // não pode ser usada fora desse escopo, ou seja, seu escopo é local.

}





// DIFENÇAS ENTRE CONST, LET E VAR
/*
    - const não pode ser reatribuida.
    - var e let podem ser reatribuida.
    - var tem um escopo global.
    - const e let tem um escopo local.
*/
