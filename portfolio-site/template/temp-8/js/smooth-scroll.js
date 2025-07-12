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
    $('.animation-scroll-1').delay( 1000 ).waypoint(function(direction) {
        $('.animation-scroll-1').addClass('animate__animated animate__delay-1s animate__fadeInUp')
    }, { offset: '80%' })
    $('.btn-up').waypoint(function(direction) {
        $('.btn-up').addClass('animate__animated animate__fadeInUp')
    }, { offset: '80%' })
    $('.fad-up').waypoint(function(direction) {
        $('.fad-up').addClass('animate__animated animate__fadeInUp')
    }, { offset: '90%' });
    $('.fad-down').waypoint(function(direction) {
        $('.fad-down').addClass('animate__animated animate__fadeInDown')
    }, { offset: '90%' });
    $('.delay-1').waypoint(function(direction) {
        $('.delay-1').addClass('animate__animated animate__flipInY')
    }, { offset: '92%' });
    $('.delay-2').waypoint(function(direction) {
        $('.delay-2').addClass('animate__animated animate__flipInY')
    }, { offset: '92%' });
    $('.delay-3').waypoint(function(direction) {
        $('.delay-3').addClass('animate__animated animate__flipInY')
    }, { offset: '92%' });
    $('.delay-4').waypoint(function(direction) {
        $('.delay-4').addClass('animate__animated animate__flipInY')
    }, { offset: '92%' });
    $('.delay-5').waypoint(function(direction) {
        $('.delay-5').addClass('animate__animated animate__flipInY')
    }, { offset: '92%' });
    $('.delay-6').waypoint(function(direction) {
        $('.delay-6').addClass('animate__animated animate__flipInY')
    }, { offset: '92%' });
    $('.delay-7').waypoint(function(direction) {
        $('.delay-7').addClass('animate__animated animate__flipInY')
    }, { offset: '92%' });
    $('.delay-8').waypoint(function(direction) {
        $('.delay-8').addClass('animate__animated animate__flipInY')
    }, { offset: '92%' });
    $('.delay-b-1').waypoint(function(direction) {
        $('.delay-b-1').addClass('animate__animated animate__flipInY')
    }, { offset: '92%' });
    $('.delay-b-2').waypoint(function(direction) {
        $('.delay-b-2').addClass('animate__animated animate__flipInY')
    }, { offset: '92%' });
    $('.delay-b-3').waypoint(function(direction) {
        $('.delay-b-3').addClass('animate__animated animate__flipInY')
    }, { offset: '92%' });
    $('.delay-b-4').waypoint(function(direction) {
        $('.delay-b-4').addClass('animate__animated animate__flipInY')
    }, { offset: '92%' });
    $('.offer-baner-animation').waypoint(function(direction) {
        $('.offer-baner-animation').addClass('animate__animated animate__jello')
    }, { offset: '80%' });
    $('.fade-up-card').waypoint(function(direction) {
        $('.fade-up-card').addClass('animate__animated animate__fadeInUp')
    }, { offset: '90%' });
    $('.fade-down-card').waypoint(function(direction) {
        $('.fade-down-card').addClass('animate__animated animate__fadeInDown')
    }, { offset: '90%' });
});