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
});
