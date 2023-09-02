AOS.init();

function activarPanel() {
    const contenedor = document.querySelector(".cont-colores");
    const boton = document.querySelector(".open-panel");

    boton.classList.toggle("active");
    contenedor.classList.toggle("active");
}

var link = document.getElementById("fileCss");

function primario() {
    link.href = "css/styles.css";
}

function secundario() {
    link.href = "css/styles-secundario.css";
}

function terciario() {
    link.href = "css/styles-terciario.css";
}