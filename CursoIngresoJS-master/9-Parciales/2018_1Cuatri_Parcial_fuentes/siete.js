function mostrar()
{
    var nota;
    var sexo;
    var acumulador = 0;
    var contador;
    var contadorVarones =0;
    var notaMasBaja;
    var notaMasBajaSexo;

    for( contador = 0; contador < 5; contador++)
	{
        nota = prompt("Ingrese la nota");
        nota = parseInt(nota);
        while ( isNaN(nota) || (nota < 0) || (nota > 10))
        {
           //eso no retorna nada; prompt("ERROR. Ingrese una nota de 0 a 10");
            nota = prompt("ERROR. Ingrese una nota de 0 a 10");
            nota = parseInt(nota);
        }
        acumulador = acumulador + nota;
        
        sexo = prompt("Ingrese el sexo M/F");
        while (sexo != "M" && sexo != "F")
        {
           sexo = prompt("Ingrese un sexo válido");
        }
        
        if (contador == 0)
        {
            notaMasBaja = nota;
            notaMasBajaSexo = sexo;
        }
        else
        {
            if (nota < notaMasBaja)
            {
                notaMasBaja = nota;
                notaMasBajaSexo = sexo;
            }
        }
        if (sexo == "M" && nota >= 6)
        {
            contadorVarones = contadorVarones + 1;
        }

    }
    
    alert("El promedio de las nota es " + acumulador / contador);
    alert("La nota mas baja es " + notaMasBaja + " y es de un " + notaMasBajaSexo)
    alert(contadorVarones + " varones se sacaron un 6 o más.");
}