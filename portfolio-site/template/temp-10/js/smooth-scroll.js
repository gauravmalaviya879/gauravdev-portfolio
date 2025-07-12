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
    // alert("asa")
    $('.animation-scroll-1').waypoint(function(direction) {
        $('.animation-scroll-1').addClass('animate__animated animate__fadeInLeft')
    }, { offset: '80%' });
    $('.animation-scroll-2').waypoint(function(direction) {
        $('.animation-scroll-2').addClass('animate__animated animate__fadeInRight')
    }, { offset: '80%' });
    $('.animation-scroll-3').waypoint(function(direction) {
        $('.animation-scroll-3').addClass('animate__animated animate__fadeInDown')
    }, { offset: '80%' });
    $('.animation-scroll-4').waypoint(function(direction) {
        $('.animation-scroll-4').addClass('animate__animated animate__fadeInUp')
    }, { offset: '90%' });
    $('.animation-scroll-5').waypoint(function(direction) {
        $('.animation-scroll-5').addClass('animate__animated animate__slideInRight')
    }, { offset: '90%' });
    $('.animation-scroll-6').waypoint(function(direction) {
        $('.animation-scroll-6').addClass('animate__animated animate__slideInLeft')
    }, { offset: '90%' });
    $('.animation-scroll-7').waypoint(function(direction) {
        $('.animation-scroll-7').addClass('animate__animated animate__fadeIn')
    }, { offset: '90%' });
    $('.animation-scroll-8').waypoint(function(direction) {
        $('.animation-scroll-8').addClass('animate__animated animate__slideInRight')
    }, { offset: '90%' });
    $('.animation-scroll-9').waypoint(function(direction) {
        $('.animation-scroll-9').addClass('animate__animated animate__fadeIn')
    }, { offset: '90%' });
    $('.animation-scroll-01').waypoint(function(direction) {
        $('.animation-scroll-01').addClass('animate__animated animate__flipInX')
    }, { offset: '70%' });
    $('.animation-scroll-02').waypoint(function(direction) {
        $('.animation-scroll-02').addClass('animate__animated animate__fadeInUp')
    }, { offset: '60%' });
    $('.delay-1').waypoint(function(direction) {
        $('.delay-1').addClass('animate__animated animate__flipInX')
    }, { offset: '90%' });
    $('.delay-2').waypoint(function(direction) {
        $('.delay-2').addClass('animate__animated animate__flipInX')
    }, { offset: '90%' });
    $('.delay-3').waypoint(function(direction) {
        $('.delay-3').addClass('animate__animated animate__flipInX')
    }, { offset: '90%' });
    $('.delay-4').waypoint(function(direction) {
        $('.delay-4').addClass('animate__animated animate__flipInX')
    }, { offset: '90%' });
    $('.delay-5').waypoint(function(direction) {
        $('.delay-5').addClass('animate__animated animate__flipInX')
    }, { offset: '90%' });



});