$.ajax({
  url: "http://www.omdbapi.com/?",
  data: {
    t: "Toy Story"
  },
  dataType: "json",
  success: function(response){
    $("#movie-title").html(response.Title)
    $("#poster").attr("src", response.Poster)
    console.log(response.Poster)
  }
});
