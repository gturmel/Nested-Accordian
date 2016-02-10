var clickMe = document.getElementsByClassName("headOne");

var article = document.getElementsByClassName("hidden");

// function changeClass() {
//    if (article.className = "hidden") {
//       article.className = "hidden-no-more";
//    } else {
//       article.className = "hidden";
//    };
// };

for (num = 0; num <= clickMe.length; num ++){
   clickMe[num].addEventListener("click", function (){
      if (article[0].className = "hidden") {
      article[0].className = "hidden-no-more";
   }
}, false)
};
