$(document).ready(function ($) {
    $(window).on('scroll', function () {
        var scr = $(this).scrollTop();
        if (scr > 15) {
            $(".topBannerCase").css("opacity", 1 - scr * 0.0023);
        } else {
            $(".topBannerCase").css("opacity", 1);
        }
    })
})