
var i = 0;
for(i; i <10; i++){
	console.log(i);
}

var semana = ['domingo', 'lunes', 'martes', 'miercoles'];
for(var dia in semana){
	console.log(semana[dia]);
}


var boton = document.getElementById('boton');
boton.addEventListener('click', function(){
	var _this = this;
	var contador = 0;
	(function(){
		_this.textContent = 'Hiciste Click ' + contador + ' veces';
		contador++;
	})();
});