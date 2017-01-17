var express = require('express');

var app = express()

// app.get('/hello/world', function(request, response){
//   console.log("Got request for /hello/world")
//   console.log(request)
//   response.send("<h1>Hello World</h1>")
// })

app.get('/', function(request,response){
  console.log(request.query)
  response.send(request.query)
})
app.get('/hello/:name', function(request,response){
  console.log(request.params)
  response.send("hello, "+request.params.name)
})
app.get('/hello2', function(request,response){
  console.log(request.query)
  response.send("hello, "+request.query.fname + " " + request.query.lname)
})

app.get('/hello/portfolio', function(request,response){

  response.send("Welcome to my portfolio")
})
app.get('*', function(request, response){
  response.status(404).send("I'm sorry, this page does not exist")
})



app.listen(3000, function(){
  console.log('Example app now running on port 3000')
})
