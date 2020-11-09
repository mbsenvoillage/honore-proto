$(document).ready(function() {

    let openBtn = $('#open');
    let closeBtn = $('#close');

    $('#navbar-toggle-btn').click(function (e) {
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

})







