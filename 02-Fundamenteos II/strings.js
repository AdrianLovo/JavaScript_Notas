
//MANEJO DE STRINGS
var string = "Hola Mundo";

console.log(string.length);	//longitud de cadenas

console.log(string.indexOf("a")); //buscar indice de un elemento en una cadena (-1 si no existe) 

console.log(string.toUpperCase()); //texto a mayusculas

console.log(string.toLowerCase()); //texto a minisculas


var newString = string.replace("Mundo","adrian"); //reemplazar cadenas dentro de otra
console.log(newString);

var subcadena = string.substring(0,4); //subcadenas
console.log(subcadena);

var palabra = string.slice(-5); //Realiza un substring en reversa si el numero es negativo y como substring si es positivo
console.log(palabra);

var palabra2 = "             HOLA        MUNDO  ";
console.log(palabra2.trim()); //elimina el primer espacios al inicio y al final


//