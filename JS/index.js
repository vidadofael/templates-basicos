
var lista = document.querySelector('nav ul');
var menuBtn = document.querySelector('.menu-btn i');

var linkAtivo = document.querySelector('nav ul li a');

function mostrarMenu() {
    if (lista.classList.contains('open')) {
        lista.classList.remove('open');
    }else{
        lista.classList.add('open');
    }
}

function linkActivo() {
    if (linkAtivo.classList.contains('active')) {
        linkAtivo.classList.remove('active');
    }else{
        linkAtivo.classList.add('active')
    }
}