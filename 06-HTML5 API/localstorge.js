/*
	LocalStorage (Base de datos local)

	Se alamacena la informacion sin importar que se cierre el navegador o se regrese a otra pagina.

*/

var myStorage = localStorage;
var comment = document.getElementById('comentario');




comment.addEventListener('change', function(){
	setInterval(function(){
		myStorage.comment = comment.value;		
	}, 2000);
});

comment.value = myStorage.comment;


//Limpiear localstorage
// localstorage.clear()
// sessionStorage funciona de la misma manera pero por session 
// Se puede definir propiedades al objeto localstorage con el metodo = localStorage('clave', valor)