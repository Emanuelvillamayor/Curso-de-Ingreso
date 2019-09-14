/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cant;
    var marca;
    var precio;
    var cant = document.getElementById("Cantidad").value;
    var marca = document.getElementById("Marca").value;
    var precio = 35
    
    var desc50 = precio - (precio * 50 / 100);
    var desc40 = precio - (precio * 40 / 100);
    var desc30 = precio - (precio * 30 / 100);
    var desc25 = precio - (precio * 25 / 100);
    var desc20 = precio - (precio * 20 / 100);
    var desc15 = precio - (precio * 15 / 100);
    var desc10 = precio - (precio * 10 / 100);
    var desc5 = precio - (precio * 5 / 100);
     
    if(cant >= 6)
    {
        document.getElementById("precioDescuento").value = (cant * desc50);
    }
    else if(cant == 5 && marca == "ArgentinaLuz")
    {
        document.getElementById("precioDescuento").value = (cant * desc40);
    }
    else if(cant == 5)
    {
        document.getElementById("precioDescuento").value = (cant * desc30);
    }
    else if(cant == 4 && (marca == "ArgentinaLuz" || marca =="FelipeLamparas"))
    {
        document.getElementById("precioDescuento").value = (cant * desc25);
    }
    else if(cant == 4)
    {
        document.getElementById("precioDescuento").value = (cant * desc20);
    }
    else if(cant == 3 && marca == "ArgentinaLuz")
    {
        document.getElementById("precioDescuento").value = (cant * desc15);
    }
    else if(cant == 3 && marca == "FelipeLamparas")
    {
        document.getElementById("precioDescuento").value = (cant * desc10);
    }
    else if(cant == 3)
    {
        document.getElementById("precioDescuento").value = (cant * desc5);
    }
    else
    {
        document.getElementById("precioDescuento").value = (cant * precio);
    }

}
