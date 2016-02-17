$(function(){
   'use strict'

// this is the accordion effect for the top level things

$("#headOne").on("click", function(){
   $("#one").toggleClass("hidden");
   $("#two").addClass("hidden");
   $("#three").addClass("hidden");

});

$("#headTwo").on("click", function(){
   $("article").toggleClass("hidden");
   $("#one").addClass("hidden");
   $("#three").addClass("hidden");

});

$("#headThree").on("click", function(){
   $("article").toggleClass("hidden");
   $("#two").addClass("hidden");
   $("#one ").addClass("hidden");

});

// hover effects for the header

$("header").hover(function(){
   $(this).css("background","red"),
   $(this).css("background","#eee")
});


});


// First swing. gonna try toggle class now
//    if ($("article").css("display", "none")){
//    $("article").css("display", "block");
// } else if ($("article").css("display", "block")){
//    $("article").css("display", "none");
