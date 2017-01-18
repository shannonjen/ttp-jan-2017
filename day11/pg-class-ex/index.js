var pg = require('pg');
var express = require('express');
// body parser
var bodyParser = require('body-parser');



var app = express();

// json method
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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

app.post('/users', function(req,res){
  pg.connect('postgres://localhost:5432/ttp_jan', function(err, client, done){
    client.query(`insert into users(name,email) values('${req.body.name}','${req.body.email}')`, function(err, result){
      console.log(err);

      res.redirect('/users');
      done();
      pg.end();
    })
  })

})

app.listen(3000, function(){
  console.log("Listening on port 3000")
})
