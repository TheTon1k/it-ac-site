$(document).ready(function ($) {
    onLoad = $(window).scrollTop();
    $(window).on('scroll', function () {
        var scr = $(this).scrollTop();

        if ($('#menu').hasClass('active') == false) {
            if (scr >= 70) {
                $('.header').css('background-color', '#fff').css('box-shadow', '0px 4px 12px 2px rgba(153,148,153,1)');
                $('.logo').css('transform', 'scale(0.8)')
                $('.burger_bg').css('transform', 'scale(0.8)')

            } else {
                $('.header').css('background-color', 'transparent').css('box-shadow', 'none');
                $('.logo').css('transform', 'scale(1)')
                $('.burger_bg').css('transform', 'scale(1)')
            }
        }
    })
    if (onLoad >= 0) {
        $('.top_svg').addClass('tool-outline-move ')
    }
    if (onLoad >= 70) {
        $('.header').css('background-color', '#fff').css('box-shadow', '0px 4px 12px 2px rgba(153,148,153,1)');
        $('.logo').css('transform', 'scale(0.8)')
        $('.burger_bg').css('transform', 'scale(0.8)')

    } else {
        $('.header').css('background-color', 'transparent').css('box-shadow', 'none');
        $('.logo').css('transform', 'scale(1)')
        $('.burger_bg').css('transform', 'scale(1)')
    }
})
