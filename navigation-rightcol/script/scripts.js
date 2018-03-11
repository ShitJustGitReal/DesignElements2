$(document).ready(function () {

    // MENU AND SEARCHBOX
    var hamburgerbtn = $('#hamburgerbtn');
    var hamburgermenu = $('#hamburgermenu');
    var body = $('body');
    var closebtn = $('#closebtn');
    var searchbtn = $('#searchbtn');
    var searchbox = $('#searchbox');

    function toggleMenu() {
        hamburgerbtn.toggleClass('close open');
        hamburgermenu.toggleClass('closed');
        if (searchbox.hasClass('closed')) {
            body.toggleClass('no-scroll')
        };
    }

    $(hamburgerbtn).on('click', function () {
        toggleMenu();
    });

    $(closebtn).on('click', function () {
        toggleMenu();
    });

    $(searchbtn).on('click', function () {
        searchbtn.toggleClass('close open');
        searchbox.toggleClass('closed');
        if (hamburgermenu.hasClass('closed')) {
            body.toggleClass('no-scroll')
        }
    });

    // ACCORDEONS
    var accorheaders = $('.accorheader');
    $(accorheaders).on('click', function () {
        $(this).toggleClass('arrowclosed arrowopen');
        $(this).next('.accorcontent').slideToggle('fast');
    });

    // HEADER: display header fixed on scroll above event
    var header = $('header');
    var scrollPos = 0;
    var currentPos;
    $(window).scroll(function () {
        currentPos = $(this).scrollTop();
        if (currentPos > scrollPos) {
            //scrolling Down
            $(header).addClass('hidden');
        } else {
            //scrolling Up
            $(header).removeClass('hidden');
        }
        scrollPos = currentPos;
    });
    // show hidden menu lists on mouseover
    var categories = $('#categories > li');
    var hiddenlists = $('#categories > li > .hiddenlist');
    $(categories).hover(
        function () {
            categories.addClass('inactive');
            $(this).removeClass('inactive');
            $(this).children('.hiddenlist').addClass('showlist');
            /* timeout isn't user friendly in this case
            var that = this;
            window.setTimeout(function () {
                categories.addClass('inactive');
                $(that).removeClass('inactive');
                $(that).children('.hiddenlist').addClass('showlist');
            }, 300);
            */
        },
        function () {
            //window.clearTimeout(); 
            categories.removeClass('inactive');
            $(this).children('.hiddenlist').removeClass('showlist');
        }
    );
});