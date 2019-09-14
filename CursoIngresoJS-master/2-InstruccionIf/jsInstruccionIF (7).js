function mostrar()
{
//tomo la edad  

    var edad;
    edad = document.getElementById("edad").value;
    var estado;
    estado = document.getElementById("estadoCivil").value;

    if(edad < 18 && estado != "Soltero")
    {
        alert("Es muy pequeño para NO ser soltero.");
    }


}//FIN DE LA FUNCIÓN