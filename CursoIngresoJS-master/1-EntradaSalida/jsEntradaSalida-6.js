/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var numeroUno;
    numeroUno = document.getElementById("numeroUno").value;
    var numeroDos;
    numeroDos = document.getElementById("numeroDos").value;
    var resultado;
    resultado = parseInt(numeroUno)+parseInt(numeroDos);
    alert("La suma es " + resultado);
}
    /* 
        parsear / convertir de string (texto)
        a entero (a valor numerico):
        función parseInt("texto"/variable);

        entero
        numero entero   parseInt

        float
        numero decimal  parseFloat
    */
