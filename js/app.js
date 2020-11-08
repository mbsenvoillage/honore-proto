$(document).ready(function() {

    let navToggle = $(".navbar-toggler");
    let navbar = $(".navbar-expand-lg");
    dropDown(navToggle, navbar);

})

let dropDown = function(clickedElem, elemModif) {
    $(clickedElem).click(function () {

        if(elemModif.hasClass('dropped-down')) {
            elemModif.removeClass('dropped-down');
        } else {
            elemModif.addClass("dropped-down");
        }
    });
};






