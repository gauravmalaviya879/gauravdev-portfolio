
    $(document).on("click", ".btn-exploar-all", function(e) {
      e.preventDefault();
   
      var leftwidth = $(".fetaured-card").css("width");
      leftwidth = parseInt(leftwidth.replace("px", "")) + 15;
      $(".main-scroller-fetaured")
          .stop()
          .animate({ scrollLeft: `+=${leftwidth}` }, 800);
          
  });
  $(document).on("click", ".btn-tab-1", function(e) {
    e.preventDefault();
    $(".main-border .fil-1").addClass('fil-border');
    $(".main-border .fil-2").removeClass('fil-border');
    $('.btn-tab-1 p').addClass('active');
    $(".btn-tab-2 p").removeClass('active');
});
$(document).on("click", ".btn-tab-2", function(e) {
  e.preventDefault();
  $(".main-border .fil-2").addClass('fil-border');
  $(".main-border .fil-1").removeClass('fil-border');
  $('.btn-tab-2 p').addClass('active');
  $(".btn-tab-1 p").removeClass('active');
});
// serching menu

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
      var text =$("#myInput").val();
      if(text == ""){
        a[i].style.display = "none";
      }
      // var location = $(".location-input a").text();
      $(".location-a").click(function (e) { 
        e.preventDefault();
        var text = $(this).text();
        $(".location-input").val(text);
        $(".location-a").css("display","none");
      });
    }
  
  }
  $(".location-a").css("display","none");
