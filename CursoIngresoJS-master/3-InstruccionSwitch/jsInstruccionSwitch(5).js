/*function mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;
laHora = parseInt(laHora);
if ((laHora >= 7) && (laHora <= 11))
{
    alert("Es de mañana.");
}

//alert (laHora);

}//FIN DE LA FUNCIÓN
*/
function mostrar()
{
var laHora = document.getElementById('hora').value;
laHora = parseInt(laHora);
switch(laHora)
    {
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
        alert("Es de mañana");
    }
}