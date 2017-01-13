function ToDoList(){
  this.todos = []
  this.addTodo = function(todo){
    this.todos.push(todo)
    $("#list").append("<li>"+todo+"</li>")
  }
  this.removeTodo = function(){
    //add code here
  }
}

var myToDoList = new ToDoList()

document.querySelector("form").addEventListener("submit", function(e){
  e.preventDefault();
  var todo = $("#todo").val();
  $("#todo").val("")
  myToDoList.addTodo(todo);
})




console.log(myToDoList)
