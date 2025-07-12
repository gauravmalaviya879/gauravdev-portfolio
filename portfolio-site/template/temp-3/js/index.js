$(document).ready(function() {


//  hero-3 pagination
 var data = [
    {  
      "id":"1",
      "title": "Badass Beard Trim ",
      "content": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi suscipit placeat, reprehenderit iusto architecto officia temporibus nostrum odio sint nam culpa, dolorum, fugiat nobis impedit! Lorem ipsum dolor sit amet consectetur,",
      "morecontent": "Fresha is the only 100% subscription free salon software and appointment scheduling software on the market.",
      "minut": "54",
      "price": "31",
      "image": "./image/saving-barid.png"
    },
    {
        "id":"2",
        "title": "It Make it Easier  ",
        "content": "Secondly, having all your hair salon services spelled out on your website and in your salon booking system will also improve your performance on search. dolorum, fugiat nobis impedit! Lorem ipsum dolor sit amet consectetur",
        "morecontent": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi suscipit placeat ",
        "minut": "55",
        "price": "30",
        "image": "./image/hero-boy-2.png"
      },
      {
        "id":"3",
        "title": "Digital Hair Salon  ",
        "content": "The reason you want to make sure you have your price list on your website is two-fold.  fugiat nobis impedit! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius natus distinctio quos praesentium dolore commodi porro ",
        "morecontent": "First, it will allow you to set the expectations for what you’ll charge before the client comes to your salon. ",
        "minut": "54",
        "price": "31",
        "image": "./image/saving-barid.png"
      },{
        "id":"4",
        "title": "Printed Hair Salon ",
        "content": "The list below covers the common core services that you just need to have on your menu. However, it also goes beyond that to recommend some unique service ideas and add-ons that you can use to increase the spend per client visit. ",
        "morecontent": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi suscipit placeat, reprehenderit iusto architecto officia  ",
        "minut": "55",
        "price": "30",
        "image": "./image/hero-boy-2.png"
      },
      {
        "id":"5",
        "title": "Digital Hair Salon  ",
        "content": "The reason you want to make sure you have your price list on your website is two-fold.  fugiat nobis impedit! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius natus distinctio quos praesentium dolore commodi porro ",
        "morecontent": "First, it will allow you to set the expectations for what you’ll charge before the client comes to your salon. ",
        "minut": "54",
        "price": "31",
        "image": "./image/saving-barid.png"
      }
  ]
  console.log(data[0])
 $(".all-page").text(data.length)
 var servicedata = `<div class="d-flex flex-column ">
 <h2 class="font-bold-play salon-title font-42 text-salon-dark">${data[0].title}</h2>
 <div class="my-md-4 my-3">
<p class="font-light-product font-20 mt-md-3 mt-2 pr-lg-4  content text-salon-dark">
        ${data[0].content}
</p>
<p class="font-light-product font-20 my-md-3 my-2 pr-lg-4 morecontent text-salon-dark">
${data[0].morecontent}
</p>
</div>
<div class="d-flex">
<div class="d-flex flex-column me-lg-5 me-4">
 <div class="font-50 font-bold-play  minuts-val text-salon-dark">${data[0].minut}</div>
 <div class="font-light-product text-uppercase let-space-01em font-18 text-dark-muted">minutes</div>
</div>
<div class="d-flex flex-column ">
 <div class="font-50 font-bold-play text-salon-dark">$${data[0].price}</div>
 <div class="font-light-product text-uppercase let-space-01em font-18 text-dark-muted">price</div>
</div>
</div>
<div class="mt-5">
<a href="#" class="btn-hero-3 center let-space-01em  font-reg-prod font-15 text-decoration text-uppercase">book online</a>
</div>
</div> `;
var imagehero3 =`<div class="img-hero-3-box animate__animated  animate__fadeIn">
<img src="${data[0].image}" class="" alt="">
</div>`;

$(".main-box-service").append(servicedata);
$(".image-box-hero-3").append(imagehero3);

var currentpage = $(".current-page").text();
if(currentpage == ""){
  currentpage = 1;
  $(".current-page").text(currentpage);
 }

 $(".prev-next").on('click', function () {
  currentpage = $(".current-page").text();
        currentpage++
        var datapage =  currentpage
        datapage--
       if( currentpage <=   data.length){
          $(".current-page").text(currentpage);
          $.each(data, function (key, data) {
                    if( datapage == key){
                    //   console.log(data)
                      var servicedata = `<div class="d-flex flex-column animate__animated animate__fadeInLeft">
 <h2 class="font-bold-play salon-title font-42 text-salon-dark">${data.title}</h2>
 <div class="my-md-4 my-3">
<p class="font-light-product font-20 mt-md-3 mt-2 pr-lg-4  content text-salon-dark">
        ${data.content}
</p>
<p class="font-light-product font-20 my-md-3 my-2 pr-lg-4 morecontent text-salon-dark">
${data.morecontent}
</p>

</div>
<div class="d-flex">
<div class="d-flex flex-column me-lg-5 me-4">
 <div class="font-50 font-bold-play minuts-val text-salon-dark">${data.minut}</div>
 <div class="font-light-product text-uppercase let-space-01em font-18 text-dark-muted">minutes</div>
</div>
<div class="d-flex flex-column ">
 <div class="font-50 font-bold-play text-salon-dark">$${data.price}</div>
 <div class="font-light-product text-uppercase let-space-01em font-18 text-dark-muted">price</div>
</div>
</div>
<div class="mt-5">
<a href="#" class="btn-hero-3 center let-space-01em  font-reg-prod font-15 text-decoration text-uppercase">book online</a>
</div>
</div> `;
var imagehero3 =`<div class="img-hero-3-box animate__animated  animate__fadeIn">
<img src="${data.image}" class="" alt="">
</div>`;
$(".main-box-service").empty();
$(".main-box-service").append(servicedata);
$(".image-box-hero-3").empty();
$(".image-box-hero-3").append(imagehero3);
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
        if( currentpage <=   data.length){
            $(".current-page").text(currentpage);
            $.each(data, function (key, data) {
                      if( datapage == key){
                        var servicedata = `<div class="d-flex flex-column animate__animated animate__fadeInRight">
                        <h2 class="font-bold-play salon-title font-42 text-salon-dark">${data.title}</h2>
                        <div class="my-md-4 my-3">
                       <p class="font-light-product font-20 mt-md-3 mt-2 pr-lg-4  content text-salon-dark">
                               ${data.content}
                       </p>
                       <p class="font-light-product font-20 my-md-3 my-2 pr-lg-4 morecontent text-salon-dark">
                       ${data.morecontent}
                       </p>
                       
                       </div>
                       <div class="d-flex">
                       <div class="d-flex flex-column me-lg-5 me-4">
                        <div class="font-50 font-bold-play minuts-val text-salon-dark">${data.minut}</div>
                        <div class="font-light-product text-uppercase let-space-01em font-18 text-dark-muted">minutes</div>
                       </div>
                       <div class="d-flex flex-column ">
                        <div class="font-50 font-bold-play text-salon-dark">$${data.price}</div>
                        <div class="font-light-product text-uppercase let-space-01em font-18 text-dark-muted">price</div>
                       </div>
                       </div>
                       <div class="mt-5">
                       <a href="#" class="btn-hero-3 center let-space-01em  font-reg-prod font-15 text-decoration text-uppercase">book online</a>
                       </div>
                       </div> `;
                       var imagehero3 =`<div class="img-hero-3-box animate__animated  animate__fadeIn">
                        <img src="${data.image}" class="" alt="">
                        </div>`;

                       $(".main-box-service").empty();
                       $(".main-box-service").append(servicedata);
                       $(".image-box-hero-3").empty();
                       $(".image-box-hero-3").append(imagehero3);
                    //    $(".img-hero-3-box img").attr("src",data.image);
                      }
            });
         }
      }
});
//  hero-4 pagination
  
var barbers = [
  {  
    "id":"1",
    "name": "Henri Thomas",
    "skill": "HAIR CUT SPECIALIST",
    "content": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentiallz unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages. It has survived not only fivecenturies, but also the leap into electronic typesetting.",
    "facbook": "https://www.facebook.com/home.php",
    "igram": "https://www.instagram.com/",
    "twitter": "https://twitter.com/i/flow/login",
    "call":"+1 956396 2563",
    "image":"./image/barid&cap.png"
  },
  {  
    "id":"2",
    "name": "Joseph Rainey 1",
    "skill": "Styling and shaping clients' hair",
    "content": "Rainey was seated December 12, 1870 and was re-elected to Congress, serving a total of four terms. Serving until March 3, 1879, he established a record of length of service for a black Congressman that was not surpassed until that of William L.  ",
    "facbook": "https://www.facebook.com/home.php",
    "igram": "https://www.instagram.com/",
    "twitter": "https://twitter.com/i/flow/login",
    "call":"+1 656396 2563",
    "image":"./image/hero-boy-2.png"
  },
  {  
    "id":"3",
    "name": "Yahia Jaber ",
    "skill": "make up artist",
    "content": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentiallz unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages. It has survived not only fivecenturies, but also the leap into electronic typesetting.",
    "facbook": "https://www.facebook.com/home.php",
    "igram": "https://www.instagram.com/",
    "twitter": "https://twitter.com/i/flow/login",
    "call":"+1 756396 2563",
    "image":"./image/barid&cap.png"
  },
  {  
    "id":"4",
    "name": "Yahia Jaber ",
    "skill": "Cleaning their work station",
    "content": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentiallz unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages. It has survived not only fivecenturies, but also the leap into electronic typesetting.",
    "facbook": "https://www.facebook.com/home.php",
    "igram": "https://www.instagram.com/",
    "twitter": "https://twitter.com/i/flow/login",
    "call":"+1 956396 2563",
    "image":"./image/barber-styles.png"
  }
]

 var barbersdetail =  `<div><h3 class="font-40 text-salon-gray font-bold-play text-capitalize">${barbers[0].name}</h3>
 <p class="font-15 font-light-product text-salon-gray let-space-02em ">${barbers[0].skill}</p>
 <div class="font-17 icon-nav py-md-2">
     <a target="_blank" href="${barbers[0].facbook}" class="mr-2"><i class="fa-brands  fa-facebook"></i></a>
     <a target="_blank" href="${barbers[0].twitter}" class="mx-2"><i
     class="fa-brands fa-twitter-square"></i></a>
     <a target="_blank" href="${barbers[0].igram}" class="mx-2"><i
         class="fa-brands fa-instagram"></i></a>
 </div>
 <p class="font-light-product font-20 py-4  text-muted-salon">${barbers[0].content}</p>
 <a href="#" class="center text-decoration call-btn-service">
     <i class="fa-solid text-salon-gray font-20 fa-phone"></i>
     <div class="ms-2 let-space-02em font-15 text-salon-gray font-light-product">${barbers[0].call}</div>
 </a></div>`;
 var imagebox = `<div class="sub-frame animate__animated  animate__fadeIn"><img src="${barbers[0].image}" class="" alt=""></div>`;
 $(".hero-4-image-frame").empty();
 $(".hero-4-image-frame").append(imagebox);
 console.log(barbers);
 $(".all-page-4").text(barbers.length);
 $(".babersdetail").empty();
 $(".babersdetail").append(barbersdetail);
// btn controll data
var cpage = $(".current-page-4").text();
   if(cpage == ""){
    cpage = 1;
    $(".current-page-4").text(cpage);
   }

 $(".prev-next-4").on('click', function () {
       cpage = $(".current-page-4").text();
       cpage++
       var dpage = cpage
       dpage--
       if( cpage <= barbers.length){
        $(".current-page-4").text(cpage);
        $.each(barbers, function (key, barber) { 
          if(dpage == key){
            console.log(barber)
            var barbersdetail =  `<div class="animate__animated animate__fadeInRight"><h3 class="font-42 text-salon-gray font-bold-play text-capitalize">${barber.name}</h3>
            <p class="font-15 font-light-product text-salon-gray let-space-02em ">${barber.skill}</p>
            <div class="font-17 icon-nav py-md-2">
                <a target="_blank" href="${barber.facbook}" class="mr-2"><i class="fa-brands  fa-facebook"></i></a>
                <a target="_blank" href="${barber.twitter}" class="mx-2"><i
                class="fa-brands fa-twitter-square"></i></a>
                <a target="_blank" href="${barber.igram}" class="mx-2"><i
                    class="fa-brands fa-instagram"></i></a>
            </div>
            <p class="font-light-product font-20 py-4  text-muted-salon">${barber.content}</p>
            <a href="#" class="center text-decoration call-btn-service">
                <i class="fa-solid text-salon-gray font-20 fa-phone"></i>
                <div class="ms-2 let-space-02em font-15 text-salon-gray font-light-product">${barber.call}</div>
            </a></div>`;
            var imagebox = `<div class="sub-frame animate__animated  animate__fadeIn"><img src="${barber.image}" class="" alt=""></div>`;
            $(".babersdetail").empty();
            $(".babersdetail").append(barbersdetail);
            $(".hero-4-image-frame").empty();
            $(".hero-4-image-frame").append(imagebox);
          }
        });
       }
 });

 $(".prev-btn-4").on('click', function () {
  var cpage = $(".current-page-4").text();
  cpage--
  var dpage =  cpage
  dpage--
  if(dpage >= 0){
    if( cpage <=   barbers.length){
      $(".current-page-4").text(cpage);
      $.each(barbers, function (key, barber) { 
        if( dpage == key){  
          console.log(barber)
          var barbersdetail =  `<div class="animate__animated animate__fadeInLeft"><h3 class="font-42 text-salon-gray font-bold-play text-capitalize">${barber.name}</h3>
          <p class="font-15 font-light-product text-salon-gray let-space-02em ">${barber.skill}</p>
          <div class="font-17 icon-nav py-md-2">
              <a target="_blank" href="${barber.facbook}" class="mr-2"><i class="fa-brands  fa-facebook"></i></a>
              <a target="_blank" href="${barber.twitter}" class="mx-2"><i
              class="fa-brands fa-twitter-square"></i></a>
              <a target="_blank" href="${barber.igram}" class="mx-2"><i
                  class="fa-brands fa-instagram"></i></a>
          </div>
          <p class="font-light-product font-20 py-4  text-muted-salon">${barber.content}</p>
          <a href="#" class="center text-decoration call-btn-service">
              <i class="fa-solid text-salon-gray font-20 fa-phone"></i>
              <div class="ms-2 let-space-02em font-15 text-salon-gray font-light-product">${barber.call}</div>
          </a></div>`;
          var imagebox = `<div class="sub-frame animate__animated  animate__fadeIn"><img src="${barber.image}" class="" alt=""></div>`; 
          $(".babersdetail").empty();
          $(".babersdetail").append(barbersdetail);
          $(".hero-4-image-frame").empty();
          $(".hero-4-image-frame").append(imagebox);
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
