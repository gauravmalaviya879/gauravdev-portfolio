$(document).ready(function() {

    document.querySelectorAll('a[href^="#"]').forEach(a => {

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


// hero-2
    
$('.left-hero-2').waypoint(function(direction) {
    $('.left-hero-2').addClass('animate__animated animate__slideInLeft')
}, { offset: '80%' });
$('.Right-hero-2').waypoint(function(direction) {
    $('.Right-hero-2').addClass('animate__animated animate__slideInRight')
}, { offset: '80%' });



var state = true;
$('#hero-3').waypoint(function(direction) {
    // alert("hello")
     
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
}, { offset: '90%' });

$('.delay-1').waypoint(function(direction) {
    $('.delay-1').addClass('animate__animated animate__fadeIn')
}, { offset: '90%' });

$('.delay-2').waypoint(function(direction) {
    $('.delay-2').addClass('animate__animated animate__fadeIn')
}, { offset: '90%' });

$('.delay-3').waypoint(function(direction) {
    $('.delay-3').addClass('animate__animated animate__fadeIn')
}, { offset: '90%' });

$('.delay-4').waypoint(function(direction) {
    $('.delay-4').addClass('animate__animated animate__fadeIn')
}, { offset: '90%' });

// for text
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



function textAnimation($class,$headingself,$magescroll){
    var  $magescroll = true;
    $($class).waypoint(function(direction) {
        $($headingself).addClass('heding-x');
        if($magescroll){
            var speed = 55;
            var q3 = document.querySelector($headingself);
            typeEffect(q3, speed)
        }
        $magescroll = false;
    }, { offset: '90%' });
}

textAnimation($class = '.text-trape',$headingself = '.heding' ,$magescroll = 'textstate');
textAnimation($class = '.text-trape-one',$headingself = '.heading-one' ,$magescroll = 'textOne')
textAnimation($class = '.text-trape-two',$headingself = '.heding-x-i' ,$magescroll = 'textTwo');
textAnimation($class = '.textFoure',$headingself = '.heding-x-ii' ,$magescroll = 'textFoure');
textAnimation($class = '.textFive',$headingself = '.hedingfive' ,$magescroll = 'textFive');
textAnimation($class = '.textSix',$headingself = '.hedingSix' ,$magescroll = 'textSix');
textAnimation($class = '.textseven',$headingself = '.hedingSeven' ,$magescroll = 'textSeven');


$('.animation-scroll-1').delay(1000).waypoint(function(direction) {
    $('.animation-scroll-1').addClass('animate__animated animate__delay-1s animate__fadeIn');
   
}, { offset: '90%' })

$('.adopt-card').waypoint(function(direction) {
    $('.adopt-card').addClass('animate__animated animate__fadeIn')
}, { offset: '90%' });

$('.product-card').waypoint(function(direction) {
    $('.product-card').addClass('animate__animated animate__fadeIn')
}, { offset: '80%' });
$('.name-adopt-owner').waypoint(function(direction) {
    $('.name-adopt-owner').addClass('animate__animated animate__fadeIn')
}, { offset: '80%' });
$('.pet-about-card').waypoint(function(direction) {
    $('.pet-about-card').addClass('animate__animated animate__fadeIn')
}, { offset: '80%' });

// faqs
$('.faqs-i').waypoint(function(direction) {
    $('.faqs-i').addClass('animate__animated animate__bounceInUp');
   
}, { offset: '95%' })
$('.faqs-ii').waypoint(function(direction) {
    $('.faqs-ii').addClass('animate__animated animate__bounceInUp');
   
}, { offset: '95%' })
$('.faqs-ii').waypoint(function(direction) {
    $('.faqs-iii').addClass('animate__animated animate__bounceInUp');
   
}, { offset: '95%' })
$('.faqs-iv').waypoint(function(direction) {
    $('.faqs-iv').addClass('animate__animated animate__bounceInUp');
   
}, { offset: '95%' })







});