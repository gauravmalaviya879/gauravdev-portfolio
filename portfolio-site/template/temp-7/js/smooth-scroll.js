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
    function show_popup() {
        $('#Loader').addClass('d-none');
    };
    window.setTimeout(show_popup, 1000);
});

$(document).ready(function() {
    $('.animation-scroll-1').waypoint(function(direction) {
        $('.animation-scroll-1').addClass('animate__animated animate__fadeInLeft')
    }, { offset: '80%' })

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
    $('.delay-5').waypoint(function(direction) {
        $('.delay-5').addClass('animate__animated animate__bounceInUp')
    }, { offset: '90%' })
    $('.delay-6').waypoint(function(direction) {
        $('.delay-6').addClass('animate__animated animate__bounceInUp')
    }, { offset: '90%' })
    $('.delay-7').waypoint(function(direction) {
        $('.delay-7').addClass('animate__animated animate__bounceInUp')
    }, { offset: '90%' })
    $('.delay-8').waypoint(function(direction) {
        $('.delay-8').addClass('animate__animated animate__bounceInUp')
    }, { offset: '90%' })

    $('.delay-9').waypoint(function(direction) {
        $('.delay-9').addClass('animate__animated animate__bounceInUp')
    }, { offset: '90%' })


    $('.scroll-amintion-flush').waypoint(function(direction) {
        $('.scroll-amintion-flush').addClass('animate__animated animate__fadeInTopRight')
    }, { offset: '50%' })
    $('.card-animation-blog').waypoint(function(direction) {
        $('.card-animation-blog').addClass('animate__animated animate__fadeInUp')
    }, { offset: '70%' })
    $('.logo-box-animation').waypoint(function(direction) {
        $('.logo-box-animation').addClass('animate__animated animate__fadeInRight')
    }, { offset: '80%' })
    $('.scroll-egg-animate').waypoint(function(direction) {
        $('.scroll-egg-animate').addClass('animate__animated animate__backInLeft')
    }, { offset: '80%' })
    $('.bounce-three').waypoint(function(direction) {
        $('.bounce-three').addClass('animate__animated animate__bounceInRight')
    }, { offset: '70%' })
    var state = true;
    $('.animation-scroll-2').waypoint(function(direction) {
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
            });
            state = false;
        }
    }, { offset: '80%' });

});