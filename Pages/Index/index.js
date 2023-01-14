function main() {
    const containerHeader = document.querySelector(".contenedor-header");
    addHeader(containerHeader);

    //
    //

    function addWelcomeInIndex(item) {
        function primerPalabra() {
            const texto = item.title;
            const textoDividido = texto.split(" ");
            return textoDividido[0];
        }

        function restoDeTexto() {
            const texto = item.title;
            const textoDividido = texto.split(" ");
            const restoDeTexto = `${textoDividido[1]} ${textoDividido[2]}`;
            return restoDeTexto;
        }

        const tituloBienvenida = document.querySelector(
            "h1.presentacion__portada-titulo"
        );
        tituloBienvenida.textContent = primerPalabra();

        const spanBienvenida = document.querySelector(
            "span.presentacion__portada-titulo-span"
        );
        spanBienvenida.textContent = restoDeTexto();

        const imagenBienvenidaCohete = document.querySelector(
            ".presentacion__portada-imagen"
        );
        imagenBienvenidaCohete.src = item.imgCohete;

        const imagenBienvenidaSombra = document.querySelector(
            ".presentacion__portada-imagen-sombra"
        );

        imagenBienvenidaSombra.src = item.imgSombra;
    }

    function getDataFromContentfulWelcome() {
        return fetch(
                "https://cdn.contentful.com/spaces/zxa7y43k9snw/environments/master/entries?access_token=rLDQ9K1Z4aDOZtdf3bSvMhAVmUUZtOeR8jQZ6cj8fCo&content_type=presentacion"
            )
            .then(function(res) {
                return res.json();
            })
            .then(function(data) {
                const dataPresentation = data.items.find((item) => {
                    const titlePresentation = "Hola Soy Joaquín";
                    return item.fields.tituloDePresentacion === titlePresentation;
                });
                const imgToFind = data.includes.Asset;
                const imgCohete = imgToFind.find((assetImg) => {
                    return (
                        assetImg.sys.id ===
                        dataPresentation.fields.imagenDePresentacion[0].sys.id
                    );
                });
                const imgSombra = imgToFind.find((assetImg) => {
                    return (
                        assetImg.sys.id ===
                        dataPresentation.fields.imagenDePresentacion[1].sys.id
                    );
                });
                return {
                    title: dataPresentation.fields.tituloDePresentacion,
                    imgCohete: imgCohete.fields.file.url,
                    imgSombra: imgSombra.fields.file.url,
                };
            });
    }

    function mainWelcome() {
        getDataFromContentfulWelcome().then(function(params) {
            addWelcomeInIndex(params);
        });
    }

    mainWelcome();

    //
    //

    function addPresentationInIndex(item) {
        const tituloPresentacion = document.querySelector(
            ".presentacion__detalles-titulo"
        );
        tituloPresentacion.textContent = item.title;

        const textoPresentacion = document.querySelector(
            ".presentacion__detalles-texto"
        );
        textoPresentacion.textContent = item.text;

        const imagenPresetacion = document.querySelector(
            ".presentacion__detalles-imagen"
        );

        imagenPresetacion.src = item.img;
    }

    function getDataFromContentfulPresentation() {
        return fetch(
                "https://cdn.contentful.com/spaces/zxa7y43k9snw/environments/master/entries?access_token=rLDQ9K1Z4aDOZtdf3bSvMhAVmUUZtOeR8jQZ6cj8fCo&content_type=presentacion"
            )
            .then(function(res) {
                return res.json();
            })
            .then(function(data) {
                const dataPresentation = data.items.find((item) => {
                    const titlePresentation = "Acerca de mi";
                    return item.fields.tituloDePresentacion === titlePresentation;
                });
                const imgToFind = data.includes.Asset;
                const imgGood = imgToFind.find((assetImg) => {
                    return (
                        assetImg.sys.id ===
                        dataPresentation.fields.imagenDePresentacion[0].sys.id
                    );
                });
                return {
                    title: dataPresentation.fields.tituloDePresentacion,
                    text: dataPresentation.fields.descripcionDePresentacion,
                    img: imgGood.fields.file.url,
                };
            });
    }

    function mainPresentation() {
        getDataFromContentfulPresentation().then(function(params) {
            addPresentationInIndex(params);
        });
    }

    mainPresentation();

    //
    //

    function addCardsInIndex(items) {
        const containerCardIndex = document.querySelector(
            ".servicios__contenido-cards-i"
        );
        const tempEl = document.querySelector("#tempIndex");

        tempEl.content.querySelector(".cards__titulo").textContent = items.title;

        tempEl.content.querySelector(".cards__texto").textContent = items.text;

        tempEl.content.querySelector(".cards__imagen").src = items.img;

        var clone = document.importNode(tempEl.content, true);
        containerCardIndex.appendChild(clone);
    }

    function getContentFromContentfulIndex() {
        return fetch(
                "https://cdn.contentful.com/spaces/zxa7y43k9snw/environments/master/entries?access_token=rLDQ9K1Z4aDOZtdf3bSvMhAVmUUZtOeR8jQZ6cj8fCo&content_type=servicios"
            )
            .then(function(res) {
                return res.json();
            })
            .then(function(data) {
                const collectionService = data.items.map((item) => {
                    const imgToFind = data.includes.Asset;
                    const imgGood = imgToFind.find((assetImg) => {
                        return assetImg.sys.id === item.fields.imagenDelServicio.sys.id;
                    });
                    return {
                        title: item.fields.titulo,
                        text: item.fields.descripcionDelServicio,
                        img: imgGood.fields.file.url,
                    };
                });
                return collectionService;
            });
    }

    function mainCards() {
        getContentFromContentfulIndex().then(function(params) {
            for (const item of params) {
                addCardsInIndex(item);
            }
        });
    }

    mainCards();

    const containerForm = document.querySelector(".contenedor-form");
    addForm(containerForm);

    const containerFooter = document.querySelector(".contenedor-footer");
    addFooter(containerFooter);
}

main();