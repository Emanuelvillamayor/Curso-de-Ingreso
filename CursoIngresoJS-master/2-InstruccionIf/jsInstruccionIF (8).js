function mostrar()
{
//tomo la edad  

    var edad;
    edad = document.getElementById("edad").value;
    var estado;
    estado = document.getElementById("estadoCivil").value;

    if(estado == "Soltero" && edad >= 18)
    {
        alert("Es soltero y no es menor.");
    }




}//FIN DE LA FUNCIÓN