function pause(milliseconds) {
  var dt = new Date();
  while (( new Date()) - dt <= milliseconds ) { /* Do nothing */ }
}

console.log("I will happen first!")

pause(1000);

console.log("I have to wait!")
