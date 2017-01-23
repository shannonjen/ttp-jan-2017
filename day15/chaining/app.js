var promise = Promise.resolve('hello')
  .then(function(str){
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve(`${str} there`);
      }, 1000)
    })
  })
  .then(function(str) {
    return `${str} world`;
  })
  .then(function(str) {
    console.log(str);
    return Promise.resolve(str);
  })
