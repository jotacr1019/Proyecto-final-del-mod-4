function addCardsInDocument(items) {
    const containerCardServices = document.querySelector(
        ".servicios__contenido-cards-s"
    );
    const tempEl = document.querySelector("#temp");

    tempEl.content.querySelector(".cards__titulo").textContent = items.title;

    tempEl.content.querySelector(".cards__texto").textContent = items.text;

    tempEl.content.querySelector(".cards__imagen").src = items.img;

    var clone = document.importNode(tempEl.content, true);
    containerCardServices.appendChild(clone);
}

function getContentFromContentful() {
    return fetch(
            "https://cdn.contentful.com/spaces/zxa7y43k9snw/environments/master/entries?access_token=rLDQ9K1Z4aDOZtdf3bSvMhAVmUUZtOeR8jQZ6cj8fCo&content_type=servicios"
        )
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            const collectionData = data.items.map((item) => {
                const imgToFind = data.includes.Asset;
                const imgService = imgToFind.find((assetImg) => {
                    return assetImg.sys.id === item.fields.imagenDelServicio.sys.id;
                });
                return {
                    title: item.fields.titulo,
                    text: item.fields.descripcionDelServicio,
                    img: imgService.fields.file.url,
                };
            });
            return collectionData;
        });
}

function mainCS() {
    getContentFromContentful().then(function(params) {
        for (const item of params) {
            addCardsInDocument(item);
        }
    });
}

mainCS();