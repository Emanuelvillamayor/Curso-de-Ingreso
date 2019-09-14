function mostrar()
{
var contador = 0;
var numMax;
var numMin;
var numero;
var respuesta;

	numero = prompt("Ingrese un numero");
	numero = parseInt(numero);

	numMin = numero;
	numMax = numero;
	
	respuesta = prompt("Desea continuar S/N");
	
	while (respuesta != "N")
	{
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

			if (numero < numMin)
			{	
			numMin = numero;
			}
			if (numero > numMax)
			{
			numMax = numero;
			}
	}

	document.getElementById("maximo").value = numMax;
	document.getElementById("minimo").value = numMin;

}













//FIN DE LA FUNCIÓN


/*var contador=0;
	// declarar variables
	
	var respuesta='si';

	while(respuesta!='no')
	{
		
	
	}*/
	