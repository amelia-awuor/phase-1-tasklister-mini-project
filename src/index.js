document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    handleToDo(e.target.new_todo.value);
  });
});
function handleToDo(todo){
  let p = document.createElement("p");
  let btn = document.createElement("button");
  btn.textContents = "x";
  p.textContent = todo;
  document.querySelector("#todo_container").appendChild(p);
}
var row = 0;
function addText(){
  const input = document.getElementById("inputTask").value;
  if (input != ""){
    const node = document.createElement("p");
    const textnode = document.createTextNode(input);
    node.appendChild(textnode);
  }
}
var row = 0;
function addText(){
  const input = document.getElementById("inputTask").value;
  if (input != ""){
    const node = document.createElement("p");
    const textnode = document.createTextNode(input);
    node.appendChild(textnode);
    node.setAttribute("id", "contentP" + row);
    document.getElementById("addTask").appendChild(node);

    const removeTask = document.createElement("input");
    removeTask.setAttribute("type", "button");
    removeTask.setAttribute("value", "Remove");
    removeTask.setAttribute("id", "removeButton");
    removeTask.setAttribute("onClick", "deleterow(" + row + ");");

    node.appendChild(removeTask);
    row++;
  } else {
    alert("Please insert a value!");

    }
  }
  function deleterow (ID) {
    Document.getElementById("contentP" + ID).remove();
  }

