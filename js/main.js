
$(document).ready(function() {
    /*hamburguer*/
    var iconMenu = document.querySelector('.menu-burguer');

    iconMenu.addEventListener('click', function() {
        if (iconMenu.classList.contains('open')) {
        iconMenu.classList.remove('open');
        } else {
        iconMenu.classList.add('open');
        }
    }, false);
    /*hamburguer*/

    $('.menu-burguer').click(function(){
        $('.gz-menu').toggleClass('active');
    });

});