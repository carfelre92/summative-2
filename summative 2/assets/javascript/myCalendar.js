export{lightpick};


let lightpick = new Lightpick({
    field: document.querySelector('.check-date'),
    singleDate: false,
    inline: true,
    //secondField: document.querySelector('.end-day'),
    numberOfMonths: 1,
    repick: true,
    selectBackward:false,
    tooltipNights:true,
    format: 'D/MM',
    showTooltip: true,
    hotelMode:true,
    minDate: moment(),
    minDays:2,
    maxDays:15,
    // maxDate: moment().add(15, 'day'),
    onSelect: function (start, end) {

        if (end != null && start !=null) {
            let iDays = end.diff(start, 'days');
            //console.log(iDays);

            //$('.item-container').css('display', 'block');
        }
    }
})


