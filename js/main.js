$(function (){
    $('.has-sub').on('click',function (e){
        e.preventDefault();
        $('.sub-menu-content').css({ "max-height": "0px" });
        $('.sub-menu-content').addClass('collapsed');
        let w = $(this).siblings('.sub-menu-content');
        let inner = $(this).siblings('.sub-menu-content').find('.sub-menu')
        if (w.hasClass('collapsed')) {
            console.log('aaaa')
            w.css({ "max-height": inner.outerHeight() + 'px' });

            w.removeClass('collapsed');
        } else {
            w.css({ "max-height": "0px" });

        }
    })
    $(window).scroll(function () {
        if ($(window).scrollTop() > 120) {
            $('nav').addClass('sticky');
        }
        if ($(window).scrollTop() < 120) {
            $('nav').removeClass('sticky');
        }
    });
    $('.btn-menu').on('click',function (){
        $('.nav-content').toggle();
        $(this).toggleClass('open');
        $('.header-lang').toggleClass('open');
        $('.header-top-left').toggleClass('open');
    })
})