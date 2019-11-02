/*
	EVENTOS DE MOUSE

	-mousedown: Cuando se pulsa un boton (antes de soltarlo)
	-mouseup: Cuando se suelta un boton
	-dblclick: dos veces el boton izquierdo
	-mousemove: se mueve el raton
	-mouseenter: cuando el mouse entre en el area del evento
	-mouseleave: cuando el mouse sale del area
	
*/


//PROGRAMA DE DIBUJO

(function(){

	var dibujar = function(event){

		if(event.which == 1){
			var punto = document.createElement('div');
			punto.classList.add('punto');
			punto.style.left = (event.pageX - 10) +'px';
			punto.style.top = (event.pageY - 10) +'px';
			document.body.appendChild(punto);	
		}		
	}

	window.addEventListener('mousemove', dibujar);


})();