/*
	PROPAGACION DE EVENTOS
	Significa que cuando un evento ocurre se propaga desde el hijo hasta el padre "document"
*/

(function(){

	var container = document.getElementById("container");
	var boton = document.getElementById("boton");

	boton.addEventListener('click', function(event){
		console.log("Click en boton");
		event.stopPropagation();	//detiene la propagacion del evento a los padres
	});
	container.addEventListener('click', function(event){
		console.log("Click en container");
	});

})();

(function(){
	var enlace = document.getElementById("enlace");

	enlace.addEventListener('click', function(event){
		console.log("Enlace a Google");
		event.preventDefault();	//se cancela la redireccion a google
	});

})();