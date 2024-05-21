//hide hu maii.................
// $('.main').click(function () {

//     $('#last').fadeOut(900);
// })
// $('.sed').click(function () {

//     $('#last').fadeIn(900);
// })

//console me print karna he............... 
// $('#last').click(function(){
//     console.log('clicked by human!!',this);
// });

// Events in jquery
// $('p').hover(function () {

//      console.log("Hovering");
//      })

// dblclick
// $('#last').dblclick(function () {
//     console.log('You clicked the  paragraph last');
// });

// mouseenter
// $('#p1').mouseenter(function () {
//     $('#p1').css("background-color","yellow")

// })

// $('#p1').mouseleave(function () {
//     $('#p1').css("background-color","gray")
// })

// hide & show 
// $(document).ready(function(){
//     $("#hide").click(function(){
//       $("span").hide();
//     });
//     $("#show").click(function(){
//       $("span").show();
//     });
//   });

//   // Fade IN Fade Out toggle
// $(document).ready(function(){
//     $("button").click(function(){
//       $("#div1").fadeToggle();
//       $("#div2").fadeToggle("slow");
//       $("#div3").fadeToggle(2000);
//     });
//   });

//slideup slidedown

// $(document).ready(function(){
//     $("#flip").click(function(){
//       $("#panel").slideToggle(5000);
//     });
//     $("#stop").click(function(){
//       $("#panel").stop();
//     });
//   });

//Animation
// $(document).ready(function(){
//     $("button").click(function(){
//       $("#div4").slideToggle(3000)
//     });
//   });

//validation alert

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }




  