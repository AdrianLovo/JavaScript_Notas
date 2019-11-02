/*
	STRICT MODE
	Se activa añadiendo el string "use strict" en la primera linea del scope
	se recomienda que sea dentro de una funcion
*/




//OBJETOS

var miMascota = {
	tipo: "perro",	//objeto.propiedad
	nombre: "Pluto",
	color: "negro",

	ladrar: function(){		//objeto.metodo()
		return "Gua, Gua";
	},

	llamar: function(){
		return this.nombre + "Regresa";
	}
};





/*THIS DENTRO DE UN EVENT HANDLER
	
	this referencia al elemento HTML que disparo el evento
*/
var boton = document.getElementById("boton");
boton.addEventListener('click', 
	function(){
		alert(this.textContent);
	}
);


/*
	THIS DENTRO DE UN CONSTRUCTOR

*/
function Persona(nombrePersona, edadPersona){
	this.nombre = nombrePersona;
	this.edad = edadPersona;
}

var amigo = new Persona("Adrian" , 26);
console.log(amigo);