var express = require('express')
var app = express();
var pg = require('pg');
var bodyParser = require('body-parser');

var DATABASE_URL = 'postgres://localhost:5432/loginexttpjan'

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: false}));

app.get('/users', function(req,res){
  pg.connect(DATABASE_URL, function(err, client, done){
    client.query(`select * from users`, function(err,result){
      done();
      console.log(result);
      res.render('users/index', { users: result.rows });
    })
  })
})

app.get('/login', function(req,res){
  res.render('users/login');
})

app.post('/login', function(req,res){
  if username exists in the table then check if the password matches
  if there is a match route to the show. If not, route back to the form
  res.render('users/show', {username: req.body.username})
})
app.listen(3000, function(){
  console.log('Listening on port 3000');
})
