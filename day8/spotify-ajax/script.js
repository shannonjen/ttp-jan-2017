var songList = [];

document.querySelector("form").addEventListener("submit", function(e){
  e.preventDefault();
  var trackName= document.querySelector("input").value
  $("ul").append("<li>"+trackName+"</li>")

  $.ajax({
    url: "https://api.spotify.com/v1/search",
    data: {
      q: trackName,
      type: "track"
    },
    success: function(response){
      var audioSrc = response.tracks.items[0].preview_url
      songList.push(audioSrc)
      console.log(songList)

      document.querySelector("audio").setAttribute("src", audioSrc)
      console.log(response.tracks.items[0].preview_url);
    }
  })

})
