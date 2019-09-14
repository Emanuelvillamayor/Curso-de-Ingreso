function mostrar()
{
	var acumulador = 0;
	var numero;
	
	/*while(contador < 5)
	{
		numero = prompt("Ingrese un número");
		numero = parseInt(numero);
		acumulador = acumulador + numero;
		contador = contador + 1;
	}*/

	for( var contador = 0; contador < 5; contador++)
	{
		numero = prompt("Ingrese un número");
		numero = parseInt(numero);
		acumulador = acumulador + numero;
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN