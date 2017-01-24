var express = require('express');
var app = express();
var request = require('request')

app.get('/', function(req, res){
  request.get({
    url: "https://www.opentdb.com/api.php?amount=10"
  }, function(error, response, body){
    res.send(body);
  ;})
})

app.listen(3000, function(){
  console.log("Listening on 3000...")
})
