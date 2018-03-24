$(document).ready(function () {
    console.log("Document ready");

    /* top navigation mega menu */
    $('#hamburger').on('click', function () {
        $('.mainnav').toggleClass('open');
    });

    $('#closeMenu').on('click', function () {
        $('.mainnav').removeClass('open');
    });

    /* if you would want to show/hide the main menu with script

    $('#hamburger').on('click', function() {
        $('.mainnav').slideToggle('fast');
    });

    $('#closeMenu').on('click', function() {
        $('.mainnav').hide();
    });
    */

    /* search bar - show and hide */
    var searchbar = $('#searchbar');

    $('#searchicon').on('click', function () {
        $(searchbar).slideToggle('fast');
    });

    $(window).resize(function () {
        var viewport = $(window).width();
        if (viewport > 1200) {
            $(searchbar).show('fast');
        } else {
            $(searchbar).hide('fast');
        }
    });

    /*
    $('#searchicon').on('click', function() {
        $('#searchbar').toggleClass('show');
    });
    */

    /* accordeon - show and hide content */
    $('.accorheader').on('click', function () {
        $(this).find('span').toggleClass('arrowopen arrowclosed');
        $(this).next('.accorcontent').toggleClass('contentopen');
    });


    $('#submit').on('click', function () {
        alert("If this was a real form with a real server, it might have worked");
    });

    /* filter education programs */

    $('.filtermenu').find('input:checkbox').on('click', function () {

        // first check if there are checked checkboxes. If not, all listitems are displayed. If so, all listitems are hidden.
        var checkedItems = $('.filtermenu').find('input:checked');
        if (checkedItems.length) {
            $('.themecontainer li').hide();
        } else {
            $('.themecontainer li').show();
        }

        // for each checked checkbox, loop through all the listitems to see if there's a match. If so, show the listitem.
        $(checkedItems).each(function () {
            $('.themecontainer li.' + $(this).attr('value')).show();
            $('.themecontainer li.' + $(this).attr('value') + ' ul li.' + $(this).attr('value')).show();
        });

        // if all listitems are hidden, remove the specific theme
        $('.themecontainer').each(function () {
            $(this).show(); // first always show the theme to avoid removing themes for good
            var hiddenLI = $(this).children('ul').children('li').is(':visible');
            if (!(hiddenLI)) {
                $(this).hide();
            }
        });
    });

    /* Back to top button */

    var amountScrolled = 300;

    $(window).scroll(function () {
        if ($(window).scrollTop() > amountScrolled) {
            $('#totop').fadeIn('slow');
        } else {
            $('#totop').fadeOut('slow');
        }
    });

    $('#totop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 300);
        return false;
    });

    /* Facebook page widget */
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

});