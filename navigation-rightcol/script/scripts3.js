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
        if (hamburgerbtn.attr('aria-pressed') == 'false') {
            hamburgerbtn.attr('aria-pressed', 'true');
        } else {
            hamburgerbtn.attr('aria-pressed', 'false');
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
        };
        if (searchbtn.attr('aria-pressed') == 'false') {
            searchbtn.attr('aria-pressed', 'true');
        } else {
            searchbtn.attr('aria-pressed', 'false');
        };
    });

    // ACCORDEONS
    var accorheaders = $('.accorheader');
    var showM = $('.show-m');
    $(window).resize(function () {
        if (window.matchMedia("(min-width: 1060px)").matches) {
            $(showM).css('display', 'block');
        } else {
            $(showM).prev('.arrowclosed').next().css('display', 'none');
        }
    });
    $(accorheaders).on('click', function () {
        if ($(this).hasClass('noclick-m') && window.matchMedia("(min-width: 1060px)").matches) {
            return false;
        } else {
            $(this).toggleClass('arrowclosed arrowopen');
            $(this).next('.accorcontent').slideToggle('fast');
            if ($(this).attr('aria-pressed') == 'false') {
                $(this).attr('aria-pressed', 'true');
            } else {
                $(this).attr('aria-pressed', 'false');
            };
        };
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
        },
        function () {
            categories.removeClass('inactive');
            $(this).children('.hiddenlist').removeClass('showlist');
        }
    );
});