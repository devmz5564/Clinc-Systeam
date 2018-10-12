const bacolor='background';
const bawhite="#F8FBFF" //white color for background
const baGreen="#8BC34A" //Green color for background
const co='color';
const fcolor="#8BC34A"//Green color for font
const fcolor2="#F8FBFF"//White color for font
const dis="display"
$(document).ready(function(){
  $(".pl1,.p4,.p5,.p6").on("click", function() {
    $(".ourDoctor").css("margin-top", "250px");;
   });
  }); 
  $(document).ready(function(){
    $(".bu1,.bu2,.bu3,.bu4").on("click", function() {
      $(".ourDoctor").css("margin-top", "20px");;
     });
    });
$(document).ready(function(){
$(".bu1").on("click", function() {
  $(".color").css(bacolor, bawhite);
  $(".nu").css(co, fcolor);
  $(".bod").slideUp(1000);
  $(this).css(dis, "none");
  $(".pl1").css(dis,"block");
 });
});
$(document).ready(function(){
  $(".pl1").on("click", function() {
    $(".color").css(bacolor, baGreen);
    $(".bod2,.bod3,.bod4").slideDown(2000);
    $(".bod2,.bod3,.bod4").hide(2000);
    $(".nu").css(co, fcolor2);
    $(".bod").slideDown(1000);
    $(".bu1").show();
    $(this).css(dis, "none");
 });
});
$(document).ready(function(){
 $(".bu2").on("click", function() {
  $(".color2").css(bacolor, bawhite);
  $(".nu2").css(co, fcolor);
  $(".bod2").slideUp(1000);
  $(this).css(dis, "none");
  $(".p4").css(dis,"block");
 });
});
$(document).ready(function(){
$(".p4").on("click", function() {
  $(".color4,.color,.color3").css(bacolor, bawhite);
  $(".nu,.nu3,.nu4").css(co, fcolor);
  $(".p6,.p1,.p5").css(dis,"block");
  $(".bu1,.bu3,.bu4").css(dis,"none")
 $(".bod,.bod3,.bod4").slideDown(2000);
 $(".bod,.bod3,.bod4").hide(2000);
 $(".color2").css(bacolor, baGreen);
 $(".nu2").css(co, fcolor2);
 $(".bod2").slideDown(1000);
 $(".bu2").show();
 $(this).css(dis, "none");
});
});
$(document).ready(function(){
$(".bu3").on("click", function(e) {
  $(".color3").css(bacolor, bawhite);
  $(".nu3").css(co, fcolor);
  $(".bod3").slideUp(1000);
  $(this).css(dis, "none");
  $(".p5").css(dis,"block");
 });
});
$(document).ready(function(){
$(".p5").on("click", function(e) {
  $(".color4,.color,.color2").css(bacolor, bawhite);
  $(".nu,.nu2,.nu4").css(co, fcolor);
  $(".p6,.p1,.p4").css(dis,"block");
  $(".bu1,.bu2,.bu4").css(dis,"none")
 $(".bod,.bod2,.bod4").slideDown(2000);
 $(".bod,.bod2,.bod4").hide(2000);
 $(".nu3").css(co, fcolor2);
 $(".bod3").slideDown(1000);
 $(".color3").css(bacolor, baGreen);
 $(".bu3").show();
 $(this).css(dis, "none");
});
});
$(document).ready(function(){
$(".bu4").on("click", function(e) {
  $(".color4").css(bacolor, bawhite);
  $(".nu4").css(co, fcolor);
  $(".bod4").slideUp(1000);
  $(this).css(dis, "none");
  $(".p6").css(dis,"block");
 });
});
$(document).ready(function(){
$(".p6").on("click", function(e) {
 $(".color,.color3,.color2").css(bacolor, bawhite);
 $(".nu,.nu2,.nu3").css(co, fcolor);
 $(".p5,.p1,.p4").css(dis,"block");
 $(".bu1,.bu2,.bu3").css(dis,"none");
 $(".bod,.bod2,.bod3").slideDown(2000);
 $(".bod,.bod2,.bod3").hide(2000);
 $(".nu4").css(co, fcolor2);
 $(".bod4").slideDown(1000);
 $(".color4").css(bacolor, baGreen);
 $(".bu4").show();
 $(this).css(dis, "none");
});
});

