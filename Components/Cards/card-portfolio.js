function addCardsInDocument(items) {
    const containerCardServices = document.querySelector(
        ".portfolio__contenido-cards"
    );
    const tempEl = document.querySelector("#temp-p");

    tempEl.content.querySelector(".cards__titulo").textContent = items.title;

    tempEl.content.querySelector(".cards__texto").textContent = items.text;

    tempEl.content.querySelector(".cards__imagen").src = items.img;

    tempEl.content.querySelector(".cards__portfolio-link").href = items.url;

    var clone = document.importNode(tempEl.content, true);
    containerCardServices.appendChild(clone);
}

function getDataFromContenful() {
    return fetch(
            "https://cdn.contentful.com/spaces/zxa7y43k9snw/environments/master/entries?access_token=rLDQ9K1Z4aDOZtdf3bSvMhAVmUUZtOeR8jQZ6cj8fCo&content_type=proyectos"
        )
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            const collectionData = data.items.map((item) => {
                const imgToFind = data.includes.Asset;
                const imgGood = imgToFind.find((assetImg) => {
                    return assetImg.sys.id === item.fields.imagenDelProyecto.sys.id;
                });
                return {
                    title: item.fields.tituloDelProyecto,
                    text: item.fields.descripcinDelProyecto,
                    img: imgGood.fields.file.url,
                    url: item.fields.url,
                };
            });
            return collectionData;
        });
}

function mainCP() {
    getDataFromContenful().then(function(params) {
        for (const item of params) {
            addCardsInDocument(item);
        }
    });
}

mainCP();