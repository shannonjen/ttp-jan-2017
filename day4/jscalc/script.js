function addNums() {
  num1 = document.getElementById('num1').value;
  num2 = document.getElementById('num2').value;
  document.getElementById('result').innerHTML = (parseInt(num1) + parseInt(num2));
}

function clickme() {
  document.getElementById('clickme').innerHTML="This is some text"
}

console.log("Hi there, is it me your looking for?")
// alert("Your computer is infected with a virus!!!");


var array1 = ["Dog", "Cat", "Fish"];
var array2 = ["Apple", "Kiwi", "Grape"];

var array3 = [array1, array2];

console.log(array3[0][1]);
