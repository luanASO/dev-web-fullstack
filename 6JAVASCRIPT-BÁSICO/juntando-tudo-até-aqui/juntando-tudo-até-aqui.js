var nomes =  ["Igor", "José", "Marta"];

var notasA = [7.8, 6.0, 8.0];
var notasB = [7.0, 7.0, 9.0];

var media = function(n1, n2) {
    return (n1 + n2) / 2;
}

var passou = function(med) {
    if (med > 7) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}


for(var i in nomes) {
    var m = media(notasA[i], notasB[i]);
    console.log(
        nomes[i] +
        " - "  
        + notasA[i] +
        " - "
        + notasB[i] +
        " - " 
        + m +
        " - "
        + passou(m)
        );
    
}