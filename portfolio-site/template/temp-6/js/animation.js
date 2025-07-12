$(document).ready(function () {
    
    // loader
    function show_popup() {
        $('#Loader').addClass('d-none');
    };
    window.setTimeout(show_popup, 1000);
    // $('.image-box-nav').addClass('animate__animated animate__backInUp');
    // $('.image-box-nav').waypoint(function(direction) {
    //     $('.image-box-nav').addClass('animate__animated animate__backInUp')
    // }, { offset: '80%' });

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



function textAnimation($headingself,$magescroll){
    var  $magescroll = true;
    $($headingself).addClass('heding-x');
    if($magescroll){
        var speed = 55;
        var q3 = document.querySelector($headingself);
        typeEffect(q3, speed)
    }
    $magescroll = false;
}
// loding after animation
setTimeout(function() {
    $('.main-box-nav-scrren').addClass('animate__animated animate__fadeIn');
    textAnimation($headingself = '.text-subheader-title' ,$magescroll = 'textstate');
  }, 1000)
//card animation
$('#hero-2').waypoint(function(direction) {
    $('.card-hero-2').addClass('animate__animated animate__bounceIn')
}, { offset: '50%' }); 
$('.img-traner').waypoint(function(direction) {
    $('.img-traner').addClass('animate__animated animate__fadeIn')
}, { offset: '60%' }); 
$('.sub-box-program').waypoint(function(direction) {
    $('.sub-box-program').addClass('animate__animated animate__fadeIn')
}, { offset: '55%' }); 
$('.card-subcription').waypoint(function(direction) {
    $('.card-subcription').addClass('animate__animated animate__fadeIn')
}, { offset: '90%' }); 
$('#chooseUs').waypoint(function(direction) {
    $('.img-box-choose').addClass('animate__animated animate__fadeIn')
}, { offset: '70%' }); 
var state = true;
$('#chooseUs').waypoint(function(direction) {
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