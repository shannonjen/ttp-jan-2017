$("#search").keyup(function(){
  $.ajax({
    url: "http://www.omdbapi.com/?",
    data: {
      t: $("#search").val()
    },
    dataType: "json",
    success: function(response){
      $("#movie-title").html(response.Title)
      $("#poster").attr("src", response.Poster)
      console.log(response.Poster)
    }
  });

})
