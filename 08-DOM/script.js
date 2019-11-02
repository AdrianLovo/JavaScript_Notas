/*
	DOM. Es la estructura del arbol de elementos HTML que el navegador lee e interpreta
*/


//Acceder a elementos del Documento

var head = document.head;
var body = document.body;
var html = document.documentElement;
var domian = document.domian;
var url = document.URL;
var script = document.scripts;
var css = document.styleSheets
var charset = document.charset;
var doctype = document.doctype;


/*
ACCEDER A ELEMENTOS

	document.getElementById()
	document.getElementsByClassName()
	document.getElementsByTagName()
	document.getElementByName()
	document.querySelector()	//Optimo para subelementos (Al igual que con CSS)
*/

/*
ACCEDER A LOS ATRIBUTOS
	
	elemento.getAttribute('')
	elemento.attributes
*/

/*
ACCEDER A LOS NODOS DE TEXTO
	
	elemento.textContent 
	elemento.value = Texto que no esta en el HTMl si no que se establece (input, button, select, textarea)
*/


//CREAR ELEMENTOS
	

	var myDiv = document.createElement('div');	//crear elemento
	myDiv.textContent = "Hola Mundo";	//setear valor texto
	
	myDiv.id = "saludo";	//asignar id
	myDiv.setAttribute('id', 'saludo'); 	//asignar id

	myDiv.className = "saludo";		//asingar clase css

	//Colocar elemento en el DOM (Insertarlo en un padre)

	document.body.appendChild(myDiv);	//Insera al hijo al final y dentro del padre
	document.body.removeChild(myDiv);	//Elimina el elemento
	


	