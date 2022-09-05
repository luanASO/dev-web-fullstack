// Datas são objetos, que podemos usar propriedades e métodos a partir dos seus valores.

var d = new Date(); // instacia a função "Date" é faz ela se tornar um objeto. Essa função normalmente retorna a data atual, (dia da semana, mês, dia do mês, horas, minutos, segundos, fuso horário).
console.log(d);

//var dataEspecifica = new Date(year, month, day, hours, minutes, seconds, milliseconds); // para atribuir data especifica segue-se este padrão como argumentos.

// Quando especificar o mês, lembre-se que essas informações é guardada em um "array" onde Janeiro é a indice "0" é Dezembro é "11".

var minhaData = new Date(2022, 8, 4, 14, 27, 10, 0); // pode ocultar, alguns valores como "ANO, MES, ETC.."

console.log(minhaData);

var minhaData = new Date(1000); // ao passar só um valor númerico, como "ano", ele passa a enteder isto como "milisegundos". Então ao passar 1000, ele entende como 1 "segundos".

var minhaData = new Date(1000 * 60 * 60 * 24); // pode-se definir uma data utilizando somente os milisegundos. Neste caso é uma soma.

console.log(minhaData);

var minhaData = new Date("sep 05 2017 23:25"); // uma outra maneira de modificar os valores das "Datas" é utilizando uma "string" como argumento, é dentro passar os valores (os valores passados tem que respeitar as regras americanas).

console.log(minhaData);


