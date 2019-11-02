/*
	EVENTOS: Toda interaccion que ocurre en la pagina web

	-Click
	-Reproduccir videos
	-Scroll
	-Carga completa de la pagina

	Los eventos son capturados por el navegador y con javascript dar funcionalidad tras cualquiera de estos
	Todo evento esta asociado a un elemento HTML, sin embargo podria tambien asociar al objeto global si es que no se asocia a ningun elemento	

	Sintaxis = elemento.addEventListener('evento', eventHandler); 
	eventHandler: es una funcion.

*/


/*addEventListener('click', miAlerta);	//en caso de no agregar objeto se coloca "window" por defecto

function miAlerta(){
	console.log("HOLA MUNDO");
}*/


//Se auto ejecuta y encierra las variable sen un "scope"
(function(){

	//Boton muestra hora
	var btn_hora = document.getElementById("btn_hora");
	
	btn_hora.addEventListener('click', function(){
		fecha = new Date();
		hora = fecha.getHours();
		minutos = fecha.getMinutes();
		segundos = fecha.getSeconds();
		alert("La hora actual es " + hora + ":" + minutos +":"+ segundos);
	});

})();



//Obtener el tamaño de la ventana
(function(){
		
	addEventListener('resize', function(){
		var w = window.innerWidth,
			h = window.innerHeight;
		console.log("La ventana mide " + w + "x"+h);
	});

})();





