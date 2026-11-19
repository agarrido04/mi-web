// Seleccionamos el botón para cambiar el modo.
const themeButton = document.querySelector("#theme-button");

// Recuperamos la preferencia guardada en el navegador.
const modoGuardado = localStorage.getItem("modo");

// Aplicamos el modo claro si estaba guardado.
if (modoGuardado === "claro") {
    document.body.classList.add("modo-claro");
}

// Cambiamos el modo y guardamos la elección.
themeButton.addEventListener("click", () => {
    document.body.classList.toggle("modo-claro");

    if (document.body.classList.contains("modo-claro")) {
        localStorage.setItem("modo", "claro");
    } else {
        localStorage.setItem("modo", "oscuro");
    }
});
