$(document).ready(function() {
    $('.about-animation-one').waypoint(function(direction) {
        $('.about-animation-one').addClass('animate__animated animate__fadeInLeft')
    }, { offset: '50%' })

    $('.scroll-x-flip').waypoint(function(direction) {
        $('.scroll-x-flip').addClass('animate__animated animate__flipInX')
    }, { offset: '50%' })
    $('.delay-1').waypoint(function(direction) {
        $('.delay-1').addClass('animate__animated animate__bounceInUp')
    }, { offset: '90%' })
    $('.delay-2').waypoint(function(direction) {
        $('.delay-2').addClass('animate__animated animate__bounceInUp')
    }, { offset: '90%' })
    $('.delay-3').waypoint(function(direction) {
        $('.delay-3').addClass('animate__animated animate__bounceInUp')
    }, { offset: '90%' })
    $('.delay-4').waypoint(function(direction) {
        $('.delay-4').addClass('animate__animated animate__bounceInUp')
    }, { offset: '90%' })
    $('.card-lowyer-animation').waypoint(function(direction) {
        $('.card-lowyer-animation').addClass('animate__animated animate__fadeInUp')
    }, { offset: '70%' })
    $('.animation-flip-all').waypoint(function(direction) {
        $('.animation-flip-all').addClass('animate__animated animate__fadeInLeft')
    }, { offset: '70%' })
    $('.bounc-animation-two').waypoint(function(direction) {
        $('.bounc-animation-two').addClass('animate__animated animate__bounceInRight')
    }, { offset: '70%' })
    $('.bounc-animation-one').waypoint(function(direction) {
        $('.bounc-animation-one').addClass('animate__animated animate__bounceInLeft')
    }, { offset: '70%' })
    $('.bounce-three').waypoint(function(direction) {
        $('.bounce-three').addClass('animate__animated animate__bounceInRight')
    }, { offset: '70%' })
    var state = true;
    $('.animation-scroll-count').waypoint(function(direction) {
        if (state) {
            $('.count-h-low').each(function() {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function(now) {
                        $(this).text(Math.ceil(now));
                    }
                })
            });
            state = false;
        }
    }, { offset: '95%' });

});