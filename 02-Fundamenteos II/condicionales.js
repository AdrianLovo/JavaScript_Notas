//condicionales

var ejemplo = 1;

if(ejemplo == 1){
	console.log("Condicion 1");
}else if(ejemplo == 2){
	console.log("Condicion 2");
}

//Operadores logicos && (Y logico) , || (o logico) y ! (negacion)

switch (ejemplo){
	case 1:
		console.log("Case 1");
		break;
	case 2:
		console.log("Case 2");
		break;
}

var ejemplo = true ? console.log("Es V") : console.log("Es F");


//LOOPS
for(var i =0; i < 5; i++){
	console.log("Valor for: " + i);
}

var array = ["lunes", "martes", "miercoles"];

var i = 0;
while(i < array.length){
	console.log("While: " + array[i]);
	i++;
}

for(i in array){
	console.log("Forin: " + array[i]);
}
