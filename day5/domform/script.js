var el1 = document.getElementById('username')
var el2 = document.getElementsByClassName('amazing')
var headline = document.querySelector('#headline')
var el4 = document.querySelectorAll('.amazing')


// headline.innerHTML = "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam maxime quos corrupti omnis minima cupiditate, ullam maiores quia corporis quas accusantium modi, asperiores iusto voluptates odit expedita nulla eos eveniet!</P>"

console.log(el1);
console.log(el2);

console.log(el4);

function makeRed(){
  document.body.style.backgroundColor = "blue";
}

function formThing(beans){
    beans.preventDefault();
    console.log(beans)
    var username = document.querySelector("#username").value;
    if (username === "jen") {
       document.querySelector("h1").innerText = "hi " + username;
     } else {
       alert("FRAUD!!!!");
     }

}
document.getElementById("headline").addEventListener("click", makeRed)

document.querySelector("form").addEventListener("submit", formThing)
