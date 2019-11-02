/*
	OBJETO EVENTO: Contiene toda la informacion relativa a un evento especifico

	Para acceder al objeto basta con pasar un parametro con cualquier nombre el cual se acostumbra llamar "event"

*/

(function(){

	btn_hora = document.getElementById("btn_hora");

	btn_hora.addEventListener('click', function(event){
		console.log(event);
		console.log(event.target);
		console.log(this);
	});

})();


//Bloquear click derecho de la pagina
(function(){

	window.addEventListener('mousedown',function(event){
		console.log(event.which);	//devuelve el codigo del boton de raton pulsado
		if(event.which == 3){
			alert("Mensaje de alerta");
		}
		event.preventDefault();	//evita que se realize la tarea predefinida para el evento en cuestion
	});

})();