var pg = require('pg');
var express = require('express');

var app = express();

app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/hats', function(req, res){
  pg.connect('postgres://localhost:5432/ttp_jan', function(err, client, done){
    client.query('select * from hats', function(err, result) {
      res.render('hats', { data: result.rows});
      console.log(result.rows)
      done();
      pg.end();
    })
  })
})

app.get('/users', function(req, res){
  pg.connect('postgres://localhost:5432/ttp_jan', function(err, client, done){
    client.query('select * from users', function(err, result) {
      res.render('users', { data: result.rows});
      console.log(result.rows)
      done();
      pg.end();
    })
  })
})


app.listen(3000, function(){
  console.log("Listening on port 3000")
})
