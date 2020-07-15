//JS
function removeBottomAddCurrent(a) {
    a.removeClass('bottom');
    a.addClass('current');
}

function addBottomRemoveCurrent(a) {
    a.addClass('bottom');
    a.removeClass('current');
}

var emailExist = false;
var isPasswordCorrect = false;
let phoneExist = false;
let arrayNum = 0;
let arrayNumTwo = 0;
let user1 = { email: "admin@admin.com", password: "1234", firstName: "admin", lastName: "admin" }
let user2 = { email: "a@a.com", password: "1234", firstName: "a", lastName: "a" }
let user3 = { email: "b@b.com", password: "1234", firstName: "b", lastName: "b" }
let user4 = { email: "c@c.com", password: "1234", firstName: "c", lastName: "c" }
let user5 = { phone: "021337214", firstName: "phone", lastName: "registered" }
let user6 = { phone: "021123123", firstName: "phonephone", lastName: "numnum" }

let emailUserList = [user1, user2, user3, user4]
let phoneUserList = [user5, user6]

//variables for signup
let signUpPhoneNum;
let signUpPhoneFname;
let signUpPhoneLname;

let signUpEmail;
let signUpEmailPw;
let signUpEmailFname;
let signUpEmailLname;


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

    //phone auth check from phone-signup to signup
    $('.four-digit-signup').children().next().next().next().on('input', function (e) {
        let one = $(this).prev().prev().prev().children().val();
        let two = $(this).prev().prev().children().val();
        let three = $(this).prev().children().val();
        let four = $(this).children().val();

        // console.log(one)
        // console.log(two)
        // console.log(three)
        // console.log(four)

        if (one != '' && two != '' && three != '' && four != '') {
            console.log('hooray')
            addBottomRemoveCurrent($('.phone-signup-container'))
            removeBottomAddCurrent($('.phone-signup-detail-container'))
            $(this).prev().prev().prev().children().val('');
            $(this).prev().prev().children().val('');
            $(this).prev().children().val('');
            $(this).children().val('');
            $('.phone-number').val('')
            $('.digit-alert-signup').css('display', 'none')
        } else {
            $('.digit-alert-signup').css('display', 'block')
        }
    })

    //phone auth check from phone-login to guest
    $('.four-digit-login').children().next().next().next().on('input', function (e) {
        let one = $(this).prev().prev().prev().children().val();
        let two = $(this).prev().prev().children().val();
        let three = $(this).prev().children().val();
        let four = $(this).children().val();

        console.log(one)
        console.log(two)
        console.log(three)
        console.log(four)

        if (one != '' && two != '' && three != '' && four != '') {
            console.log('hooray')
            addBottomRemoveCurrent($('.phone-login-container'))
            removeBottomAddCurrent($('.logged-in'))
            $(this).prev().prev().prev().children().val('');
            $(this).prev().prev().children().val('');
            $(this).prev().children().val('');
            $(this).children().val('');
            $('.phone-number').val('')
            $('.digit-alert-login').css('display', 'none')
        } else {
            $('.digit-alert-login').css('display', 'block')
        }
    })

    //main to login
    $('.main-button').on('click', function () {
        mainWelcome.play();
        setTimeout(function () {
            removeBottomAddCurrent($('.login-container'))
        }, 900)
    });

    //login to phone-auth
    $('.continue-to-phone-auth').on('click', function () {
        let toPhoneInput = $(this).prev().prev().prev().children().next();
        let loginContainer = $(this).parent().parent().parent();
        let phoneAuthContainer = $(this).parent().parent().parent().next();
        let phoneRegex = /(^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*.{6,})$/
        let pResult = phoneRegex.test(toPhoneInput.val());
        console.log('continue-to-phone-auth clicked')
        //let phoneUserList
        i = 0;
        while (i < phoneUserList.length) {
            let userInput = toPhoneInput.val();
            if (userInput == phoneUserList[i].phone) {
                phoneExist = true;
                break;
            } else {
                phoneExist = false;
            }
            i++;
        }

        if (pResult == false) {
            $(this).prev().css('display', 'none');
            $(this).prev().prev().css('display', 'block');
            console.log('phone exist is ' + phoneExist)
        } else if ((phoneExist == false && pResult == false) || phoneExist == false) {
            $(this).prev().css('display', 'block');
            $(this).prev().prev().css('display', 'none');
            console.log('phone exist is ' + phoneExist)
        } else {
            $(this).prev().css('display', 'none');
            $(this).prev().prev().css('display', 'none');
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
    $('.continue-with-email').children().on('click', function () {
        let loginContainer = $(this).parent().parent().parent().parent().parent().parent();
        let loginEmailContainer = loginContainer.next().next();
        removeBottomAddCurrent(loginEmailContainer);
        addBottomRemoveCurrent(loginContainer);
    })

    //email-login to login
    $('.go-to-login').children().on('click', function () {
        let loginEmail = $('.login-email .email');
        let loginPassword = $('.login-email .password');
        let loginEmailContainer = $(this).parent().parent().parent().parent();
        let loginContainer = loginEmailContainer.prev().prev();
        removeBottomAddCurrent(loginContainer);
        addBottomRemoveCurrent(loginEmailContainer);
        loginEmail.next().css('display', 'none');
        loginPassword.next().css('display', 'none');
        loginEmail.val('');
        loginPassword.val('');
    })

    //email-login to guest
    $('.login-to-guest').children().on('click', function () {

        let loginEmail = $('.login-email .email');
        let loginPassword = $('.login-email .password');
        let emailRegex = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/
        let eResult = emailRegex.test(loginEmail.val())

        loginEmail.on('click', function () {
            $('.login-email .alert-email').css('display', 'none')
            $('.login-email .alert-email-two').css('display', 'none')
        })
        loginPassword.on('click', function () {
            $('.login-email .alert-password').css('display', 'none')
            $('.login-email .alert-password-two').css('display', 'none')
        })

        if (loginEmail.val() == '' || eResult == false) {
            $('.login-email .alert-email').css('display', 'block')

        }

        if (loginPassword.val() == '') {
            $('.login-email .alert-password').css('display', 'block')
        }

        i = 0;

        while (i < emailUserList.length) {
            let userInput = loginEmail.val();
            if (userInput == emailUserList[i].email) {
                arrayNum == i;
                emailExist = true;
                break;
            } else {
                emailExist = false;
            }
            i++;
        }

        if (emailExist == false) {
            //$('.login-email .alert-email').css('display', 'none')
            $('.login-email .alert-email-two').css('display', 'block')
        }

        if (emailUserList[arrayNum].password == loginPassword.val()) {
            isPasswordCorrect = true;
            console.log(emailUserList[arrayNum].password)
        } else {
            isPasswordCorrect = false;
            console.log('isPasswordCorrect is ' + isPasswordCorrect)
        }

        if (emailExist == true && isPasswordCorrect == true) {
            console.log('horah')
            removeBottomAddCurrent($('.logged-in'))
            addBottomRemoveCurrent($('.login-email-container'))
            loginEmail.val('');
            loginPassword.val('');
            arrayNum == '';
        } else if (isPasswordCorrect == false) {
            $('.login-email .alert-password-two').css('display', 'block')
        }
    })

    //sign-in to sign-up
    $('.go-to-sign-up').children().on('click', function () {
        let loginContainer = $(this).parent().parent().parent().parent();
        let signUpContainer = loginContainer.next().next().next();
        removeBottomAddCurrent(signUpContainer);
        addBottomRemoveCurrent(loginContainer);
    })

    //sign-up to sign-in
    $('.go-to-sign-in').children().on('click', function () {
        let signUpContainer = $(this).parent().parent().parent().parent();
        let loginContainer = signUpContainer.prev().prev().prev();
        removeBottomAddCurrent(loginContainer);
        addBottomRemoveCurrent(signUpContainer);
    })

    //signup to phone-auth
    $('.continue-to-phone-auth-sign-up').on('click', function () {
        let toPhoneInput = $(this).prev().prev().children().next();
        let loginContainer = $(this).parent().parent().parent();
        let phoneAuthContainer = $(this).parent().parent().parent().next();
        let phoneRegex = /(^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*.{6,})$/
        let pResult = phoneRegex.test(toPhoneInput.val());

        if (pResult == false) {
            console.log(pResult);
            $(this).prev().css('display', 'block');
        } else {
            console.log(pResult);
            $(this).prev().css('display', 'none');
            signUpPhoneNum = toPhoneInput.val();
            removeBottomAddCurrent(phoneAuthContainer)
            addBottomRemoveCurrent(loginContainer)
            console.log(signUpPhoneNum);
        }

    })

    //phone auth to signup
    $('.back-to-signup-from-phone-auth').children().on('click', function () {
        let phoneSignupContainer = $(this).parent().parent().parent().parent();
        let signUpContainer = phoneSignupContainer.prev();
        removeBottomAddCurrent(signUpContainer)
        addBottomRemoveCurrent(phoneSignupContainer)
    })

    //phone signup to signup
    $('.phone-signup-to-signup').children().on('click', function () {
        let firstName = $('.phone-signup-detail').children().next();
        let lastName = firstName.next();
        firstName.val('');
        lastName.val('');
        removeBottomAddCurrent($('.sign-up-container'))
        addBottomRemoveCurrent($('.phone-signup-detail-container'))
    })

    //phone signup to guest
    $('.continue-to-guest-from-phone-auth').children().on('click', function () {
        let firstName = $('.phone-signup-detail').children().next();
        let lastName = firstName.next();

        console.log(firstName.val());
        console.log(lastName.val());

        if (firstName.val() != '' && lastName.val() != '') {
            $(this).parent().prev().css('display', 'none');
            console.log('going to guest page')
            phoneUserList.push({ phone: signUpPhoneNum, firstName: firstName.val(), lastName: lastName.val() })
            //console.log(phoneUserList);
            removeBottomAddCurrent($('.logged-in'))
            addBottomRemoveCurrent($('.phone-signup-detail-container'))
        } else {
            $(this).parent().prev().css('display', 'block');
            console.log('fields empty')
        }
    })

    //signup to email-detail
    $('.sign-up-alternative').children().on('click', function () {
        addBottomRemoveCurrent($('.sign-up-container'))
        removeBottomAddCurrent($('.email-signup-detail-container'))
    })

    //email-signup to guest
    $('.continue-to-guest-from-email-signup').children().on('click', function () {
        let signUpDetail = $('.email-signup-detail').children();
        let isNameFilled = false;
        signUpEmail = signUpDetail.next();
        signUpEmailPw = signUpDetail.next().next().next().next();
        signUpEmailFname = signUpDetail.next().next().next().next().next().next();
        signUpEmailLname = signUpDetail.next().next().next().next().next().next().next();
        console.log(signUpEmail.val())
        console.log(signUpEmailPw.val())
        console.log(signUpEmailFname.val())
        console.log(signUpEmailLname.val())

        let emailRegex = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/
        let eResult = emailRegex.test(signUpEmail.val())
        console.log(eResult);

        if (eResult == false) {
            $('.email-regex-alert').css('display', 'block');
        } else if (eResult == true) {
            $('.email-regex-alert').css('display', 'none');
        }

        if (signUpEmailFname.val() != '' && signUpEmailLname.val() != '') {
            isNameFilled = true
            console.log(isNameFilled)
            $('.name-alert').css('display', 'none');
        } else {
            console.log(isNameFilled)
            $('.name-alert').css('display', 'block');
        }

        if (isNameFilled == true && eResult == true) {
            emailUserList.push({ email: signUpEmail.val(), password: signUpEmailPw.val(), firstName: signUpEmailFname.val(), lastName: signUpEmailLname.val() })
            console.log('to guest now')
            console.log(emailUserList)
            signUpEmail.val('')
            signUpEmailPw.val('')
            signUpEmailFname.val('')
            signUpEmailLname.val('')
            addBottomRemoveCurrent($('.email-signup-detail-container'))
            removeBottomAddCurrent($('.logged-in'))
        }
    })

})