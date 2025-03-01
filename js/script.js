document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript cargado correctamente."); // 🔍 Para verificar si se carga el script

    /* 🔹 Navbar cambia de color al hacer scroll */
    window.addEventListener("scroll", function () {
        let navbar = document.querySelector(".navbar");
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        }
    });

    /* 🔹 Botón flotante de WhatsApp */
    let whatsappButton = document.querySelector(".whatsapp-float img");
    let whatsappOptions = document.querySelector("#whatsapp-options");

    if (whatsappButton && whatsappOptions) {
        whatsappButton.addEventListener("click", function (event) {
            event.stopPropagation(); // Evita que se cierre al hacer clic en el botón
            whatsappOptions.style.display = whatsappOptions.style.display === "block" ? "none" : "block";
        });

        // Cerrar opciones de WhatsApp si se hace clic fuera
        document.addEventListener("click", function (event) {
            if (!whatsappButton.contains(event.target) && !whatsappOptions.contains(event.target)) {
                whatsappOptions.style.display = "none";
            }
        });
    }

    /* 🔹 Menú hamburguesa: Cerrar al hacer clic en un link */
    let menuItems = document.querySelectorAll(".navbar-nav .nav-link");
    let menuToggler = document.querySelector(".navbar-toggler");
    let menuCollapse = document.querySelector(".navbar-collapse");

    if (menuItems.length > 0 && menuToggler && menuCollapse) {
        menuItems.forEach((item) => {
            item.addEventListener("click", function () {
                if (menuCollapse.classList.contains("show")) {
                    menuToggler.click(); // Cierra el menú hamburguesa
                }
            });
        });
    }
});
document.getElementById("contactoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita la recarga de la página

    let formData = new FormData(this);

    fetch(this.action, {
        method: this.method,
        body: formData,
        headers: { "Accept": "application/json" }
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            document.getElementById("mensajeConfirmacion").classList.add("visible");
            document.getElementById("contactoForm").reset(); // Limpia el formulario después de enviarlo
        } else {
            alert("❌ Error al enviar el mensaje. Intenta nuevamente.");
        }
    })
    .catch(error => console.error("Error en el envío:", error));
});