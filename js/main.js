$(function (){
    $('.has-sub').on('click',function (e){
        e.preventDefault();
        $('.sub-menu-content').css({ "max-height": "0px" });
        let w = $(this).siblings('.sub-menu-content');
        w.addClass('clicked')
        $('.sub-menu-content:not(.clicked)').addClass('collapsed');
        let inner = $(this).siblings('.sub-menu-content').find('.sub-menu')
        if (w.hasClass('collapsed')) {
            console.log('aaaa')
            w.css({ "max-height": inner.outerHeight() + 'px' });

            w.removeClass('collapsed');
            w.removeClass('clicked')
        } else {
            w.css({ "max-height": "0px" });
            w.addClass('collapsed');
            w.removeClass('clicked')
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
       if(!$('.nav-content').hasClass('open')){
           console.log('asdasda')
           $('.nav-content').addClass('open');
           $('.nav-content').css({ "max-height": $('.nav-content').find('.menu').outerHeight() + 'px' });
       } else {
           $('.nav-content').removeClass('open');
           $('.nav-content').css({ "max-height": "0px" });
       }

        $('.header-lang').toggleClass('open');
        $('.header-top-left').toggleClass('open');
    })

})