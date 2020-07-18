
let totalGuestNumber=0;

$(function () {

    //if guest number is conditions

    $('.guest-counter .fa-minus').on('click', function () {
        a = $(this).next();
        currentValue = parseInt(a.val(), 10);

        if (currentValue > 0) {
            currentValue -= (1);
            a.val(currentValue);
            console.log(currentValue);
        } else {
            $(this).css('color', '#bebdbd');
            console.log('value is 0')
            return;
        }

        if (currentValue == 0) {
            $(this).css('color', '#bebdbd');
            $(this).css('border', '#bebdbd solid 0.05rem');
        } else {
            $(this).css('color', '#6C6C6C');
            $(this).css('border', '#6C6C6C solid 0.05rem');
        }
    })

    $('.guest-counter .fa-plus').on('click', function () {
        a = $(this).prev();
        currentValue = parseInt(a.val(), 10);
        
        if (totalGuestNumber<4) {
            currentValue += (1);
            totalGuestNumber+=1;
            a.val(currentValue);
            console.log(currentValue);
            console.log(totalGuestNumber);
        } else {
            return;
        }

        if (currentValue > 0) {
            $(this).prev().prev().css('color', '#6C6C6C');
            $(this).prev().prev().css('border', '#6C6C6C solid 0.05rem');
        } else {
            $(this).prev().prev().css('color', '#bebdbd');
            $(this).prev().prev().css('border', '#bebdbd solid 0.05rem');
        }
    })

    $('.guest-number-to-calendar').children().on('click', function () {

        let adults = parseInt($('.adult').children().next().val(), 10)
        let child = parseInt($('.child').children().next().val(), 10)
        let infant = parseInt($('.infant').children().next().val(), 10)

        totalGuestNumber=adults+child+infant;
        
        console.log(totalGuestNumber);

        if (totalGuestNumber > 0) {
            console.log(totalGuestNumber)
            $('.calendar-page .guest-numbers').html(totalGuestNumber + ' Guests')
            addRightRemoveCurrent($('.guest-page'))
            removeRightAddCurrent($('.calendar-page'))
        } else {
            console.log('totalGuestNumber is not 0')

        }
    })

    $('.calendar-to-guest-number').children().on('click', function () {
        addRightRemoveCurrent($('.calendar-page'))
        removeRightAddCurrent($('.guest-page'))
    })

    $('.calendar-to-accommodation').children().on('click', function () {
        // addRightRemoveCurrent($('.guest-page'))
        // removeRightAddCurrent($('.calendar-page'))
    })
})
