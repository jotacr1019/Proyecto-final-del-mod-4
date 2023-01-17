function addHeader(elem) {
    const headerEl = document.createElement("header");

    headerEl.innerHTML = `
    <header class="header__componente">
        <div class="header__contenedor-logo">
            <a href="/">
            <img src="./Assets/José-Joaquín.png" alt="Mi-logo-personal" class="header__logo">
            </a>
        </div>
        <nav class="header__menu">
            <button class="header__menu-boton">
                <span class="material-symbols-outlined">menu</span>
            </button>
            <div class="header__ventana">
                <div class="header__contenedor-boton">
                <button class="header__ventana-cerrar">X</button>
                </div>
                <div class="header__ventana-contenido">
                    <a class="header__ventana-portfolio" href="portfolio.html">Portfolio</a>
                    <a class="header__ventana-servicios" href="services.html">Servicios</a>
                    <a class="header__ventana-contacto" href="contact.html">Contacto</a>
                </div>
            </div>
        </nav>
        <nav class="header__menu-palabras">
            <a class="header__menu-portfolio" href="portfolio.html">Portfolio</a>
            |
            <a class="header__menu-servicios" href="services.html">Servicios</a>
            |
            <a class="header__menu-contacto" href="contact.html">Contacto</a>
        </nav>
    </header>`;

    const botonAbrirVentana = headerEl.querySelector(".header__menu-boton");
    const botonCerrarVentana = headerEl.querySelector(".header__ventana-cerrar");
    const ventanaEl = headerEl.querySelector(".header__ventana");

    botonAbrirVentana.addEventListener("click", () => {
        ventanaEl.style.display = "initial";
    });

    botonCerrarVentana.addEventListener("click", () => {
        ventanaEl.style.display = "none";
    });

    elem.appendChild(headerEl);
}
