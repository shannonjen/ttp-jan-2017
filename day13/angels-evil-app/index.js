var express = require('express');

var app = express();

var pg = require('pg');

var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: false}));

var dbURL = "postgres://localhost:5432/angelsevilapp"

app.get('/actors',function(req,res){
  pg.connect(dbURL, function(err, client, done){
    client.query(`select * from actors`, function(err,result){
      done();
      res.render('actors/index', { actors: result.rows });
    })
  })
})

app.post('/actors', function(req,res){
  pg.connect(dbURL, function(err, client, done){
    client.query(`insert into actors (name) values ('${req.body.name}')`, function(err,result){
      done();
      res.redirect('/actors')
    })
  })
})

app.get('/actors/:id', function(req,res){
  pg.connect(dbURL, function(err,client,done){
    client.query(`select * from actors where id='${req.params.id}'`, function(err,result){
      done();
      console.log(err);
      res.render('actors/show', { actor: result.rows[0]})
    })
  })
})


app.listen(3000, function(){
  console.log("Listening on port 3000")
})
