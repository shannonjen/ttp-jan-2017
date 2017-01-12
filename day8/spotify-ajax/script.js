document.querySelector("form").addEventListener("submit", function(e){
  e.preventDefault();
  var track= document.querySelector("input").value
  $("ul").append("<li>"+track+"</li>")
  $.ajax({
    url: "https://api.spotify.com/v1/search",
    data: {
      q: track,
      type: "track"
    },
    success: function(response){
      document.querySelector("audio").setAttribute("src", response.tracks.items[0].preview_url)
      console.log(response.tracks.items[0].preview_url);
    }
  })

})
