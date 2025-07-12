$(document).ready(function () {
    // on click active
    // $(".nav-one-block").on("click", function (e) {
    //     e.preventDefault();
    //     $("#navbarnews").find(".active").removeClass("active");
    //     $(this).find(".triangle-div").addClass("active");
  
    // });
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
           $(".navbar-news").css({"background-color": "white", "color": "#000"});
           $(".nav-one-block p").css({"color": "#000"});
           $(".white-text").css({"color": "#000"});
           $(".triangle-div ").css({"border-color": "transparent transparent #000 transparent"});
       } else {
           header.classList.remove("sticky");
           $(".navbar-news").css({"background-color": "#000", "color": "#fff"});
           $(".nav-one-block p").css({"color": "#fff"});
           $(".white-text").css({"color": "#fff"});
           $(".triangle-div ").css({"border-color": "transparent transparent #fff transparent"});
       }
   }
});

  
  if (window.innerWidth <= 699){
    function openNav() {
        document.getElementById("mySidenav").style.width = "300px";
      }
   }else{
    function openNav() {
        document.getElementById("mySidenav").style.width = "400px";
      }
   }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }