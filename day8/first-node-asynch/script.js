console.log("I will happen first")

setTimeout(function() {
  console.log("I will wait to be called.");
}, 1000);

console.log("I don't have to to wait!");
