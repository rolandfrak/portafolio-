document.addEventListener("DOMContentLoaded", async () => {

    try {

        // CABEZA
        const cabeza = await fetch("cabeza.html");
        const htmlCabeza = await cabeza.text();

        document.getElementById("cabeza").innerHTML = htmlCabeza;

        // PIE
        const pie = await fetch("pie.html");
        const htmlPie = await pie.text();

        document.getElementById("pie").innerHTML = htmlPie;

        iniciarMenu();

    } catch(error) {

        console.error("Error cargando componentes:", error);

    }

});


function iniciarMenu(){

    const boton = document.getElementById("menu-mobile");

    if(!boton) return;

    boton.addEventListener("click", () => {

        document.querySelector(".menu-left")
            .classList.toggle("open");

        document.querySelector(".menu-right")
            .classList.toggle("open");

    });

}