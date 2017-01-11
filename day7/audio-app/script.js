// document.getElementById('chorus').addEventListener("click", function(){
//
// })

var myPlaylist = ["chorus.mp3","voyager.mp3"]

function Jukebox(playlist){
  this.playlist = playlist;
  this.nowPlaying = this.playlist[0];
  this.addTrack = function(track){
    this.playlist.push(track)
  }
}

var myJukebox = new Jukebox(myPlaylist);
myJukebox.addTrack("song3.mp3");
console.log(myJukebox.playlist);

document.getElementById("playButton").addEventListener("click", function(){
  document.getElementById('trackPlayer').play()
})




var tracks = document.querySelectorAll('li');
for (var i = 0; i < tracks.length; i++) {
  tracks[i].addEventListener("click", function() {
    var track = this.getAttribute("data-song-url")
    document.getElementById('text').innerText = "Loaded: " + track
    document.getElementById('trackPlayer').setAttribute("src", track)
    document.getElementById("playButton").addEventListener("click", function(){
      document.getElementById('trackPlayer').play()
      console.log("Now Playing: "+ track)
    })

  });
}
// document.querySelectorAll('li').addEventListener("click", function(){
//   var track = this.getAttribute("data-song-url")
//   document.getElementById('text').innerText = "Loaded: " + track
//   document.getElementById('trackPlayer').setAttribute("src", track)
//   document.getElementById("playButton").addEventListener("click", function(){
//     document.getElementById('trackPlayer').play()
//     alert("Now Playing: "+ track)
//   })
// })

// $text = $('#text')
// $trackPlayer = $('#trackPlayer')
// $playButton = $('playButon')
//
// $('li').on("click", function(){
//   var track = this.attr("data-song-url")
// })

//
// var track1 = document.getElementById('chorusTrack');
//
// document.getElementById("playButton").addEventListener("click", function(){
//   track1.play();
// })
