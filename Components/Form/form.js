function addForm(elem) {
    const formEl = document.createElement("div");

    formEl.innerHTML = `<div class="contacto__componente">
         <h2 class="contacto__title">Escríbeme</h2>
         <form class="contenedor-form">
             <label class="contacto__name">
                 <span class="contacto__name-span">Nombre</span>
                 <input class="contacto__name-input" name="contacto__name" type="text" placeholder="Tu nombre">
             </label>
             <label class="contacto__email">
                 <span class="contacto__email-span">Email</span>
                 <input name="contacto__email" type="email" class="contacto__email-input" placeholder="ejemplo@mail.com">
             </label>
             <label class="contacto__message">
                 <span class="contacto__message-span">Mensaje</span>
                 <textarea name="contacto__message" class="contacto__message-input"></textarea>
             </label>
             <button class="contacto__boton">Enviar
                 <img class="contacto__img-enviar" src="../Assets/paper-plane-regular.svg" alt="imagen-enviar">
             </button>
         </form>
     </div>`;

    const form = document.querySelector(".contenedor-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const elem = e.target;
        const data = new FormData(elem);
        const value = Object.fromEntries(data.entries());
        fetch("https://apx-api.vercel.app/api/utils/dwf", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                to: "jotaj19@hotmail.com",
                message: "Terminado el desafío final del módulo 4",
            }),
        });
    });

    elem.appendChild(formEl);
}