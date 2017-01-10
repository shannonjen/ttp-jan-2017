var animateMenu = function(){
  $(".menu").animate( {opacity: 0.5} )
}



$(document).ready(function(){
  $('img').on("click", function(){
    $('h1').fadeOut(3000);
  })
  $(".menu").show(animateMenu);


})
