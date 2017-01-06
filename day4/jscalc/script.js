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
