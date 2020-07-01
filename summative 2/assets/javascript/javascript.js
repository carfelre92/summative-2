$(function () {

    let mainWelcome = anime.timeline({
        easing: 'easeInOutQuad',
        autoplay: false,
        duration: 500,
    })

    mainWelcome.add({
        targets: '.main-welcome-container',
        translateY: [0, '-8%'],
    })

    mainWelcome.add({
        targets: '.main-welcome-container',
        translateY: ['-8%', '100%'],
    })

    $('.main-button').on('click', function () {
        mainWelcome.play();
        setTimeout(function () {
            $('.login-container').addClass('current');
        }, 900)
    });

    $('.continue-to-phone-auth').on('click', function () {
        let thisThing =$(this).parent().parent().parent();
        let phoneLoginContainer=$('.phone-login-container')
        thisThing.css('opacity',0)
        thisThing.removeClass('current')
        thisThing.addClass('bottom-side')
        phoneLoginContainer.css('opacity',1)
        phoneLoginContainer.addClass('current')
    })
    
    $('.back-to-login').children().on('click', function(){
        $('.login-container').removeClass('bottom-side')
        $('.login-container').css('opacity',1)
        $('.phone-login-container').css('opacity',0)
        $('.phone-login-container').removeClass('current')
        $('.phone-login-container').addClass('bottom-side')
    })
})



