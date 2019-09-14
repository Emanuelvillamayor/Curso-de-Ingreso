function mostrar()
{
    var num1;
    var num2;
    var resultado;
    
    num1 = prompt("Ingresá un numero");
    num2 = prompt("Ingresá otro número");
    if(num1 == num2)
    {
        resultado = (num1 + num2);
        alert(resultado);
    }
    else
    {
        parseInt(num1);
        parseInt(num2);
        if(num1 > num2)
        {
            resultado = (parseInt(num1) - parseInt(num2));
            alert(resultado);
        }
        else
        {
            resultado = (parseInt(num1) + parseInt(num2));
            alert(resultado);
        }
     
    }
    if(resultado > 10)
    {
        alert("La suma es "+ resultado + " y superó el 10.")
    }    

}
