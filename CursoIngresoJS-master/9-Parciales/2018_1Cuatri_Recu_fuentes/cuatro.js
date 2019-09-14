function mostrar()
{
    var numero1;
    var numero2;
    var resultado;

    numero1 = prompt("Escribi un número");
    numero2 = prompt("Escribi otro número");
    if(numero1 == numero2)
    {
        alert(numero1 + numero2);
    }
    else
    {   
        numero1 = parseInt(numero1)
        numero2 = parseInt(numero2)
        
        if(numero1 > numero2)
        {
            resultado = (numero1) / (numero2);
            alert(resultado);
        }
        else(numero1 < numero2)
        {
            resultado = (numero1) + (numero2);
            alert(resultado);         
            if(resultado < 50)
            {
            alert("La suma es "+ resultado + " y es menor a 50.")   
            }
        }
    }
       

}
