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
    $(document).ready(function() {
        function show_popup() {
            $('#Loader').addClass('d-none');
        };
        window.setTimeout(show_popup, 1000);
    });
    $('.animation-fade-left').waypoint(function(direction) {
        $('.animation-fade-left').addClass('animate__animated animate__fadeInLeft')
    }, { offset: '85%' });
    $('.animation-fade-right').waypoint(function(direction) {
        $('.animation-fade-right').addClass('animate__animated animate__fadeInRight')
    }, { offset: '85%' });
    $('.animation-scroll-1').waypoint(function(direction) {
        $('.animation-scroll-1').addClass('animate__animated animate__backInLeft')
    }, { offset: '85%' });
    $('.animation-scroll-2').waypoint(function(direction) {
        $('.animation-scroll-2').addClass('animate__animated animate__backInRight')
    }, { offset: '85%' });

    $('.animation-scroll-3').waypoint(function(direction) {
        $('.animation-scroll-3').addClass('animate__animated animate__backInLeft')
    }, { offset: '85%' });
    $('.animation-scroll-4').waypoint(function(direction) {
        $('.animation-scroll-4').addClass('animate__animated animate__backInRight')
    }, { offset: '85%' });

    $('.animation-scroll-5').waypoint(function(direction) {
        $('.animation-scroll-5').addClass('animate__animated animate__backInLeft')
    }, { offset: '85%' });
    $('.animation-scroll-6').waypoint(function(direction) {
        $('.animation-scroll-6').addClass('animate__animated animate__backInRight')
    }, { offset: '85%' });

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

    $('.blog-delay-3').waypoint(function(direction) {
        $('.blog-delay-3').addClass('animate__animated animate__bounceInUp')
    }, { offset: '90%' });
    $('.blog-delay-2').waypoint(function(direction) {
        $('.blog-delay-2').addClass('animate__animated animate__bounceInUp')
    }, { offset: '90%' });
    $('.blog-delay-1').waypoint(function(direction) {
        $('.blog-delay-1').addClass('animate__animated animate__bounceInUp')
    }, { offset: '90%' });
});