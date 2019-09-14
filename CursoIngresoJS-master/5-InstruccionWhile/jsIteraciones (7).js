function mostrar()
{
	/*
	var numero;
	var contador=0;
	var acumulador=0;
	var respuesta='S';
	
	while(respuesta == "S")
	{
		numero = prompt("Ingrese un número");
		numero = parseInt(numero);
		acumulador = acumulador + numero;

		contador = contador + 1;
		respuesta = prompt("Presione N si desea dejar de escribir");
	}
	*/

	var acumulador = 0;
	var numero;
	var respuesta;
	var contador=0;
	
		do	
		{
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		respuesta = prompt("Desea seguir? S/N");
		acumulador = acumulador + numero;
		contador++;

		}while(respuesta == "S");


		document.getElementById('suma').value = acumulador;
		document.getElementById('promedio').value = acumulador/(contador);
		


	/*do
	{
		numero = prompt("Ingrese un número;");
		if(numero != null)
		numero = parseInt(numero);
		acumulador = acumulador + numero;
		contador = contador + 1;
	}	while(numero != null);
	*/



}//FIN DE LA FUNCIÓN

/*do
{
	numero = prompt("Ingrese un número;");
	numero = parseInt(numero);
	acumulador = acumulador + numero;
	contador = contador + 1;
	respuesta = prompt("Presione S si desea seguir")
}
while(respuesta == "S")


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;*/