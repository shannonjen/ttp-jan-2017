var express = require('express');

var app = express()

app.get('/hello/world', function(request, response){
  console.log("Got request for /hello/world")
  console.log(request)
  response.send("<h1>Hello World</h1>")
})



app.listen(3000, function(){
  console.log('Example app now running on port 3000')
})
