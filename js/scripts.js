$('.year').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});


$(".row1").on(function(){
	$("#happyHour").modal('toggle');
});

$(".partyTime").on(function(){
	$("#partyTime").modal('toggle');
});