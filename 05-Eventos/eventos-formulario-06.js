/*
	EVENTOS DE FORMULARIO

	-focus: cuando se activa un campo
	-blur: cuando sale de un campo
	-change: cuando se cambia el valor de un select input o textarea
	-submit: cuando se envia el formulario (Se asocia al formulario completo no al input submit)

*/


//Detectar la opcion seleccionada
(function(){

	var pais = document.getElementById("pais");

	pais.addEventListener('change', function(event){
		console.log("Pais es " + this.value);
	});

})();


//Detectar checkbox marcado
(function(){

	var check = document.getElementById("check");

	check.addEventListener('change', function(event){
		if(event.target.checked){
			alert("Suscrito");
		}else{
			alert("");
		}
	});

})();