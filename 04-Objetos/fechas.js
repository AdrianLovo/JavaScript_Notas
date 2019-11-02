
//FECHAS

/*
	Se utiliza el objeto Date, debe instanciarse para su uso
*/


(function(){

	var fecha = new Date();
	console.log(fecha);

	//año, mes(0-11), dia, hora, minuto, seg
	var fechaNac = new Date(1992,11,20);
	console.log(fechaNac);

	//Metodos para trabajar con fechas
	// .getFullYear()	año
	// .getDay()	dia de la semana (0-6) (Domingo-Sabado)
	// .getDate()
	// .getMonth

	console.log(fechaNac.getFullYear());
	console.log(fechaNac.getDay());
	console.log(fechaNac.getDate());
	console.log(fechaNac.getMonth());


})();