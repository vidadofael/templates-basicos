
var lista = document.querySelector('nav ul');
var menuBtn = document.querySelector('.menu-btn i');

var linkAtivo = document.querySelector('nav ul li a');

function mostrarMenu() {
    if (lista.classList.contains('open')) {
        lista.classList.remove('open');
        menuBtn.classList.remove('fa-times');
        menuBtn.classList.add('fa-navicon')
    }else{
        lista.classList.add('open');
        menuBtn.classList.remove('fa-navicon');
        menuBtn.classList.add('fa-times');
    }
}

function linkActivo() {
    if (linkAtivo.classList.contains('active')) {
        linkAtivo.classList.remove('active');
    }else{
        linkAtivo.classList.add('active')
    }
}



