/* ==========================================================================
   MOTOR MAESTRO DE GALERÍAS - ROLAND RUIZ
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // 1. BASE DE DATOS EXTENDIDA DE PROYECTOS
    const galleryData = {
        "tupa-local": {
            titulo: "Sistema de Gestión TUPA",
            organizacion: "IESTP 'Juan José Farfán Céspedes'",
            general: "Automatización integral de la mesa de partes y el control de trámites basados en el Texto Único de Procedimientos Administrativos.",
            detallada: "El sistema resuelve la congestión en la atención al cliente mediante formularios modulares en Java. Permite la emisión ágil de boletería y un seguimiento exacto de las solicitudes de los usuarios. Su uso local garantiza la máxima velocidad de ejecución en la infraestructura de la secretaría.",
            items: [
                { titulo: "Formulario de Inicio de Sesión", desc: "Validación de acceso de usuarios al sistema", img: "img/soft/inicio-tupa.jpg", tags: ["C#", "Formulario"] },
                { titulo: "Boletería de Trámites", desc: "Generación e impresión de boletas en tiempo real con persistencia en BD.", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600", tags: ["MySQL", "Impresión"] }
            ]
        },
        "arte-madera": {
            titulo: "Sitio Web Arte y Madera J&L",
            organizacion: "Arte y Madera J&L E.I.R.L.",
            general: "Plataforma web corporativa y responsiva orientada a la exhibición de carpintería fina y gestión de cotizaciones.",
            detallada: "Desarrollada para posicionar la marca en internet. Cuenta con un cotizador interactivo multi-selector para productos variables. El usuario experimenta una navegación limpia mientras visualiza los acabados reales sin salir de su pantalla actual.",
            urlWeb: "https://rolandfrak.github.io/ArteMadera/",
            items: [
                { titulo: "Página de Inicio", desc: "Diseño premium de bienvenida con transiciones suaves y hero section impactante.", img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600", urlSeccion: "https://rolandfrak.github.io/ArteMadera/index.html", tags: ["HTML5", "CSS3"] },
                { titulo: "Sección Nosotros", desc: "Estructura corporativa que detalla la historia, visión e identidad de la empresa.", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600", urlSeccion: "https://rolandfrak.github.io/ArteMadera/nosotros.html", tags: ["Blade", "Responsive"] }
            ]
        },
        "design-ruiz": {
            titulo: "Identidad Visual Chawis-Tec",
            organizacion: "Chawis-Tec Pro",
            general: "Construcción simétrica de logotipo de tecnología enfocado en branding minimalista moderno.",
            detallada: "Desarrollo estructurado utilizando retículas geométricas para balancear el isotipo del ave con la tipografía principal. El diseño final transmite dinamismo, innovación tecnológica y limpieza corporativa, ideal para aplicaciones móviles y plataformas web.",
            items: [
                { titulo: "Estructura del Imagotipo", desc: "Simetría perfecta y cálculo de proporciones del ave tecnológica.", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=600", tags: ["Corel Draw", "Retícula"] },
                { titulo: "Paleta Gráfica y Contraste", desc: "Aplicación de colores corporativos sobre modos oscuro y claro.", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600", tags: ["Branding", "UI/UX"] }
            ]
        },
        "dj-chawis": {
            titulo: "Branding Chawis Mix - La Nueva Era",
            organizacion: "Chawis Mix Sound System",
            general: "Diseño publicitario con efectos neón de alto impacto para equipamiento de sonido profesional.",
            detallada: "Conceptualización de piezas visuales modernas destinadas a la promoción de eventos y displays de equipos de audio. El proyecto destaca por su manejo avanzado de iluminación digital, contrastes saturados y tipografías personalizadas que imponen presencia de marca.",
            items: [
                { titulo: "Flyer Promocional Neón", desc: "Efectos de iluminación y montaje digital de alta fidelidad.", img: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?q=80&w=600", tags: ["Photoshop", "Efectos"] },
                { titulo: "Identidad para Redes Sociales", desc: "Banners adaptados para optimizar canales digitales y portadas móviles.", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600", tags: ["Corel Draw", "Flyer"] }
            ]
        }
    };

    // 2. CAPTURA DE PARÁMETROS URL
    const params = new URLSearchParams(window.location.search);
    const type = params.get("type");
    const projectId = params.get("project");
    const data = galleryData[projectId];

    if (!data) {
        console.error("Error: Proyecto no encontrado en la base de datos.");
        return;
    }

    // 3. RENDERIZADO DE LA CARTA INFORMATIVA
    const infoContainer = document.getElementById("info-card-container");
    let actionBtnHtml = '';
    if (type === 'web') {
        actionBtnHtml = `
            <div class="info-action-bar">
                <a href="${data.urlWeb}" target="_blank" class="btn-card primary-btn btn-inline">
                    <i class="fa-solid fa-earth-americas"></i> Visitar Sitio Web Vivo
                </a>
            </div>`;
    }
    
    if (infoContainer) {
        infoContainer.innerHTML = `
            <div class="project-info-card">
                <h1 class="info-title">${data.titulo}</h1>
                <span class="info-org"><i class="fa-solid fa-id-card-clip"></i> ${data.organizacion}</span>
                <p class="info-general">${data.general}</p>
                <p class="info-detailed">${data.detallada}</p>
                ${actionBtnHtml}
            </div>`;
    }

    // 4. RENDERIZADO DE LAS TARJETAS DE LA GALERÍA
    const grid = document.getElementById("gallery-grid");
    if (!grid) return;

    data.items.forEach(item => {
        const card = document.createElement("div");
        card.className = "portfolio-card";

        if (type === "web") {
            card.innerHTML = `
                <div class="card-image-scroll-box">
                    <img src="${item.img}" alt="${item.titulo}">
                </div>
                <div class="card-body">
                    <div class="tag-container">${item.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}</div>
                    <h3 class="card-title">${item.titulo}</h3>
                    <p class="card-desc">${item.desc}</p>
                    <div class="card-actions">
                        <a href="${item.urlSeccion}" target="_blank" class="btn-card primary-btn">
                            <i class="fa-solid fa-arrow-up-right-from-square"></i> Ver Sección Real
                        </a>
                    </div>
                </div>`;
        } else {
            card.innerHTML = `
                <div class="card-image-box" style="cursor:pointer;">
                    <img src="${item.img}" alt="${item.titulo}" class="lightbox-trigger">
                </div>
                <div class="card-body">
                    <div class="tag-container">${item.tags ? item.tags.map(t => `<span class="tech-tag">${t}</span>`).join('') : `<span class="tech-tag tool">Diseño</span>`}</div>
                    <h3 class="card-title">${item.titulo}</h3>
                    <p class="card-desc">${item.desc}</p>
                    <div class="card-actions">
                        <button class="btn-card primary-btn lightbox-btn-action">
                            <i class="fa-solid fa-expand"></i> Ver Tamaño Real
                        </button>
                    </div>
                </div>`;

            const openLightbox = (e) => {
                e.preventDefault();
                const lb = document.getElementById("portfolio-lightbox");
                const lbImg = document.getElementById("lightbox-img");
                const lbCaption = document.getElementById("lightbox-caption");
                
                if (lb && lbImg && lbCaption) {
                    lbImg.src = item.img;
                    lbCaption.innerText = `${item.titulo} - ${item.desc}`;
                    lb.classList.add("active");
                }
            };
            card.querySelector(".card-image-box").addEventListener("click", openLightbox);
            card.querySelector(".lightbox-btn-action").addEventListener("click", openLightbox);
        }
        grid.appendChild(card);
    });
});