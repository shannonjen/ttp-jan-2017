var express = require('express');
var app = express();

//Accept `apple` or `ale`, returning `"Apple or Ale?"`.
app.get(['/apple', '/ale'],function(request, response){
  response.send("Apple or Ale?")
})
//Accept the word `whoa` with an aribitrary number of `o`s and `a`s, returning `"I know, right?!"`.
app.get('/firstname/:fname/lastname/:lname', function(request, response){
  response.send("Hello, " + request.params.fname + " " + request.params.lname + "!")
})
//Take a first name and last name as parameters, returning a greeting for that user.
// app.get()
//Take a word as a parameter and returning the word reversed.
app.get('/reverse/:word', function(request, response){
  var reversed = request.params.word.split("").reverse().join("");
  response.send(reversed)
})
//Add a route that will execute if nothing else is matched, returning `"Uh oh!"`.
//app.get()

app.listen(3000, function(){
  console.log("Now listening on port 3000...")
})
