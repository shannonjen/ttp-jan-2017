var express = require('express')

var app = express()

app.get("/cold", function(req,res){
  res.send("This cold STINKS")
})


app.get("/cold", function(req,res){
  res.send("Hello TTP!")
})



app.listen(3000, function(){
  console.log('This is your app listening....')
})
