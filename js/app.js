let body = $('body');
let openBtn = $('#open');
let closeBtn = $('#close');
let cardImageOverlay = [[$('.card-img-overlay.one'), $('.show-on-hover.item-1')], [$('.card-img-overlay.two'), $('.show-on-hover.item-2')],
    [$('.card-img-overlay.three'), $('.show-on-hover.item-3')]];
const x = window.matchMedia("(min-width: 1200px)");

$(document).ready(function() {

    toggleMenu();

    myFunction(x);

    x.addEventListener('change', myFunction);


})



function myFunction(x) {
    if (x.matches) { // If media query matches
        cardImageOverlay.forEach(element => element[0].hover(function(){element[1].show()}, function (){element[1].hide()}));
    } else {
        cardImageOverlay.forEach(element => element[0].hover(function(){element[1].hide()}, function (){element[1].hide()}));
    }
}


let toggleMenu = function() {
    return $('#navbar-toggle-btn').click(function (e) {
        e.preventDefault();
        $('.menu').toggleClass('pull-sidebar');
        $('.menu-bottom-wrapper').toggleClass('pull-bottom-navbar');

        if(openBtn.hasClass('show')) {
            openBtn.removeClass('show').addClass('hide');
            closeBtn.removeClass('hide').addClass('show');
        } else {
            closeBtn.removeClass('show').addClass('hide');
            openBtn.removeClass('hide').addClass('show');
        }

    })
}



