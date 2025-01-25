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
    $('.banner-form button').on('click',function (e){
        e.preventDefault();
        let tel = $(this).parents('form').find('input[type="phone"]').val();
        let name = $(this).parents('form').find('input[type="name"]').val();
        let msg = $('#message').val();
        let mail = $('#mail').val();
        let otpravka = true;
        if(tel ==""){
            otpravka = false;
        }
        let dannie = {'polz_name':name,'polz_tel':tel,
       'polz_mail': mail, 'polz_msg': msg  };
        if(otpravka){
            $.post('send.php', dannie, function(otvet){

                if(otvet.status){
                    $('.tel-popup').modal('hide');
                    $('#statusModal .modal-body').text(otvet.text)
                    $('#statusModal').modal('show');
                } else{
                    $('.alert').text(otvet.text)
                    $('.alert').toggle();
                    setTimeout(function (){
                        $('.alert').toggle('');

                    }, 3000)

                }

            }, 'json');
        }
    })
})