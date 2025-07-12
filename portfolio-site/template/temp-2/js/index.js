$(document).ready(function () {

    // car-1
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
     // When the user scrolls the page, execute myFunction
 window.onscroll = function() { myFunction() };
 // Get the header

 var header = document.getElementById("nav-1");
  // Get the offset position of the navbar
 var sticky = header.offsetTop;

 // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
 function myFunction() {
     if (window.pageYOffset > sticky) {
         header.classList.add("sticky");
         header.classList.add("bg-white");
     } else {
         header.classList.remove("sticky");
         header.classList.remove("bg-white");
     }
 }


// card-1-btn
//    carousel testomonial
// $(window).resize(function() {
//     var windowsize = $(window).width();
//   });
//   var windowsize = $(window).width();
 
var windowsize = $(window).width();
console.log(windowsize)
if(windowsize > 1200){
  var $swiper = $(".swiper-container");
  var $bottomSlide = null; 
  var $bottomSlideContent = null; 

  var mySwiper = new Swiper(".swiper-container", {
    spaceBetween: 1,
    slidesPerView: 3,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 30,
    navigation: {
      nextEl: ".test-button-next",
      prevEl: ".test-button-prev"
    }
  
  });
}

$(document).ready(function(){
    $(window).resize(function(e){
        e.preventDefault();
    var windowsize = $(window).width();
  console.log(windowsize)
 
  
  if(windowsize > 1200){
    var $swiper = $(".swiper-container");
    var $bottomSlide = null; 
    var $bottomSlideContent = null; 

    var mySwiper = new Swiper(".swiper-container", {
      spaceBetween: 1,
      slidesPerView: 3,
      centeredSlides: true,
      roundLengths: true,
      loop: true,
      loopAdditionalSlides: 30
      
    });
}
if(windowsize < 1200){

var $swiper = $(".swiper-container");
var $bottomSlide = null; 
var $bottomSlideContent = null; 
var mySwiper = new Swiper(".swiper-container", {
  spaceBetween: 1,
  slidesPerView: 1,
  centeredSlides: true,
  roundLengths: true,
  loop: true,
  loopAdditionalSlides: 30,
   autoplay: {
      delay: 3000,
    }
});
  
   
}
  });
});

});