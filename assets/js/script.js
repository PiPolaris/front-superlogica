$('.carousel').slick();

function hamburguer() {
    var navbar = document.getElementById('navbar');
    var login = document.getElementById('login');

    navbar.classList.toggle('navbar--toggle');
    login.classList.toggle('login--toggle');
}