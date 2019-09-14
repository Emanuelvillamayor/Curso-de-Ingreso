function mostrar()
{
    var precio;
    var descuento;
    var precioFinal;
    precio = prompt("Ingrese el precio");
    parseInt(precio);
    descuento = prompt("Ingrese el porcentaje");
    parseInt(descuento)
    precioFinal = (precio - ( descuento / 100 * precio));
    document.getElementById("elPrecioFinal").value = precioFinal;
}
