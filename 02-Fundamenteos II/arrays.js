//ARRAYAS

var ejemplo = [1, 2 ,3, 4, "HOLA"]; //definicion de array

console.log(ejemplo.length); //longitud de array

console.log(ejemplo[4]); //obtener valores de array

ejemplo.push("Elemento nuevo"); //agregar elemento al final

ejemplo.unshift("Elementoalinicio");

var eliminadoInicio = ejemplo.shift(); //eliminar elemento al inicio el cual es retornado

var eliminadoFin = ejemplo.pop(); //eliminar elemento al final el cual es retornado

console.log(ejemplo.indexOf(1)); //devuelve el indice del elemento buscado

console.log(ejemplo.join(" ")); //convertir array en cadena

var nombre = "adrian";
var arrayNombre = nombre.split(""); //convierte en un array una cadena dependiendo del caracter indicado
console.log(arrayNombre[0]);

ejemplo.splice(2,1);  //elimina a partir del indice primer valor la cantidad del segundo parametro. Retorna los elementos eliminados




