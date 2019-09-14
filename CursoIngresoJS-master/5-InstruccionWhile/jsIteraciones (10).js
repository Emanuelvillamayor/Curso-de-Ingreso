function mostrar()
{

/*Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos).*/


var respuesta;
var sumaNegativos = 0;
var sumaPositivos = 0;
var cantidadPositivos = 0;
var cantidadNegativos = 0;
var cantidadImpares = 0;
var cantidadCeros = 0;
var cantidadPares = 0;
var maximo;
var minimo;
var numero;
var esPrimeraIteracion;

do
{
	//pido un numero
	numero = prompt("Ingrese un numero");
	numero = parseInt(numero);
	if (numero != 0)
	{
		if (numero > 0) // pregunto por positivos
		{
			sumaPositivos = sumaPositivos + numero;
			cantidadPositivos = cantidadPositivos + 1;
		}
		else //son negativos
		{
			sumaNegativos = sumaNegativos + numero;
			cantidadNegativos++;
		}
		if (numero % 2 == 0) // es par
		{
			cantidadPares++;
		}
		else // si no es par, es impar
		{
			cantidadImpares = cantidadImpares + 1;
		}	
	}
	else
	{
		cantidadCeros++;
	}

	if (esPrimeraIteracion)
	{
		maximo = numero;
		minimo = numero;
		esPrimeraIteracion = false;
	}

	if (numero > minimo)
	{
		minimo = numero;
	}
	respuesta = confirm("¿Desea continuar?");

} while(respuesta);
	


}

/*var contador=0;
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		
	
	}*/




//FIN DE LA FUNCIÓN