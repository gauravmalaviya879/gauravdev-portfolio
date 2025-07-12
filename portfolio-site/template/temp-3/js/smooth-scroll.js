$(document).ready(function() {

    document.querySelectorAll('a[href^="#he"]').forEach(a => {
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
    // main-screen

    $('.animation-scroll-1').delay(1000).waypoint(function(direction) {
        $('.animation-scroll-1').addClass('animate__animated animate__delay-1s animate__fadeIn');
       
    }, { offset: '80%' })
    // 
    $('.servise-animation').waypoint(function(direction) {
        $(".servise-animation").addClass('animate__animated animate__fadeInLeft');
    }, { offset: '80%' });
    // shop
    $('.s-card-1').waypoint(function(direction) {
        $(".s-card-1").addClass('animate__animated  animate__bounceIn');
    }, { offset: '80%' });
    $('.s-card-2').waypoint(function(direction) {
        $(".s-card-2").addClass('animate__animated  animate__fadeIn');
    }, { offset: '80%' });
    $('.s-card-3').waypoint(function(direction) {
        $(".s-card-3").addClass('animate__animated  animate__fadeIn');
    }, { offset: '80%' });
    $('.s-card-4').waypoint(function(direction) {
        $(".s-card-4").addClass('animate__animated  animate__fadeIn');
    }, { offset: '80%' });
    $('.s-card-5').waypoint(function(direction) {
        $(".s-card-5").addClass('animate__animated  animate__fadeIn');
    }, { offset: '80%' });
    $('.s-card-6').waypoint(function(direction) {
        $(".s-card-6").addClass('animate__animated  animate__fadeIn');
    }, { offset: '80%' });
// blog
$('.bg-1').waypoint(function(direction) {
    $(".bg-1").addClass('animate__animated  animate__flipInY');
}, { offset: '80%' });
$('.bg-2').waypoint(function(direction) {
    $(".bg-2").addClass('animate__animated animate__delay-05s animate__flipInY');
}, { offset: '80%' });
$('.bg-3').delay(800).waypoint(function(direction) {
    $(".bg-3").addClass('animate__animated animate__delay-1s animate__flipInY');
}, { offset: '80%' });


    $('.sc-1-1').waypoint(function(direction) {
        $(".sc-1-1").addClass('animate__animated animate__fadeInLeft');
    }, { offset: '80%' });
    $('.sc-1-2').waypoint(function(direction) {
        $(".sc-1-2").addClass('animate__animated animate__fadeInRight');
    }, { offset: '80%' });
    $('.babersdetail').waypoint(function(direction) {
        $(".babersdetail").addClass('animate__animated animate__fadeInRight');
    }, { offset: '80%' });
    $('.hero-4-image-frame').waypoint(function(direction) {
        $(".hero-4-image-frame").addClass('animate__animated animate__fadeIn');
    }, { offset: '80%' });
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

    // textanimation
    $('.reviwe-card').waypoint(function(direction) {
        $('.reviwe-card').addClass('animate__animated animate__fadeIn')
    }, { offset: '80%' })
var textstate = true;
$('.reviwe-card').delay(1000).waypoint(function(direction) {
    if(textstate){
        function typeEffect(element, speed) {
            var text = element.innerHTML;
            element.innerHTML = "";
            var i = 0;
            var timer = setInterval(function() {
            if (i < text.length) {
              element.append(text.charAt(i));
              i++;
            } else {
              clearInterval(timer);
            }
          }, speed);
        }
        var speed = 100;
        var q1 = document.querySelector('.quetion');
        var q2 = document.querySelector('.quetion-1');
        var q3 = document.querySelector('.quetion-2');
        var q4 = document.querySelector('.quetion-3');
        typeEffect(q1, speed)
        typeEffect(q2, speed)
        typeEffect(q3, speed)
        typeEffect(q4, speed)
    }
    textstate = false;
   
}, { offset: '80%' });

// gallery animation
$('.fad-up').waypoint(function(direction) {
    $('.fad-up').addClass('animate__animated animate__fadeInUp')
}, { offset: '80%' });
$('.fad-down').waypoint(function(direction) {
    $('.fad-down').addClass('animate__animated animate__fadeInDown')
}, { offset: '80%' });
// 
$('.logo-ani').waypoint(function(direction) {
    $(".logo-ani").addClass('animate__animated  animate__fadeIn');
}, { offset: '80%' });
});



