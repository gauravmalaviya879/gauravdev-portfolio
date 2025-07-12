$(document).ready(function() {

    document.querySelectorAll('a[href^="#scroll"]').forEach(a => {

        a.addEventListener('click', function(e) {
            e.preventDefault();
            var href = this.getAttribute("href");
            var elem = document.querySelector(href) || document.querySelector("a[name=" + href.substring(1, href.length) + "]");

            window.scroll({
                top: elem.offsetTop,
                left: 0,
                behavior: 'smooth'
            });

        });

    });


});
$(document).ready(function() {
    // alert("asa")
    $('.animation-scroll-1').waypoint(function(direction) {
        $('.animation-scroll-1').addClass('animate__animated animate__backInLeft')
    }, { offset: '80%' });
    $('.animation-scroll-2').waypoint(function(direction) {
        $('.animation-scroll-2').addClass('animate__animated animate__backInRight')
    }, { offset: '80%' });
    $('.animation-scroll-3').waypoint(function(direction) {
        $('.animation-scroll-3').addClass('animate__animated animate__fadeInUp')
    }, { offset: '80%' });
    $('.animation-scroll-4').waypoint(function(direction) {
        $('.animation-scroll-4').addClass('animate__animated animate__fadeInRight')
    }, { offset: '80%' });
    var state = true;
    $('.animation-scroll-5').waypoint(function(direction) {
        if (state) {
            $('.count-h-number').each(function() {
                $(this).prop('Counter', $(this).val()).animate({
                    Counter: jQuery(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function(now) {
                        jQuery(this).text(Math.ceil(now));
                    }
                });
                state = false;
            });

        }
    }, { offset: '90%' });
    var life = true;
    $('.animation-scroll-8').waypoint(function(direction) {
        if (life) {
            $('.count-h-number-y').each(function() {
                $(this).prop('Counter', $(this).val()).animate({
                    Counter: jQuery(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function(now) {
                        jQuery(this).text(Math.ceil(now));
                    }
                });
                life = false;
            });

        }
    }, { offset: '90%' });

    $('.delay-1').waypoint(function(direction) {
        $('.delay-1').addClass('animate__animated animate__bounceInUp')
    }, { offset: '90%' });
    $('.delay-2').waypoint(function(direction) {
        $('.delay-2').addClass('animate__animated animate__bounceInUp')
    }, { offset: '90%' });
    $('.delay-3').waypoint(function(direction) {
        $('.delay-3').addClass('animate__animated animate__bounceInUp')
    }, { offset: '90%' });
    $('.delay-4').waypoint(function(direction) {
        $('.delay-4').addClass('animate__animated animate__bounceInUp')
    }, { offset: '90%' });
    $('.delay-5').waypoint(function(direction) {
        $('.delay-5').addClass('animate__animated animate__bounceInUp')
    }, { offset: '90%' });
    $('.delay-6').waypoint(function(direction) {
        $('.delay-6').addClass('animate__animated animate__bounceInUp')
    }, { offset: '90%' });
    $('.delay-7').waypoint(function(direction) {
        $('.delay-7').addClass('animate__animated animate__bounceInUp')
    }, { offset: '90%' });
    $('.delay-8').waypoint(function(direction) {
        $('.delay-8').addClass('animate__animated animate__bounceInUp')
    }, { offset: '90%' });
    $('.fad-in').waypoint(function(direction) {
        $('.fad-in').addClass('animate__animated animate__fadeIn')
    }, { offset: '90%' });
    $('.fad-up').waypoint(function(direction) {
        $('.fad-up').addClass('animate__animated animate__fadeInUp')
    }, { offset: '90%' });
    $('.fad-down').waypoint(function(direction) {
        $('.fad-down').addClass('animate__animated animate__fadeInDown')
    }, { offset: '90%' });
    $('.animation-scroll-6').waypoint(function(direction) {
        $('.animation-scroll-6').addClass('animate__animated animate__bounceInRight')
    }, { offset: '80%' });
    $('.animation-scroll-7').waypoint(function(direction) {
        $('.animation-scroll-7').addClass('animate__animated animate__bounceInLeft')
    }, { offset: '80%' });


});