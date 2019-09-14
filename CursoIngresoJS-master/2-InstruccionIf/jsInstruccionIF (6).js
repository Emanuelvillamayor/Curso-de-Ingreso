function mostrar()
{
//tomo la edad  

    var edad;
    edad = document.getElementById("edad").value;
    if((edad >= 13) && (edad <= 17))
    {
        alert("La persona es adolescente.");
    }
    else if(edad >= 18)
    {
        alert("La persona es mayor de edad.");
    }
    else if((edad >= 1) && (edad <= 12))
    {
        alert("La persona es niño.");
    }

}//FIN DE LA FUNCIÓN