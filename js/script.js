$(document).ready(function() {


  	$( ".container" ).accordion({
		header: ".card_top", // designates which element is the header (the part that we can click on to collapse/expand each slide)
    	collapsible: true, // allows slides to collapse/expand
    	active: false, // makes sure that all slides are collapsed from the start
    	heightStyle: "content" // allows us to freely adjust size of each slide
    });


    $(".africa-button").click(function() {
        $(".africa-filter").fadeToggle();
        $(".africa-button").toggleClass("filter-select");
    });

    $(".north-american-button").click(function() {
        $(".north-american-filter").fadeToggle();
        $(".north-american-button").toggleClass("filter-select");
    });

      $(".asia-button").click(function() {
        $(".asia-filter").fadeToggle();
        $(".asia-button").toggleClass("filter-select");
    });

      $(".australia-button").click(function() {
        $(".australia-filter").fadeToggle();
        $(".australia-button").toggleClass("filter-select");
    });

      $(".europe-button").click(function() {
        $(".europe-filter").fadeToggle();
        $(".europe-button").toggleClass("filter-select");
    });

      $(".south-american-button").click(function() {
        $(".south-american-filter").fadeToggle();
        $(".south-american-button").toggleClass("filter-select");
    });


      $(".critically-endangered-button").click(function() {
        $(".critically-endangered-filter").fadeToggle();
        $(".critically-endangered-button").toggleClass("filter-select");
    });

      $(".endangered-button").click(function() {
        $(".endangered-filter").fadeToggle();
        $(".endangered-button").toggleClass("filter-select");
    });

      $(".vulnerable-button").click(function() {
        $(".vulnerable-filter").fadeToggle();
        $(".vulnerable-button").toggleClass("filter-select");
    });

      $(".near-threatened-button").click(function() {
        $(".near-threatened-filter").fadeToggle();
        $(".near-threatened-button").toggleClass("filter-select");
    });





filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("map-continents");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}



var y = $(document).scrollTop();
  $(".update").html(y);

  if (y > 1200) {
    $(".one").fadeIn();
  }

  else {
    $(".one").fadeOut();
  }

});

$(document).scroll(function(){

var y = $(document).scrollTop();
  $(".update").html(y);

  if (y > 100) {
    $(".one").fadeIn();
  }

  else {
    $(".one").fadeOut();
  }

  if (y > 1050) {
    $(".two").fadeIn();
  }

  else {
    $(".two").fadeOut();
  }



});
