var someOtherFunction = function(){
  alert("Hello World");
}

function someRunner(anyFunction) {
  console.log(2+2);
  anyFunction();
}

someRunner(someOtherFunction);
