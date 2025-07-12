$(document).ready(function () {
     // When the user scrolls the page, execute myFunction
 window.onscroll = function() { myFunction() };
 // Get the header

 var header = document.getElementById("navbarOne");


 // Get the offset position of the navbar
 var sticky = header.offsetTop;

 // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
 function myFunction() {
     if (window.pageYOffset > sticky) {
         header.classList.add("sticky");
         header.classList.add("bg-black");
        

     } else {
         header.classList.remove("sticky");
         header.classList.remove("bg-black");
     }
 }

// 

// $(document).ready(function() {
//     function show_popup() {
//         $('#Loader').addClass('d-none');
//     };
//     window.setTimeout(show_popup, 1000);
// });


$(document).on("click", "#rightBtn", function(e) {
    e.preventDefault();
    // alert("hello")
    width = $(".card-item").css("width");
    width = parseInt(width.replace("px", "")) + 15;
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



});
