$(function(){
   'use strict'
$("#headOne").on("click", function(){
   $("#one").toggleClass("hidden");
});
$("#headTwo").on("click", function(){
   $("#two").toggleClass("hidden");
});
$("#headThree").on("click", function(){
   $("#three").toggleClass("hidden");
   
});
});


// First swing. gonna try toggle class now
//    if ($("article").css("display", "none")){
//    $("article").css("display", "block");
// } else if ($("article").css("display", "block")){
//    $("article").css("display", "none");
