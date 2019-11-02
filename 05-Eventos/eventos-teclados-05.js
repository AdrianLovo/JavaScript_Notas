/*
	EVENTOS DE TECLADO

	-keydown: cuando se pulsa una tecla antes de soltarla
	-keydown: cuando se pulsa y se suelta la tecla
	-keypress: cuando se pulsa una tecla que imprime un caracter
*/


//Saber la tecla pulsada
(function(){
	
	addEventListener('keyup', function(event){
		switch(event.which){
			case 65:
				console.log("Presionaste la letra a");
				break;
			case 66:
				console.log("Presionaste la letra a");
				break;
		}			
	});

})();

//Atajos de teclados de dos teclas (ctrl+y)
(function(){

	addEventListener('keydown', function(event){
		if(event.ctrlKey === true && event.which === 89){
			console.log("ATAJO");
		}			
	});

})();

//Crear Keylogger
(function(){

	pasword = document.getElementById("pasword");
	var keylog;

	pasword.addEventListener('keyup', function(event){
		keylog = this.value;
		console.log(keylog);
	});

})();