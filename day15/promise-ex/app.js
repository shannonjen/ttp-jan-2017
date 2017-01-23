// var promise = new Promise(function (resolve, reject){
//   setTimeout(function(){
//     resolve('hello world')
//   }, 4000)
// })
//
//
// promise.then(function(result){
//   console.log(result)
// })


// var promise = new Promise(function (resolve, reject){
//   setTimeout(function(){
//     reject(new Error('Uh oh!'))
//   }, 4000)
// })
//
//
// promise.catch(function(err){
//   console.log(err)
// })

var promise = Promise.resolve('hello world!');

promise.then(function(result){
  console.log(result);
})
