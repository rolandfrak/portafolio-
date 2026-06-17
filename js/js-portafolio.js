/* ==========================================================================
   MOTOR MAESTRO DEL PORTAFOLIO - ROLAND RUIZ (TODO EN UNO)
   ========================================================================== */

// 1. DATASET DE SOFTWARE
const softwareProjects = {
    local: [
        {
            id: "tupa-local",
            titulo: "Sistema TUPA",
            descripcion: "Plataforma de escritorio local para automatizar trámites institucionales y emisión de boletería ágil.",
            imagen: "img/soft/tupa/menu-tupa.jpg",
            tags: ["Java NetBeans", "MySQL XAMPP", "Arquitectura TI"]
        }
    ],
    web: [
        {
            id: "infor-ruiz",
            titulo: "Mi Primera Página Web",
            descripcion: "Informática Ruiz, mi primera página web, sitio web informativo, con contenido orientado a conocimientos informáticos.",
            imagen: "img/soft/web/primer-html/infor-inicio.png",
            urlEnVivo: "https://rolandfrak.github.io/Mi-Primera-Web/index.html", 
            tags: ["HTML", "CSS", "JS"]
        },
        
        {
            id: "tec-ruiz",
            titulo: "Mi Web Personal - Tec Ruiz",
            descripcion: "Informática Ruiz, mi primera página web, sitio web informativo, con contenido orientado a conocimientos informáticos.",
            imagen: "img/soft/web/mi-portafolio/porta-inicio.png",
            urlEnVivo: "https://rolandfrak.github.io/Blog", 
            tags: ["HTML", "CSS", "JS"]
        },
        
        {
            id: "mi-blog",
            titulo: "Mi Blog Soporte TI - Tec Ruiz",
            descripcion: "Informática Ruiz, mi primera página web, sitio web informativo, con contenido orientado a conocimientos informáticos.",
            imagen: "img/soft/web/mi-blog/blog-principal.png",
            urlEnVivo: "https://rolandfrak.github.io/Blog", 
            tags: ["HTML", "CSS", "JS"]
        },
        
                {
            id: "mi-portafolio",
            titulo: "Mi Portafolio - Tec Ruiz",
            descripcion: "Informática Ruiz, mi primera página web, sitio web informativo, con contenido orientado a conocimientos informáticos.",
            imagen: "img/soft/web/mi-porta/porta-ini.png",
            urlEnVivo: "https://rolandfrak.github.io/Blog", 
            tags: ["HTML", "CSS", "JS"]
        }
    ]
};

// 2. DATASET DE DISEÑO (IDs alineados con el motor de galería de diseño)
const disenoProjects = [
    {
        id: "design-ruiz", // ID unificado con js-galeria-diseño.js
        titulo: "Identidad Visual DESIGN RUIZ",
        descripcion: "Construcción simétrica de logotipo de tecnología enfocado en branding minimalista moderno.",
        imagen: "img/dis/design/logo-design.png",
        herramientas: ["Corel Draw", "Gemini AI", "Canva"],
        tipo: "Logo Design"
    },
    {
        id: "dj-chawis", // ID unificado con js-galeria-diseño.js
        titulo: "DJ Chawis - La Nueva Era",
        descripcion: "Diseño publicitario con efectos neón de alto impacto para equipamiento de sonido profesional.",
        imagen: "img/dis/djchawis/logo-djchawis.png",
        herramientas: ["Gemini","IA", "Vector"],
        tipo: "Logo"
    },
    {
        id: "ciber-hawk", // ID unificado con js-galeria-diseño.js
        titulo: "Ciber Hanwk",
        descripcion: "Empresa dedicada al rubro de telecomunicaciones internet fijo y Rápido como un Alcón",
        imagen: "img/dis/ciber-hawk/hawk-logo.png",
        herramientas: ["Inskaspe","Logo", "Vector"],
        tipo: "Logo"
    }
    
    ,
    {
        id: "tec-r-ruiz", // ID unificado con js-galeria-diseño.js
        titulo: "Tec Ruiz",
        descripcion: "Elementos usados en el diseño de sitio web Tec Ruiz, Blog y portafolio",
        imagen: "img/logo.png",
        herramientas: ["Inskaspe","Logo", "Vector"],
        tipo: "Logo"
    }
];

