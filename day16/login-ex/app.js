var express = require('express')
var app = express();
var pg = require('pg');
var DATABASE_URL = 'postgres://localhost:5432/loginexttpjan'

app.set('view engine', 'ejs');
app.set('views', './views');

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

app.listen(3000, function(){
  console.log('Listening on port 3000');
})
