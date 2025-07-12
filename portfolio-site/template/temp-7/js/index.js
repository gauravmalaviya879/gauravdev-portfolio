$(document).ready(function() {
    // When the user scrolls the page, execute myFunction
    window.onscroll = function() { myFunction() };
    // Get the header

    var header = document.getElementById("navbar-second");

    // Get the offset position of the navbar
    var sticky = header.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }

    // custome carousel
    $(document).on("click", "#rightBtn", function(e) {
        e.preventDefault();
        width = $(".card-item").css("width");
        width = parseInt(width.replace("px", "")) + 15;
        console.log(width)
        $(".carousel-main-cart-one")
            .stop()
            .animate({ scrollLeft: `+=${width}` }, 800);
    });

    $(document).on("click", "#leftBtn", function(e) {
        e.preventDefault();
        var leftwidth = $(".card-item").css("width");
        leftwidth = parseInt(leftwidth.replace("px", "")) + 15;
        $(".carousel-main-cart-one")
            .stop()
            .animate({ scrollLeft: `-=${leftwidth}` }, 800);
    });
    // card-1-btn
    $(document).on("click", "#rightBtn-card-1", function(e) {
        e.preventDefault();
        width = $(".card-item-category").css("width");
        width = parseInt(width.replace("px", "")) + 10;
        $(".carousel-main-div")
            .stop()
            .animate({ scrollLeft: `+=${width}` }, 800);
    });

    $(document).on("click", "#leftBtn-card-1", function(e) {
        e.preventDefault();
        var leftwidth = $(".card-item-category").css("width");
        leftwidth = parseInt(leftwidth.replace("px", "")) + 10;
        $(".carousel-main-div")
            .stop()
            .animate({ scrollLeft: `-=${leftwidth}` }, 800);
    });




});