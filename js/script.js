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


document.addEventListener("DOMContentLoaded", function () {
    let botonUbicaciones = document.querySelector(".desplegar-ubicaciones");
    let listaUbicaciones = document.querySelector(".ubicaciones-lista");

    if (!botonUbicaciones || !listaUbicaciones) {
        console.error("❌ No se encontró el botón o la lista de ubicaciones.");
        return;
    }

    botonUbicaciones.addEventListener("click", function () {
        listaUbicaciones.classList.toggle("visible"); // 🔄 Alternar clase visible
        console.log("📌 Estado de la lista:", listaUbicaciones.classList.contains("visible") ? "ABIERTA" : "CERRADA");
    });

    // Cierra la lista si se hace clic fuera de ella
    document.addEventListener("click", function (event) {
        if (!listaUbicaciones.contains(event.target) && !botonUbicaciones.contains(event.target)) {
            listaUbicaciones.classList.remove("visible");
            console.log("🔴 Lista cerrada al hacer clic fuera.");
        }
    });
});

