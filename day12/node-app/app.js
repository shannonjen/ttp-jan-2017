var pg = require('pg');

pg.connect('postgres://localhost:5432/ttp_jan',  function(err, client, done){
  var consoleName = process.argv[2];
  console.log(consoleName);
  client.query(`select * from users where name='${consoleName}'`, function(err, result){
    console.log(result.rows[0]);
    done();
  })
})
