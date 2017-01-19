var pg = require('pg');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs')
app.set('views', './views')

//get all users
app.get('/users', function(req, res){
  pg.connect('postgres://localhost:5432/ttp_jan', function(err, client, done){
    client.query('select * from users', function(err, result) {
      if (err) return console.log(err)
      res.render('users', { data: result.rows});
      console.log(result.rows)
      done();
      pg.end();
    })
  })
})

//get a single user
app.get('/users/:id', function(req,res){
  pg.connect('postgres://localhost:5432/ttp_jan', function(err, client, done){
    var userID = parseInt(req.params.id);
    client.query(`select * from users where id = '${userID}'`, function(err, result) {
      res.render('show', { data: result.rows});
      console.log(result.rows)
      done();
      pg.end();
    })
  })
})

//create a user
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

//update a user
app.put('/users/:id', function(req,res){
  pg.connect('postgres://localhost:5432/ttp_jan', function(err, client, done){
    client.query(`update users set name='${req.body.name}', breed='${req.body.email}' where id='${parseInt(req.params.id)}'`, function(err, result) {
      res.redirect('/users');
      done();
      pg.end();
    })
  })
})

//delete a user
app.delete('/users/:id', function(req,res){
  pg.connect('postgres://localhost:5432/ttp_jan', function(err, client, done){
    client.query(`delete from users where id='${parseInt(req.params.id)}'`, function(err, result) {
      if (err) return console.log(err)
      res.redirect('/users');
      done();
      pg.end();
    })
  })
})


app.listen(3000, function(){
  console.log("Listening on port 3000")
})
