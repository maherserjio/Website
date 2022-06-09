$('[data-toggle="collapsible-nav"]').on('click', function (e) {
    var target = ($(this).data('target'));
    $('#' + target).toggleClass('show');
});

$('.btn-share').on('click', function (e) {
    // copy website link to clipboard
    navigator.clipboard.writeText("https://maherserjio.github.io/Website/");

    // Get the snackbar DIV
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
});

$('#figure-1').on('click', function (e) {
    window.open('https://maher-s.web.app', '_blank')

});
$('#figure-2').on('click', function (e) {
    window.open('https://portfolio-natours.firebaseapp.com', '_blank')

});
$('#figure-3').on('click', function (e) {
    window.open('https://portfolio-nexter.firebaseapp.com', '_blank')

});
$('#figure-4').on('click', function (e) {
    window.open('https://portfolio-omnifood.herokuapp.com', '_blank')

});
$('#figure-5').on('click', function (e) {
    window.open('https://recipe-book-799af.firebaseapp.com', '_blank')
});
$('#figure-6').on('click', function (e) {
    window.open('https://portfolio-trilo.firebaseapp.com', '_blank')
});
$('#figure-7').on('click', function (e) {
    window.open('https://portfolio-camp.herokuapp.com', '_blank')
});
$('#figure-8').on('click', function (e) {
    window.open('https://budget-js-app.netlify.app', '_blank')
});


$(document).ready(function () {
    if (window.innerWidth >= 992) {
        $('#collapsible-nav').addClass('show');  //Show navigation menu in bigger screens by default.
    } else {
        $('#collapsible-nav').removeClass('show');
    }

    if ($('.hover-box').length) {
        setHoverBoxPerspective();
    }

});

$(window).resize(
    function () {
        if ($('.hover-box').length) {
            setHoverBoxPerspective();
        }
    }
);

function setHoverBoxPerspective() {
    $('.hover-box').css({
        'perspective': function () {
            return Math.max($(this).width(), $(this).height()) * 2 + 50;
        }
    });
}


var classNames = ['in-up', 'in-right', 'in-down', 'in-left', 'out-up', 'out-right', 'out-down', 'out-left']; // Animation classes.

$('.hover-box').hover(
    function (event) {
        var direction = "up";
        if (jQuery.fn.entry) { //Check if entry js file is loaded.
            direction = $(this).entry({ e: event }); // Get mouse in direction.
        }

        $(this).removeClass(classNames.join(" ")); // Remove existing animation classes.
        $(this).addClass("in-" + direction); //Add mouse in animation

    },

    function (event) {

        var direction = "up";
        if (jQuery.fn.entry) {
            direction = $(this).entry({ e: event }); // Get mouse out direction.
        }

        $(this).removeClass(classNames.join(" "));
        $(this).addClass("out-" + direction); //Add mouse out animation

    }
);