/*
	CANVAS

	Permite dibujar sobre un dibujo, los elementos de canvas no forman parte del DOM

*/


(function(){
	var canvas = document.getElementById('canvas');	//obtenemos el elemento canvas
	var c = canvas.getContext('2d');	//se obtiene el contexto donde se dibujara

	var h = canvas.width;
	var w = canvas.height;

	/*METODS
		.strock();	dibuja una linea
		.fill();	dibuja un relleno
		.beginPath();	comienza una ruta
		.clisePath(); cerrar una ruta
		.moveTo(); moverse a un punto especifico

	FORMAS
		.lineTo() define una linea que culmiuna en el punto determinado

	*/

	c.moveTo(0, h*0.5);
	c.lineTo(w, h*0.5);
	c.moveTo(w * 0.5, 0);
	c.lineTo(w * 0.5, h);
	c.stroke();

	



})();