$(document).ready(function(){
   $(".done").mouseover(function(e){
       }, function(e){
        var div = $(".zx");
        div.show();
        div.animate({top: '160px'}, "slow");
        div.animate({ opacity: '0.7'}, "slow");  
   });
});
$(document).ready(function(){
  $(".dtwo").mouseover(function(e){
      }, function(e){
       var div = $(".zx2");
       div.show();
       div.animate({top: '160px'}, "slow");
       div.animate({ opacity: '0.7'}, "slow");  
  });
});
$(document).ready(function(){
  $(".dthree").mouseover(function(e){
      }, function(e){
       var div = $(".zx3");
       div.show();
       div.animate({top: '160px'}, "slow");
       div.animate({ opacity: '0.7'}, "slow");  
  });
})
$(document).ready(function(){
  $(".dfour").mouseover(function(e){
      }, function(e){
       var div = $(".zx4");
       div.show();
       div.animate({top: '160px'}, "slow");
       div.animate({ opacity: '0.7'}, "slow");  
  });
})
$(document).ready(function(){
  $(".done2").mouseover(function(e){
      }, function(e){
       var div = $(".zx5");
       div.show();
       div.animate({top: '160px'}, "slow");
       div.animate({ opacity: '0.7'}, "slow");  
  });
})
$(document).ready(function(){
  $(".dtwo2").mouseover(function(e){
      }, function(e){
       var div = $(".zx6");
       div.show();
       div.animate({top: '160px'}, "slow");
       div.animate({ opacity: '0.7'}, "slow");  
  });
})

$(document).ready(function(){
  $(".dthree2").mouseover(function(e){
      }, function(e){
       var div = $(".zx7");
       div.show();
       div.animate({top: '160px'}, "slow");
       div.animate({ opacity: '0.7'}, "slow");  
  });
})
$(document).ready(function(){
  $(".dfour2").mouseover(function(e){
      }, function(e){
       var div = $(".zx8");
       div.show();
       div.animate({top: '160px'}, "slow");
       div.animate({ opacity: '0.7'}, "slow");  
  });
});
$(document).ready(function(){
$("#dr").on("click", function(e) {
  $(".done,.dtwo,.dthree,.dfour").slideUp(2000);
  $(".done2,.dtwo2,.dthree2,.dfour2").show();
  $(".done2,.dtwo2,.dthree2,.dfour2").fadeIn(2000);
  $("#dr").hide();
  $("#dr2").show();
});
});
$(document).ready(function(){
$("#dr2").on("click", function(e) {
  $(".done,.dtwo,.dthree,.dfour").slideDown(2000);
  $(".done2,.dtwo2,.dthree2,.dfour2").hide();
  $(".done2,.dtwo2,.dthree2,.dfour2").slideUp(2000)
  $("#dr").show();
  $("#dr2").hide();
});
});
$(document).ready(function(){
$(".aa").on("click", function(e) {
  location.reload();
});
});
$(document).ready(function(){
$(".show1,.me6,.me4,.me5").on("click", function(e) {
  $(".c1,.ab1,.Servise,.more,.ourDoctor,.event,.Contact2,.mobile").hide();
  $(".sent").css("margin-top", "20px");
  $(".aboutus,.w11").css("margin-top", "-60px");
  $(".abpic").css("margin-top", "100px");
  $(".wa1").css("margin-top", "100px");
  $(".fig1").css("margin-top", "200px");
  $(".dab").css("margin-top", "-50px")
  $(".aboutus").show();
});
});
$(document).ready(function(){
$(".show2").on("click", function() {
 
  $(".c1,.ab1,.Servise,.more,.ourDoctor,.aboutus,.Contact2").hide();
  $(".fig1").css("margin-top", "20px");
  
  $(".event").show();
});
 $(".show3").on("click", function() {
  
   $(".c1,.ab1,.Servise,.ourDoctor,.aboutus,.event,.Contact2").hide();
   
    $(".more").show(); 
 });
});
 

 
$(document).ready(function(){
 $(".show4").on("click", function() {
   $(".c1,.ab1,.Servise,.more,.aboutus,.event,.Contact2").hide();
   $(".meet").css("margin-top", "70px");
   $(".our").css("margin-top", "130px");
   $(".ourDoctor").show();
 });
});
$(document).ready(function(){
 $(".show5").on("click", function() {
  $(".c1,.ab1,.Servise,.more,.aboutus,.event,.ourDoctor").hide();
  $(".Contact2").css("margin-top", "40px");
  $(".c2").css("margin-top", "-50px")
  $(".fig1").css("margin-top", "50px");
  $(".Contact2").show();
});
});

$(document).ready(function(){
$(".me1").on("click", function(ev) {
  ev.preventDefault();
  $(".c1,.ab1,.Servise,.ourDoctor,.aboutus,.event,.Contact2").hide();
  
   $(".more").show();
});
});

$(document).ready(function(){
  $(".me2").on("click", function(ev) {
    ev.preventDefault();
    $(".c1,.ab1,.more,.ourDoctor,.aboutus,.event,.Contact2").hide();
    
     $(".Servise").show();
  });
  });
  $(document).ready(function(){
    $(".me3").on("click", function(ev) {
      ev.preventDefault();
      $(".c1,.ab1,.more,.Servise,.aboutus,.event,.Contact2").hide();
      
       $(".ourDoctor").show();
    });
    });


    $(".sa").on("click", function(e) {
      e.preventDefault();
    $(this).css("background", "green");
    $(".sa").html('Thanks we will conntect you');
    $(".sa").css("width", "200px");
    $(".sa").css("margin-left", "200px");
    });

 
      $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".ab1 ").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        
        }); 
    });
  
   
  

 
 












