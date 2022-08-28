alert("Bom dia, Igor!"); // mostra na página um alerta. Pode rodar qualquer codigo JS dentro do método alert().

prompt("Qual é seu nome?"); // faz uma interação com o usuário, e exibe uma caixa de texto. Ao usuário digitar não irá acontecer nada.

var nome = prompt("Qual é seu nome?"); // agora o texto que o usuário digitar vai ficar salvo como valor na variável "nome".

alert("Bom dia, " + nome); // exibe um alerta informando o texto "Bom dia" é o valor do texto digitado no prompt() que foi atribuido a "nome".

var numero = parseInt(prompt("Digite um número"));
var dobro = numero + numero;
alert("O dobro de " + numero + " é " + dobro); // o número se tornou uma string, pois o prompt() sempre terá seu tipo como "string". Por isso, temos que transformar o prompt() em um inteiro, usando parseInt().

