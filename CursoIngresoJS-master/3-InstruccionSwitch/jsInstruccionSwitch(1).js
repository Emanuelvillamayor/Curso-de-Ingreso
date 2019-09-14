/*function mostrar()
{

    var mesDelAño; 
    mesDelAño = document.getElementById('mes').value;
    if(mesDelAño === "Enero")
    {
        alert("que comiences bien el año!!!.");
    }
    if(mesDelAño === "Marzo")
    {
        alert("a clases!!!.");
    }
    if(mesDelAño === "Julio")
    {
        alert("se vienen las vacaciones!!!.");
    }
    if(mesDelAño === "Diciembre")
    {
        alert("Felices fiestas!!!.");
    }
  
}//FIN DE LA FUNCIÓN
*/
function mostrar()
{

    var mesDelAño; 
    mesDelAño = document.getElementById('mes').value;
    switch(mesDelAño)
    {
        case "Enero":
            alert("que comiences bien el año!!!.");
            break;
        
        case "Marzo":
            alert("a clases!!!.");
            break;
        
        case "Julio":
            alert("se vienen las vacaciones!!!.");
            break;
        
        case "Diciembre":
            alert("Felices fiestas!!!.");
            break;
    }

}//FIN DE LA FUNCIÓN