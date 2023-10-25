const circulo = document.querySelector(".evento");

function seguirMouse(event) {
    circulo.style.top = event.y + "px";
    circulo.style.left = event.x + "px";
}

window.addEventListener('mousemove', seguirMouse);