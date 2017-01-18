//include the node postgres library
var pg = require('pg');
//connect to a database
pg.connect('postgres://localhost:5432/ttp_jan', function(err, client, done) {
  //request all of the hats
  client.query(`select * from hats`, function(err, result) {
    console.log(result.rows);
    //let pg know we're done with this client
    done();
    //close the pg pool entirely.
    //this is done so our node process will exit.
    pg.end();
  });
});

/*
//include the node postgres library
var pg = require('pg');
//connect to a database
pg.connect('postgres://user:password@localhost/my_db', function(err, client, done) {
  //add a new hat
  client.query(`insert into hats
        (name, material, height, brim)
        values
        ('cowboy', 'straw', '4', true)`, function(err, result) {
    //should print 'INSERT: 1'
    console.log(`${result.command}: ${result.rowCount}`);
    //call done and end, same as the read example
    done();
    pg.end();
  });
});
*/
