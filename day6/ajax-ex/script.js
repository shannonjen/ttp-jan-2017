document.querySelector("form").addEventListener("submit", function(e){
  e.preventDefault();
  $.ajax({
    type: "GET",
    url: 'http://api.spotify.com/v1/search',
    data: {
      q: document.querySelector('#search').value,
      type: 'artist'
    },
    success: function (response) {
      var pic = response.artists.items[0].images[0].url;
      $(".imgCont").html("<img src="+pic+">")
      console.log(response.artists.items[0].images[0].url)
    }
  })


})
