// POO
var miObjeto = {

	//propiedades
	propiedad1 : "valor1",
	propiedad2 : "valor2",
	propiedad3 : "valor3",

	//metodos
	propiedad4: function(){
		console.log("Hola");
	}
};


//Constrcutor
function Pais(nombre, capital){
	this.nombre = nombre;		//PROPIEDADES PUBLICAS
	this.capital = capital;

	var propiedadPrivada = "Propiedad PRIVADA";		//PROPIEDAD PRIVADA ACCESESIBLE SOLO POR EL OBJETO

	var _this = this;	//Acceder al objeto mismo para utilizar las propiedades en metodos privados
	
	// this.saludo = function(){		//no es muy optimo y se define el proto el metodo
	// 	console.log("Bienvenido a " + nombre);
	// };


	function metodoPrivado(){
		console.log("HOLA MUNDO " + _this.nombre);
	}

	this.metodoPublico = function(){
		metodoPrivado();
	};

	//METODOS GET Y SET
	this.getPrivada = function(){
		return propiedadPrivada;
	};

	this.setPrivada = function(valorSeteado){
		propiedadPrivada = valorSeteado;		
	};

}

//Definicion de metodo el proto del objeto para mejorar rendimiento
Pais.prototype.saludo = function(){
	console.log("Bienvenido a " + this.nombre);
};


//instancia
var peru = new Pais("Peru", "Lima");
var mexico = new Pais("Mexico", "Ciudad de mexico");
var Colombia = new Pais("Colombia", "Bogota");


