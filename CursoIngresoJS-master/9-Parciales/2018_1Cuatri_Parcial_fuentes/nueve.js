function mostrar()
{
var marca;
var peso;
var temperatura;
var tempPar = 0;
var marcaPesada;
var productoMenosCero = 0;
var pesoPromedio;
var sumaPeso = 0;
var pesoMax;
var pesoMin;
var respuesta;
var contador = 0;

    do
    {
        marca = prompt("Ingrese la marca del producto.");
        peso = prompt("Ingrese el peso.");
        peso = parseInt(peso);
        while (isNaN(peso) || peso < 1 || peso > 100)
        {
            peso = prompt("Error. Ingrese un peso entre 1 y 100.");
            peso = parseInt(peso);
        }
        // pido ingreso temperatura
        temperatura = prompt("Ingrese la temperatura de almacenamiento.");
        temperatura = parseInt(temperatura);
        // valido temperatura
        while (isNaN(temperatura) || temperatura < -30 || temperatura > 30)
        {
            temperatura = prompt("Error. Ingrese una temperatura entre -30 y 30.");
            temperatura = parseInt(temperatura);
        }
        respuesta = prompt("Desea agregar otro poducto. S/N");


        if (temperatura % 2 == 0) //considero el 0 como par
        {
            tempPar++;
        }
        if (contador == 0)
        {
            marcaPesada = marca;
            pesoMax = peso;
            pesoMin = peso;
        }
        else if (peso > pesoMax)
        {
            pesoMax = peso;
            marcaPesada = marca;
        }
        else if (peso < pesoMin)
        {
            pesoMin = peso;
        }
        if (temperatura < 0)
        {
            productoMenosCero++;
        }    
    } while (respuesta == "S");

    sumaPeso = peso + sumaPeso;
    contador++;
    pesoPromedio = sumaPeso / contador;

    document.write("La cantidad de temperaturas pares es: " + tempPar + "<br>");
    document.write("El producto más pesado es " + marcaPesada + "<br>"); 
    document.write("La cantidad de productos a -0º es " + productoMenosCero + "<br>");
    document.write("El promedio de peso es " + pesoPromedio + "<br>"); 
    document.write("El peso máximo es " + pesoMax + " y el peso mínimo es " + pesoMin + "<br>");
}

