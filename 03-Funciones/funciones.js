//FUNCIONES

function miFuncion(){	//declaracion
	console.log("Hola Mundo");
}
miFuncion();	//llamada


function saludo(nombre){	//declaracion con parametro
	console.log("Hola " + nombre);
}
saludo("Adrian");	//Argumento en la llamada de funcion


function sumar(){	//
	var suma = 0;
	var i = 0;
	for(i in arguments){	//recorrer array de argumentos enviados a la funcion
		suma = suma + arguments[i];
	}
	return suma;
}

console.log(sumar(1,2,3,4,5));	//en caso de no estar definida la cantidad de parametros se envia n como "arguments"


/*Tipos de funciones
	Por su nombre: 
		Funciones nombradas
		Funciones anonimas

	Por su construccion
		Por declaracion
		Por expresion (literales)
*/

function sumar(a,b){	//nombrada
	return a+b;
}

var sumarAnonima = function (a,b){	//anonima
	return a+b;
};




