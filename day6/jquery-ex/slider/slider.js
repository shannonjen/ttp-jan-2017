var $group = $('.slide-group');
var $slides = $('.slide');
var currentIndex = 0;
var timeout;

function move(newIndex){
  advance();
  $slides.eq(currentIndex).fadeOut();
  $slides.eq(newIndex).fadeIn();
  currentIndex = newIndex;
}


function advance() {                     // Used to set 
  clearInterval(timeout);                 // Clear previous timeout
  timeout = setInterval(function() {      // Set new timer
    if (currentIndex < ($slides.length - 1)) { // If slide < total slides
      move(currentIndex + 1);            // Move to next slide
    } else {                             // Otherwise
      move(0);                           // Move to the first slide
    }
  }, 4000);                              // Milliseconds timer will wait
}



advance();
