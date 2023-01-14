function addFooter(elem) {
    const footerEl = document.createElement("footer");

    footerEl.innerHTML = `<footer class="footer__componente">
    <div class="footer__contenedor-logo-blanco">
        <img class="footer__logo-personal" src="/Assets/José-Joaquín-blanco.png" alt="logo-personal-blanco">
    </div>
    <div class="footer__opciones">
        <a class="footer__opciones-home" href="index.html">
            <img class="footer__logo-home" src="/Assets/casa-blanca.png" alt="logo-home"> Home
        </a>
        <a class="footer__opciones-servicios" href="services.html">
            <img class="footer__logo-services" src="/Assets/hombre-blanco.png" alt="logo-services"> Servicios
        </a>
        <a class="footer__opciones-contacto" href="contact.html">
            <img class="footer__logo-contact" src="/Assets/tel-blanco.png" alt="logo-contact"> Contacto
        </a>
    </div>
    <div class="footer__redes-logos">
        <a class="footer__redes-linkedin" href="https://www.linkedin.com/in/jos%C3%A9-joaqu%C3%ADn-fern%C3%A1ndez-monge-6181a814a/">
            <img class="footer__logo-linkedin" src="/Assets/linkedin-2.png" alt="logo-linkedin">
        </a>
        <a class="footer__redes-github" href="https://github.com/jotacr1019">
            <img class="footer__logo-github" src="/Assets/github-2.png" alt="logo-github">
        </a>
        <a class="footer__redes-instagram" href="https://www.instagram.com/josejoaquinfernandezmonge/">
            <img class="footer__logo-instagram" src="/Assets/instagram-4.png" alt="logo-instagram">
        </a>
    </div>
    <div class="footer__derechos">
        <p class="footer__derechos-texto">©2023 -
            <a class="footer__derechos-texto" href="">
                https://apx.school</a>
        </p>
    </div>
</footer>`;

    elem.appendChild(footerEl);
}
