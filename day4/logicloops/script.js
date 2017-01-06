// var num = prompt("Pick a number");
// if (num>10) {
//   console.log("Your num is greater than 10")
// } else {
//   console.log("You fool, your number less than 10.")
// }

// function someName(numberOne, otherNumber) {
//   return numberOne + 10 + otherNumber;
// }
//
// console.log(someName(23,4));


function noWham(door){
  if (door == "1"){
    console.log("You have won a donkey.");
  } else if (door == "2"){
    console.log("You have won a puddle");
  } else {
    console.log("You have won a new car");
  }
}
var myDoor = prompt("Please chose a door: 1, 2, or 3");

noWham(myDoor);
