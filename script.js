document.addEventListener("DOMContentLoaded", function() {
    var contactoLink = document.getElementById("contacto-link");
    var numeroContacto = document.getElementById("numero-contacto");

    contactoLink.addEventListener("click", function(event) {
        event.preventDefault(); // Previene el comportamiento predeterminado del enlace
        numeroContacto.style.display = "inline"; // Muestra el número de contacto
    });

    // Agrega una función para redirigir a la página de productos
    var productosLink = document.getElementById("productos");
    productosLink.addEventListener("click", function(event) {
        event.preventDefault(); // Previene el comportamiento predeterminado del enlace
        window.location.href = "productos.html"; // Redirige a la página de productos
    });

    // Agrega una función para enviar un correo electrónico cuando se envía el formulario
    var formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", function(event) {
        event.preventDefault(); // Previene el comportamiento predeterminado del formulario

        // Obtener los datos del formulario
        var nombre = document.getElementById('nombre').value;
        var email = document.getElementById('email').value;
        var respuesta1 = document.getElementById('respuesta1').value;
        var respuesta2 = document.getElementById('respuesta2').value;

        // Construir el cuerpo del correo electrónico
        var cuerpoCorreo = "Nombre: " + nombre + "\n" +
                            "Email: " + email + "\n" +
                            "Respuesta 1: " + respuesta1 + "\n" +
                            "Respuesta 2: " + respuesta2;

        // Configurar los datos para enviar el correo electrónico
        var datosCorreo = {
            destinatario: "edua.norambuena@duocuc.cl",
            asunto: "Respuestas del cuestionario",
            cuerpo: cuerpoCorreo
        };

        // Enviar el correo electrónico usando la función de correo electrónico nativa del navegador
        window.open("mailto:" + datosCorreo.destinatario +
                    "?subject=" + encodeURIComponent(datosCorreo.asunto) +
                    "&body=" + encodeURIComponent(datosCorreo.cuerpo));
    });
});
