import { lightpick } from './myCalendar.js';

let totalGuestNumber = 0;
let iDays = 0;
let totalPrice = 0;
let newPrice = 0;
let accommodationFee = 0;

$(function () {
    let a;
    let currentValue;
    //if guest number is conditions

    $('.guest-counter .fa-minus').on('click', function () {
        a = $(this).next();
        currentValue = parseInt(a.val(), 10);

        if (totalGuestNumber <= 4 && currentValue > 0) {
            currentValue -= (1);
            totalGuestNumber -= 1;
            a.val(currentValue);
            console.log(currentValue);
            console.log(totalGuestNumber);
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

        if (totalGuestNumber < 4) {
            currentValue += (1);
            totalGuestNumber += 1;
            a.val(currentValue);
            console.log(currentValue);
            console.log(totalGuestNumber);
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

        totalGuestNumber = adults + child + infant;

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

        let a = lightpick.getStartDate();
        let b = lightpick.getEndDate();
        console.log(totalGuestNumber);
        if (a != null && b != null) {
            iDays = b.diff(a, 'days');

            //hotel condition
            if (totalGuestNumber <= 2 && 0 < iDays && iDays <= 5) {
                $('.item1').css('display', 'block')
            }
            //hostel condition
            if (totalGuestNumber == 1 && 0 < iDays && iDays <= 10) {
                $('.item2').css('display', 'block')
            }

            //motel condition
            if ((2 <= totalGuestNumber && totalGuestNumber <= 4) && 2 < iDays && iDays <= 10) {
                $('.item3').css('display', 'block')
            }

            if (totalGuestNumber >= 1 && totalGuestNumber <= 4 && iDays >= 2 && iDays <= 15) {
                $('.item4').css('display', 'block')
            }

            addRightRemoveCurrent($('.calendar-page'))
            removeRightAddCurrent($('.accommodation-page'))

        } else {
            console.log(a + ' and ' + b + ' is empty')
        }
        console.log(a, b, iDays);
    })

    $('.accommodation-to-calendar').children().on('click', function () {
        $('.item1').css('display', 'none')
        $('.item2').css('display', 'none')
        $('.item3').css('display', 'none')
        $('.item4').css('display', 'none')
        addRightRemoveCurrent($('.accommodation-page'))
        removeRightAddCurrent($('.calendar-page'))
    })

    $('.meal-options').on('click', function () {
        let hotelMeal = `<div class="meal-counter">
        <div class="meal-counter-container">
            <div class="meal-text">
                <h4><span class="meal-type">Breakfast</span></h4>
                <h5>Includes:</h5>
                <h5><span class="meal-content">Soup, bread and Egg</span></h5>
                <h4>$<span class="meal-price">12</span></h4>
            </div>
            <div class="meal-numbers">
                <i class="fas fa-minus"></i>
                <input type="number" maxlength="2" value="0" />
                <i class="fas fa-plus"></i>
            </div>
        </div>
        <div class="meal-counter-container">
            <div class="meal-text">
                <h4><span class="meal-type">Lunch</span></h4>
                <h5>Includes:</h5>
                <h5><span class="meal-content">Ask for Chef's special!</span></h5>
                <h4>$<span class="meal-price">15</span></h4>
            </div>
            <div class="meal-numbers">
                <i class="fas fa-minus"></i>
                <input type="number" maxlength="2" value="0" />
                <i class="fas fa-plus"></i>
            </div>
        </div>
        <div class="meal-counter-container">
            <div class="meal-text">
                <h4><span class="meal-type">Dinner</span></h4>
                <h5>Includes:</h5>
                <h5><span class="meal-content">Full Dinner course</span></h5>
                <h4>$<span class="meal-price">25</span></h4>
            </div>
            <div class="meal-numbers">
                <i class="fas fa-minus"></i>
                <input type="number" maxlength="2" value="0" />
                <i class="fas fa-plus"></i>
            </div>
        </div>
    </div>`
        let hostelMeal = `<div class="meal-counter">
        <h1>We're sorry, this accommodation does not provide any meals</h1></div>`
        let motelMeal = `<div class="meal-counter">
        <div class="meal-counter-container">
            <div class="meal-text">
                <h4><span class="meal-type">Breakfast</span></h4>
                <h5>Includes:</h5>
                <h5><span class="meal-content">Cereal, bread and egg</span></h5>
                <h4>$<span class="meal-price">8</span></h4>
            </div>
            <div class="meal-numbers">
                <i class="fas fa-minus"></i>
                <input type="number" maxlength="2" value="0" />
                <i class="fas fa-plus"></i>
            </div>
        </div>
        <div class="meal-counter-container">
            <div class="meal-text">
                <h4><span class="meal-type">Lunch</span></h4>
                <h5>Includes:</h5>
                <h5><span class="meal-content">Coffee and Cafe food</span></h5>
                <h4>$<span class="meal-price">10</span></h4>
            </div>
            <div class="meal-numbers">
                <i class="fas fa-minus"></i>
                <input type="number" maxlength="2" value="0" />
                <i class="fas fa-plus"></i>
            </div>
        </div>
        <div class="meal-counter-container">
            <div class="meal-text">
                <h4><span class="meal-type">Dinner</span></h4>
                <h5>Includes:</h5>
                <h5><span class="meal-content">Steak and BBQ</span></h5>
                <h4>$<span class="meal-price">15</span></h4>
            </div>
            <div class="meal-numbers">
                <i class="fas fa-minus"></i>
                <input type="number" maxlength="2" value="0" />
                <i class="fas fa-plus"></i>
            </div>
        </div>
    </div>`


        if ($(this).parent().parent().hasClass('item1')) {
            $('.meal-option-contents').prepend(hotelMeal)
            accommodationFee = (iDays * 157)
        } else if ($(this).parent().parent().hasClass('item2')) {
            $('.meal-option-contents').prepend(hostelMeal)
            accommodationFee = (iDays * 30)
        } else if ($(this).parent().parent().hasClass('item3')) {
            $('.meal-option-contents').prepend(motelMeal)
            accommodationFee = (iDays * 90)
        } else if ($(this).parent().parent().hasClass('item4')) {
            $('.meal-option-contents').prepend(hostelMeal)
            accommodationFee = (iDays * 240)
        }
        $('.total-meal-price').html(accommodationFee);
        addRightRemoveCurrent($('.accommodation-page'))
        removeRightAddCurrent($('.meal-page'))
    })

    $(document.body).on('click', '.meal-counter .fa-minus', function () {
        a = $(this).next();
        currentValue = parseInt(a.val(), 10);
        let mealPrice = $(this).parent().prev().children().next().next().next().children().html();

        if (currentValue > 0) {
            currentValue -= (1);
            a.val(currentValue);
            console.log(currentValue);
        } else {
            return;
        }


        if (currentValue == 0) {
            $(this).css('color', '#bebdbd');
            $(this).css('border', '#bebdbd solid 0.05rem');
        } else {
            $(this).css('color', '#6C6C6C');
            $(this).css('border', '#6C6C6C solid 0.05rem');
        }

        let mealTotal = mealPrice * currentValue;
        let prevMealTotal = mealPrice * (currentValue + 1);

        totalPrice = mealTotal + totalPrice - prevMealTotal;

        $('.total-meal-price').html(totalPrice + accommodationFee);
    })

    $(document.body).on('click', '.meal-counter .fa-plus', function () {

        a = $(this).prev();
        currentValue = parseInt(a.val(), 10);
        let mealPrice = $(this).parent().prev().children().next().next().next().children().html();
        currentValue += (1);
        a.val(currentValue);


        if (currentValue > 0) {
            $(this).prev().prev().css('color', '#6C6C6C');
            $(this).prev().prev().css('border', '#6C6C6C solid 0.05rem');
        } else {
            $(this).prev().prev().css('color', '#bebdbd');
            $(this).prev().prev().css('border', '#bebdbd solid 0.05rem');
        }

        // $('.meal-counter .meal-counter-container .meal-text .meal-price').each(function () {
        //     //console.log($(this).html())
        //     //currentPrice=(currentValue * parseInt($(this).html()))
        // });

        let mealTotal = mealPrice * currentValue;
        let prevMealTotal = mealPrice * (currentValue - 1);

        totalPrice = mealTotal + totalPrice - prevMealTotal;

        $('.total-meal-price').html(totalPrice + accommodationFee);

    })

    $('.meal-to-accommodation').children().on('click', function () {
        $('.meal-counter').remove();
        totalPrice = 0;
        $('.total-meal-price').html(0);
        addRightRemoveCurrent($('.meal-page'));
        removeRightAddCurrent($('.accommodation-page'));
    })

    $('.meal-to-payment').children().on('click', function () {
        addRightRemoveCurrent($('.meal-page'))
        removeRightAddCurrent($('.payment-page'))
    })

    $('#credit-card').on('keypress change', function () {
        $(this).val(function (index, value) {
            return value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
        });
    });

    $('.payment-to-meal').on('click', function(){
        addRightRemoveCurrent($('.payment-page'))
        removeRightAddCurrent($('.meal-page'))
    })


})
