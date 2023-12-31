const menu = document.querySelector(".menu");
const navMenu = document.querySelector(".nav-menu");

menu.addEventListener("click", () => {
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
})


let formulario = document.querySelector(".fale")
let mascara = document.querySelector(".form-mask")

function cliqueBotao() {
    formulario.style.left = "50px"
    mascara.style.visibility = "visible"
}

function sairformulario() {
    formulario.style.left = "-405px"
    mascara.style.visibility = "hidden"
}

function mostrarSweetAlert() {
    Swal.fire({
        text: 'Item adicionado ao carrinho.',
        icon: 'success',
        confirmButtonText: 'OK',
        timer: 3000,
        background: '#ffffff',
        confirmButtonColor: "#AF2424",
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
