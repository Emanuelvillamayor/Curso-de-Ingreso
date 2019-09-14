function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var resultado;
	resultado =	Math.floor(Math.random() * (10 - 1 + 1)) + 1;

	if((resultado == 9) || (resultado == 10))
	{
		alert("Excelente te sacaste un " + resultado + ".");
	}
	if((resultado >= 4) && (resultado <= 8))
	{
		alert("APROBÓ CON " + resultado + ".");
	}
	if(resultado < 4)
	{
		alert("Te sacaste un " + resultado + ". Vamos, la próxima se puede.")
	}

}//FIN DE LA FUNCIÓN