$(document).ready(function () {
 
// carousel one
var traningData = [
    {  
      "id":"1",
      "title": "Complimantory food and enery drinks provide daily ",
      "content": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Loremunchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."
     
    },
    {  
        "id":"2",
        "title": "Complimantory food two and enery drinks provide daily ",
        "content": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Loremunchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."
       
    },
    {  
        "id":"3",
        "title": "Complimantory food three and enery drinks provide daily ",
        "content": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Loremunchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."
        
    },
    {  
      "id":"4",
      "title": "Complimantory food two and enery drinks provide daily ",
      "content": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Loremunchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."
   
   },{  
    "id":"5",
    "title": "Complimantory food three and enery drinks provide daily ",
    "content": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Loremunchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."
    
 }

];


// console.log(traningData[0]);
$(".all-page").text(traningData.length)

var dataTraning = `<div class="sub-traning-one">
<div class="main-traning-2-detail">
  <div class="icon-box-traning2 center" >
   <i class="fa-solid fa-apple-whole text-green-web font-30"></i>
  </div>
  <div class="width-55">
   <h2 class="text-muted-dark my-4 text-end monst-ex-bold font-40">${traningData[0].title}</h2> 
  </div>
  <p class="text-muted-dark text-end monst-light font-20">${traningData[0].content}</p>
</div>
</div>`;
$(".sub-traning-append").append(dataTraning);





// 
var currentpage = $(".current-page").text();
if(currentpage == ""){
  currentpage = 1;
  $(".current-page").text(currentpage);
 }
 
 $('.prev-next').on('click', function () {
    currentpage = $(".current-page").text();
    currentpage++
    var datapage =  currentpage
    datapage--
    if( currentpage <= traningData.length){
        $(".current-page").text(currentpage);
        $.each(traningData, function (key, data) {
                  if( datapage == key){
                        //   console.log(data)
                    var dataTraning = `<div class="sub-traning-one animate__animated animate__fadeInRight">
                    <div class="main-traning-2-detail">
                      <div class="icon-box-traning2 center" >
                       <i class="fa-solid fa-apple-whole text-green-web font-30"></i>
                      </div>
                      <div class="width-55">
                       <h2 class="text-muted-dark my-4 text-end monst-ex-bold font-40">${data.title}</h2> 
                      </div>
                      <p class="text-muted-dark text-end monst-light font-20">${data.content}</p>
                    </div>
                    </div>`;   

                    $(".sub-traning-append").empty();
                    $(".sub-traning-append").append(dataTraning);
                  } 
                  });

    }
 });
 $(".prev-btn").on('click', function () {
  var currentpage = $(".current-page").text();
    currentpage--
    var datapage =  currentpage
    datapage--
    if(datapage >= 0){
      if( currentpage <=   traningData.length){
        $(".current-page").text(currentpage);
        $.each(traningData, function (key, data) {
          if( datapage == key){
            var dataTraning = `<div class="sub-traning-one animate__animated animate__fadeInLeft">
            <div class="main-traning-2-detail">
              <div class="icon-box-traning2 center" >
               <i class="fa-solid fa-apple-whole text-green-web font-30"></i>
              </div>
              <div class="width-55">
               <h2 class="text-muted-dark my-4 text-end monst-ex-bold font-40">${data.title}</h2> 
              </div>
              <p class="text-muted-dark text-end monst-light font-20">${data.content}</p>
            </div>
            </div>`;   
            $(".sub-traning-append").empty();
            $(".sub-traning-append").append(dataTraning);

          //   var imgTraning =`<div class="img-traner animate__animated  animate__fadeIn">
          //   <img src="${data.image}" class="img-fluid " alt="">
          // </div>`;

          //   $(".img-traningcontrol-jq").empty();
          //   $(".img-traningcontrol-jq").append(imgTraning);

          }
        });
      }
    }
  });

// carousel review
var review = [
  {  
    "id":"1",
    "title": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially. but also the leap into electronic eap into remaining essentially. typesetting, remaining essentially.",
    "name": "HARRY THOMAS"
  },
  {  
    "id":"2",
    "title": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially. but also the leap into electronic eap into remaining essentially. typesetting, remaining essentially.",
    "name": "gaurav malviya"
  },
  {  
    "id":"3",
    "title": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially. but also the leap into electronic eap into remaining essentially. typesetting, remaining essentially.",
    "name": "kery THOMAS"
  },
  {  
    "id":"4",
    "title": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially. but also the leap into electronic eap into remaining essentially. typesetting, remaining essentially.",
    "name": "ankur kalkani"
  }


];
// scrren load
var reviewBlog = `<div class=" pt-4 pr-md-5 pr-3 text-box-detail "><h2 class="text-muted-dark font-25 monst-light text-end ">${review[0].title}</h2>
<div>
<h3 class="text-uppercase font-30  monst-light text-green-web text-end">${review[0].name}</h3>
</div> </div>`;
$(".review-detail").append(reviewBlog);

var curntreviwpage = $(".current-page-review").text();
if(curntreviwpage == ""){
  curntreviwpage = 1;
  $(".current-page-review").text(curntreviwpage);
 }

$('.prev-next-btn-review').on('click', function () {
  curntreviwpage = $(".current-page-review").text();
  curntreviwpage++
  var datapagerev =  curntreviwpage
  datapagerev--
  if( curntreviwpage <= review.length){
      $(".current-page-review").text(curntreviwpage);
      $.each(review, function (key, data) {
                if( datapagerev == key){
                      //   console.log(data)
                  var reviewBlog =  `<div class=" pt-4 pr-md-5 pr-3 text-box-detail animate__animated animate__fadeInRight"><h2 class="text-muted-dark font-25 monst-light text-end ">${data.title}</h2>
                  <div>
                  <h3 class="text-uppercase font-30  monst-light text-green-web text-end">${data.name}</h3>
                  </div> </div>`;   

                  $(".review-detail").empty();
                  $(".review-detail").append(reviewBlog);
                } 
                });

  }
});

 $(".prev-btn-review").on('click', function () {
  var curntreviwpage = $(".current-page-review").text();
  curntreviwpage--
    var datapagerev =  curntreviwpage
    datapagerev--
    if(datapagerev >= 0){
      if( curntreviwpage <=   review.length){
        $(".current-page-review").text(curntreviwpage);
        $.each(review, function (key, data) {
          if( datapagerev == key){
            var reviewBlog =  `<div class=" pt-4 pr-md-5 pr-3 text-box-detail animate__animated animate__fadeInLeft"><h2 class="text-muted-dark font-25 monst-light text-end ">${data.title}</h2>
                  <div>
                  <h3 class="text-uppercase font-30  monst-light text-green-web text-end">${data.name}</h3>
                  </div> </div>`;   

                  $(".review-detail").empty();
                  $(".review-detail").append(reviewBlog);

          }
        });
      }
    }
  });




});
function on() {
  document.getElementById("overlay-nav").style.display = "block";
  $("body").addClass("overflow-y-hide");
  $("#overlay-nav").addClass("animate__animated animate__fadeInLeft")
}

function off() {
  document.getElementById("overlay-nav").style.display = "none";
  $("body").removeClass("overflow-y-hide");

}   