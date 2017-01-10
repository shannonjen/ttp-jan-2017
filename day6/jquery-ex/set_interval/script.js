$(document).ready(function(){
	alert("Blocked");
	
	
});




setInterval(function(){
	var randomColor = "#"+Math.floor(Math.random()*16777215).toString(16);
	console.log(randomColor);

	$('body').css("background-color",randomColor );
	
}, 1000);





