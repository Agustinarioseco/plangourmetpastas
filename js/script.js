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
    // ❗ Verificar si estamos en "index.html" o en la raíz "/"
    if (!window.location.pathname.includes("index.html") && window.location.pathname !== "/") {
        console.log("🟡 Popup desactivado en esta página.");
        return; // Detiene la ejecución si no estamos en index.html
    }

    let hoy = new Date();
    let dia = hoy.getDate();
    let popup = document.getElementById("popupFechas");
    let mensajePopup = document.getElementById("mensajeFechas");

    // Definir los mensajes según el día
    let mensajesFechas = {
        8: "🥟 ¡Hoy es el Día de los Sorrentinos! 20% de descuento en sorrentinos.",
        11: "🍝 ¡Día de los Fideos! Celebramos con los colores de Italia.",
        20: "🟡 ¡Día de los Raviolones! Aprovechá nuestras ofertas.",
        29: "🟠 ¡Día de la Lasagna! Disfrutá el mejor sabor casero."
    };

    let popUpMostrado = false; // Para evitar que se muestre dos veces

    // Función para mostrar el Pop-Up con animación
    function mostrarPopup() {
        if (!popUpMostrado && mensajesFechas[dia]) {
            mensajePopup.innerText = mensajesFechas[dia];
            popup.style.display = "flex"; // Primero, se muestra
            setTimeout(() => {
                popup.classList.add("mostrar"); // Luego, activa la animación de fade-in suave
            }, 50); // 🔥 Pequeño retraso para que la animación funcione bien
            popUpMostrado = true; // Evita que vuelva a mostrarse
        }
    }

    // Opción 1: Mostrar el Pop-Up después de 5 segundos
    setTimeout(mostrarPopup, 5000);

    // Opción 2: Mostrar el Pop-Up cuando el usuario scrollea
    window.addEventListener("scroll", function () {
        if (!popUpMostrado) {
            mostrarPopup();
        }
    });
});

// Función para cerrar el Pop-Up con fade-out más lento
function cerrarPopup() {
    let popup = document.getElementById("popupFechas");
    popup.classList.add("ocultar"); // Agrega la animación de salida

    // Espera que termine la animación antes de ocultarlo
    setTimeout(() => {
        popup.style.display = "none";
        popup.classList.remove("mostrar", "ocultar"); // Elimina las clases para reutilizar la animación
    }, 1500); // 🔥 1.5 segundos para hacer el fade-out más lento
}

