var pg = require('pg');
var connectionString = "postgres://localhost:5432/ttp_jan";

//export the adapter function
module.exports = function(queryString, queryParameters, onComplete) {
  //normalize parameters, allowing only passing a query string and an optional `onComplete` handler
  if (typeof queryParameters == 'function') {
    onComplete = queryParameters;
    queryParameters = [];
  }

  //everything else is almost the same as before, replacing hard-coded strings and arrays with parameters
  pg.connect(connectionString, function(err, client, done) {
    if (err) {
      console.log(`error: connection to database failed. connection string: "${connectionString}" ${err}`);
      if (client) {
        done(client);
      }
      //check if `onComplete` exists before calling
      if (onComplete) {
        onComplete(err);
      }
      return;
    }

    client.query(queryString, queryParameters, function(err, result) {
      if (err) {
        done(client);
        console.log(`error: query failed: "${queryString}", "${queryParameters}", ${err}`);
      } else {
        done();
      }
      //check if `onComplete` exists before calling
      if (onComplete) {
        onComplete(err, result);
      }
    });
  });
};
