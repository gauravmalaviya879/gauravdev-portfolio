$(document).on("click", "#rightBtn", function(e) {
    e.preventDefault();
    width = $(".card-item").css("width");
    width = parseInt(width.replace("px", "")) + 15;
    $(".carousel-main-cart-one")
        .stop()
        .animate({
            scrollLeft: `+=${width}`
        }, 800);
});

$(document).on("click", "#leftBtn", function(e) {
    e.preventDefault();
    var leftwidth = $(".card-item").css("width");
    leftwidth = parseInt(leftwidth.replace("px", "")) + 15;
    $(".carousel-main-cart-one")
        .stop()
        .animate({
            scrollLeft: `-=${leftwidth}`
        }, 800);
});
// card-1-btn
$(document).on("click", "#rightBtn-card-1", function(e) {
    e.preventDefault();
    width = $(".card-item-category").css("width");
    width = parseInt(width.replace("px", "")) + 10;
    $(".carousel-main-div")
        .stop()
        .animate({
            scrollLeft: `+=${width}`
        }, 800);
});

$(document).on("click", "#leftBtn-card-1", function(e) {
    e.preventDefault();
    var leftwidth = $(".card-item-category").css("width");
    leftwidth = parseInt(leftwidth.replace("px", "")) + 10;
    $(".carousel-main-div")
        .stop()
        .animate({
            scrollLeft: `-=${leftwidth}`
        }, 800);
});

// loader

$(document).ready(function() {
    $(window).load(function() {
        function show_popup() {
            $('#Loader').addClass('d-none');
        };
        window.setTimeout(show_popup, 1000);
    });
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
    // 

    // $('.navbar-toggler').on('click',function() {
    
    //     $('#lownav').removeClass('show');
    //   });
});