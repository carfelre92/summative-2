//JS
function removeBottomAddCurrent(a) {
    a.removeClass('bottom');
    a.addClass('current');
}

function addBottomRemoveCurrent(a) {
    a.addClass('bottom');
    a.removeClass('current');
}

//Jquery
$(function () {

    //all animations
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

    mainWelcome.add({
        targets: '.main-welcome-container',
        zIndex: [0],
    })

    ////////////end of animation

    //main to login
    $('.main-button').on('click', function () {
        mainWelcome.play();
        setTimeout(function () {
            removeBottomAddCurrent($('.login-container'))
        }, 900)
    });

    //login to phone-auth
    $('.continue-to-phone-auth').on('click', function () {
        let toPhoneInput = $(this).prev().prev().children().next();
        let loginContainer = $(this).parent().parent().parent();
        let phoneAuthContainer = $(this).parent().parent().parent().next();
        let phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
        let pResult = phoneRegex.test(toPhoneInput.val());

        if (pResult == false) {
            console.log(pResult);
            $(this).prev().css('display', 'block');
        } else {
            console.log(pResult);
            $(this).prev().css('display', 'none');
            removeBottomAddCurrent(phoneAuthContainer)
            addBottomRemoveCurrent(loginContainer)
        }
    })

    //phone-auto to login
    $('.back-to-login-from-phone-auth').children().on('click', function () {
        let phoneLoginContainer = $(this).parent().parent().parent().parent();
        let loginContainer = phoneLoginContainer.prev();
        removeBottomAddCurrent(loginContainer)
        addBottomRemoveCurrent(phoneLoginContainer)
    })

    //login to email-login
    $('.sign-in-alternative').children().on('click', function () {
        let loginContainer = $(this).parent().parent().parent().parent();
        let loginEmailContainer = loginContainer.next().next();
        removeBottomAddCurrent(loginEmailContainer);
        addBottomRemoveCurrent(loginContainer);
    })

    //email-login to login
    $('.go-to-login').children().on('click', function () {
        let loginEmailContainer = $(this).parent().parent().parent().parent();
        let loginContainer = loginEmailContainer.prev().prev();
        removeBottomAddCurrent(loginContainer);
        addBottomRemoveCurrent(loginEmailContainer);
    })
})



