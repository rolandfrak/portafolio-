// js/js-blog.js
document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================================================
    // 1. SELECTORES Y CONFIGURACIÓN DE ELEMENTOS
    // ==========================================================================
    const sidebarBtn = document.getElementById("sidebar-toggle");
    const sidebarMenu = document.getElementById("sidebar-menu");
    const menuLinks = sidebarMenu ? sidebarMenu.querySelectorAll("a") : [];
    const seccionesBlog = document.querySelectorAll(".servidores-section-wrapper");

    // ==========================================================================
    // 2. ESTADO INICIAL (Mostrar Servidores por defecto, ocultar el resto)
    // ==========================================================================
    const iniciarSeccionPredeterminada = () => {
        const seccionInicial = document.getElementById("contenedor-pc");
        if (seccionInicial) {
            seccionInicial.classList.add("active");
        }
    };
    iniciarSeccionPredeterminada();

    // ==========================================================================
    // 3. CONTROL MECÁNICO DEL SIDEBAR (Abrir / Cerrar)
    // ==========================================================================
    if (sidebarBtn && sidebarMenu) {
        const cerrarSidebar = () => {
            sidebarMenu.classList.remove("open");
            sidebarBtn.style.left = "0px";
            sidebarBtn.innerText = "🧰";
        };

        sidebarBtn.addEventListener("click", (event) => {
            event.stopPropagation(); 
            sidebarMenu.classList.toggle("open");
            
            if (sidebarMenu.classList.contains("open")) {
                sidebarBtn.style.left = "250px";
                sidebarBtn.innerText = "❮";
            } else {
                cerrarSidebar();
            }
        });

        document.addEventListener("click", (event) => {
            if (sidebarMenu.classList.contains("open") && 
                !sidebarMenu.contains(event.target) && 
                !sidebarBtn.contains(event.target)) {
                cerrarSidebar();
            }
        });
    }

    // ==========================================================================
    // 4. SISTEMA DE CONMUTACIÓN DE SECCIONES (Tab Switcher con Scroll Suave)
    // ==========================================================================
    menuLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href");

            // Validamos que el enlace apunte a un ID interno del documento
            if (targetId && targetId.startsWith("#")) {
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    // 1. Detenemos el salto brusco del navegador
                    event.preventDefault(); 

                    // 2. Apagamos todas las secciones activas (las oculta el CSS)
                    seccionesBlog.forEach(seccion => {
                        seccion.classList.remove("active");
                    });

                    // 3. Encendemos la sección solicitada (la muestra el CSS)
                    targetSection.classList.add("active");

                    // 4. Llevamos la pantalla suavemente hacia el contenido seleccionado
                    targetSection.scrollIntoView({ 
                        behavior: "smooth", 
                        block: "start" 
                    });

                    // 5. Cerramos el menú lateral automáticamente (Optimización móvil)
                    if (sidebarMenu && sidebarMenu.classList.contains("open")) {
                        sidebarMenu.classList.remove("open");
                        if (sidebarBtn) {
                            sidebarBtn.style.left = "0px";
                            sidebarBtn.innerText = "🧰";
                        }
                    }
                }
            }
        });
    });
});