$(document).ready(function(){
  $(".activate-modal").click(function(e){
    e.preventDefault(); //dont follow the link
    $(".modal-wrapper").show(); //show our modal
    //add the .modal-on class to <body>
    $("body").addClass("modal-on");   
  });
  $(".exit").click(function(e){
    e.preventDefault();
//basically the opposite of activate
    $(".modal-wrapper").hide();
    $("body").removeClass("modal-on");
  });
});