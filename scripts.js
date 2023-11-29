const menu = document.querySelector(".menu");
const navMenu = document.querySelector(".nav-menu");

menu.addEventListener("click", () => {
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
})


let formulario = document.querySelector(".fale")
let mascara = document.querySelector(".form-mask")

function cliqueBotao() {
    formulario.style.left = "60px"
    mascara.style.visibility = "visible"
}

function sairformulario() {
    formulario.style.left = "-405px"
    mascara.style.visibility = "hidden"
}