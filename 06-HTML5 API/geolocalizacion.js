/*
	GEOLOCALIZACION

	Se usa el objeto gelocation que es propiedad del objeto navigator

*/

var miUbicacion = navigator.geolocation;

miUbicacion.getCurrentPosition(
	function(position){
		console.log(position.coords.latitude);
		console.log(position.coords.longitude);
	}

);