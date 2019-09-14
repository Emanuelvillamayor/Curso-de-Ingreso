/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 





function sumar()
{	
	var numeroUno;
    numeroUno = document.getElementById("numeroUno").value;
    var numeroDos;
    numeroDos = document.getElementById("numeroDos").value;
    var resultado;
    resultado = parseInt(numeroUno) + parseInt(numeroDos);
    alert("La suma es " + resultado);
}

function restar()
{
    var numeroUno;
    numeroUno = document.getElementById("numeroUno").value;
    var numeroDos;
    numeroDos = document.getElementById("numeroDos").value;
    var resultado;
    resultado = parseInt(numeroUno) - parseInt(numeroDos);
    alert("La resta es " + resultado);
	
}

function multiplicar()
{ 
    var numeroUno;
    numeroUno = document.getElementById("numeroUno").value;
    var numeroDos;
    numeroDos = document.getElementById("numeroDos").value;
    var resultado;
    resultado = parseInt(numeroUno) * parseInt(numeroDos);
    alert("La multiplicación es " + resultado);
}

function dividir()
{
    var numeroUno;
    numeroUno = document.getElementById("numeroUno").value;
    var numeroDos;
    numeroDos = document.getElementById("numeroDos").value;
    var resultado;
    resultado = parseInt(numeroUno) / parseInt(numeroDos);
    alert("La división es " + resultado);
	
}

