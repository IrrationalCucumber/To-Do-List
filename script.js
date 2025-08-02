const todoList = {};

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello" + x;
  //window.alert("Hello JavaScript!"); // response to button click
  //window.print(); // print the current page
}
function addTask() {
  document.getElementById("list").innerHTML = todoList.title = "Title";
  window.alert("Task added: " + todoList.title);
}
function deleteTask() {
  delete todoList.title;
  document.getElementById("list").innerHTML = "Task deleted";
  window.alert("Task deleted");
}
