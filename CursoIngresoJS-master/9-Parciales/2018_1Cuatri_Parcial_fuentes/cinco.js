function mostrar()
{
    // 1) Declarar variables
    var planeta;
    var mensaje;

    // 2) Tomar datos / Inicializar
    planeta = prompt("Ingrese un planeta.");

    // 3) Procesar datos
    switch (planeta) {
        case "mercurio":
        case "venus":
            mensaje = "Acá hace mas calor.";
            break;
        case "tierra":
            mensaje = "Acá vivimos"
            break;
        case "júpiter":
        case "saturno":
        case "urano":
        case "neptuno":
        case "plutón":
            mensaje = "Acá hace mas frío.";
            break;
        default:
            mensaje = "No es un planeta válido.";
        }
    alert(mensaje);
}
