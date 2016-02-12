var headOne = document.getElementById("headOne");
var headTwo = document.getElementById("headTwo");
var headThree = document.getElementById("headThree");

var articleOne = document.getElementById("one");
var articleTwo = document.getElementById("two");
var articleThree = document.getElementById("three");

articleOne.style.display = "none";
articleTwo.style.display = "none";
articleThree.style.display = "none";

// headOne.addEventListener("click", function(){
//    if (articleOne.style.display = "none") {
//       articleOne.style.display = "";
//    };
// }, false);

headOne.addEventListener("click", function()
{if(articleOne.style.display === "block")
   articleOne.style.display = "none"
else if
   (articleOne.style.display === "none"){
   articleOne.style.display = "block";
}
});

headTwo.addEventListener("click", function()
{if(articleTwo.style.display === "block")
   articleTwo.style.display = "none"
else if
   (articleTwo.style.display === "none"){
   articleTwo.style.display = "block";
}
});

headThree.addEventListener("click", function()
{if(articleThree.style.display === "block")
   articleThree.style.display = "none"
else if
   (articleThree.style.display === "none"){
   articleThree.style.display = "block";
}
});
//        if(articleOne.style.display == 'block')
//           articleOne.style.display = 'none';
//        else
//           articleOne.style.display = 'block';
//     }

// document.getElementById("one").style.display = "";
// document.getElementById("one").style.display = "none";


// headOne.addEventListener("click", function (){
//    if (articleOne.className = "hidden") {
//       articleOne.className = "hidden-no-more";
//    }
// });
//
// headTwo.addEventListener("click", function (){
//    if (articleTwo.className = "hidden") {
//       articleTwo.className = "hidden-no-more";
//    }
// });
//
// headThree.addEventListener("click", function (){
//    if (articleThree.className = "hidden") {
//       articleThree.className = "hidden-no-more";
//
//    };
// });

// I need to: get my variables defined better.
// I need to have the callback know which thing I clicked on. This is inside the loop. The callback isn't inside the loop, my (objects are weird, man)
// create one callback so that it knows what to modify.
// Or
// Three separate callback that targets their own thing.
//
// My Plan: create a loop for each thing, and then see if I can combine it together.

// .this refers to whatever was just clicked on.
