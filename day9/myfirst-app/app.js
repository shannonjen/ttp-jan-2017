var express = require('express')

var app = express()

app.get("/", function(req,res){
  res.send("Hello TTP!")
})

app.get("/cold", function(req,res){
  res.send("This cold STINKS")
})

app.listen(3000, function(){
  console.log('This is your app listening....')
})
