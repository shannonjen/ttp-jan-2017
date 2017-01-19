
var express = require('express');
var bodyParser = require('body-parser');
var query = require('./query')
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs')
app.set('views', './views')

//get all users
app.get('/users', function(req, res){
  query('select * from users', function(err, result) {
    res.render('users', { data: result.rows});
  })
})


app.listen(3000, function(){
  console.log("Listening on port 3000")
})
