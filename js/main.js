
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


    /*menu-responsive*/
    $('.menu-burguer').click(function(){
        $('.gz-menu').toggleClass('active');
        $('.gz-menu a').toggleClass('fadeInRight');
        $('.overlay').toggleClass('active');
    });

    $('.overlay').click(function(){
        $(this).removeClass('active');
        $('.gz-menu').removeClass('active');
        $('.menu-burguer').removeClass('open');
        $('.gz-menu a').removeClass('fadeInRight');
    });

    $('.gz-menu a').click(function(){
        $('.gz-menu').removeClass('active');
        $('.overlay').removeClass('active');
        $('.menu-burguer').removeClass('open');
        $('.gz-menu a').removeClass('fadeInRight');
    });
    /*menu-responsive*/

});

$(window).load(function(){
    $('.gz-nav').addClass('down-load');
});