// 3. FUNCIONES DE RENDERIZADO
function renderSoftwareCards(container, type) {
    if (!container) return;
    container.innerHTML = "";
    
    const list = softwareProjects[type];
    if (!list || list.length === 0) return;

    list.forEach(proj => {
        const card = document.createElement("div");
        card.className = "portfolio-card";
        const tagsHtml = proj.tags.map(t => `<span class="tech-tag">${t}</span>`).join('');

        if (type === "local") {
            card.innerHTML = `
                <div class="card-image-box">
                    <img src="${proj.imagen}" alt="${proj.titulo}">
                </div>
                <div class="card-body">
                    <div class="tag-container">${tagsHtml}</div>
                    <h3 class="card-title">${proj.titulo}</h3>
                    <p class="card-desc">${proj.descripcion}</p>
                    <div class="card-actions">
                        <a href="galeria.html?type=local&project=${proj.id}" class="btn-card primary-btn">
                            <i class="fa-regular fa-images"></i> Ver Galería Técnica
                        </a>
                    </div>
                </div>
            `;
        } else {
            card.innerHTML = `
                <div class="card-image-scroll-box">
                    <img src="${proj.imagen}" alt="${proj.titulo}">
                </div>
                <div class="card-body">
                    <div class="tag-container">${tagsHtml}</div>
                    <h3 class="card-title">${proj.titulo}</h3>
                    <p class="card-desc">${proj.descripcion}</p>
                    <div class="card-actions dual-actions">
                        <div class="action-cell">
                            <a href="galeria.html?type=web&project=${proj.id}" class="btn-card secondary-btn">
                                <i class="fa-solid fa-images"></i> Galería
                            </a>
                        </div>
                        <div class="action-cell">
                            <a href="${proj.urlEnVivo}" target="_blank" class="btn-card primary-btn">
                                <i class="fa-solid fa-rocket"></i> Visitar Web
                            </a>
                        </div>
                    </div>
                </div>
            `;
        }
        container.appendChild(card);
    });
}

function renderDisenoCards(container) {
    if (!container) return;
    container.innerHTML = "";

    disenoProjects.forEach(proj => {
        const card = document.createElement("div");
        card.className = "portfolio-card";
        const toolsHtml = proj.herramientas.map(h => `<span class="tech-tag tool">${h}</span>`).join('');

        card.innerHTML = `
            <div class="card-image-box">
                <img src="${proj.imagen}" alt="${proj.titulo}">
            </div>
            <div class="card-body">
                <div class="tag-container">
                    ${toolsHtml}
                    <span class="tech-tag">${proj.tipo}</span>
                </div>
                <h3 class="card-title">${proj.titulo}</h3>
                <p class="card-desc">${proj.descripcion}</p>
                <div class="card-actions">
                    <a href="galeria.html?type=diseno&project=${proj.id}" class="btn-card primary-btn">
                        <i class="fa-solid fa-wand-magic-sparkles"></i> Ver Galería Creativa
                    </a>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// 4. ORQUESTADOR DE FILTROS INTERACTIVOS
document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.getElementById("dynamic-portfolio-grid");
    const mainFilters = document.querySelectorAll(".portfolio-nav .filter-btn");
    const subFiltersContainer = document.getElementById("software-subs");
    const subFilters = document.querySelectorAll(".portfolio-nav .sub-filter-btn");

    let currentMainCategory = "software";
    let currentSubCategory = "local";

    function updateDisplay() {
        if (!gridContainer) return;

        if (currentMainCategory === "software") {
            if (subFiltersContainer) subFiltersContainer.classList.remove("hidden");
            renderSoftwareCards(gridContainer, currentSubCategory);
        } else {
            if (subFiltersContainer) subFiltersContainer.classList.add("hidden");
            renderDisenoCards(gridContainer);
        }
    }

    mainFilters.forEach(btn => {
        btn.addEventListener("click", () => {
            mainFilters.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentMainCategory = btn.getAttribute("data-category");
            updateDisplay();
        });
    });

    subFilters.forEach(btn => {
        btn.addEventListener("click", () => {
            subFilters.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentSubCategory = btn.getAttribute("data-subcategory");
            updateDisplay();
        });
    });

    updateDisplay();
});
