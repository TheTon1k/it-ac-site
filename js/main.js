window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 1000);

}


$('.burger_bg').click(function () {


    onLoad = window.pageYOffset

    $('.burger').removeClass('opened')
    if ($('#menu').hasClass('active')) {
        $('#menu').removeClass('active').removeClass('visible')
        $('.shadow').css('box-shadow', '0px 0px 0px 0px #120e0f')
        console.log(onLoad)
        if (onLoad >= 640) {
            $('.header').css('background-color', '#fff').css('box-shadow', '0px 4px 12px 2px rgba(153,148,153,1)');
        } else {
            $('.header').css('background-color', 'transparent').css('box-shadow', 'none');
        }
    } else {
        setTimeout(function () {
            $('#menu').addClass('active').addClass('visible')
        }, 300)
        $('.burger').addClass('opened')

        $('.shadow').css('box-shadow', '0px 0px 0px 2400px #120e0f')

    }
})

$('#logo').hover(function () {
        var obj = $(this)
        obj.addClass('zoom')
        setTimeout(function () {
            obj.removeClass('zoom')
        }, 400)
    }
)
$('.burger').hover(function () {
        var obj = $('.burger_bg')
        obj.addClass('zoom')
        setTimeout(function () {
            obj.removeClass('zoom')
        }, 300)
    }
)