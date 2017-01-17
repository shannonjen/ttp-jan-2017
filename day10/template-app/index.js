var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/home',function(request,response){
  response.render("home-page", { movies: [
    'Rainbow Connection',
    'Bob the Slob',
    'Wings'
  ]}
)
})


app.listen(3000, function(){
  console.log("Now listening on port 3000")
})
