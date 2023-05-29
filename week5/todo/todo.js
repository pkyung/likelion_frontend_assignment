const input = document.querySelector("#input-form input");
const inputButton = document.querySelector("#input-form button");
const toDos = document.querySelector("#todos");

function addToDo(event) {
  event.preventDefault();
  let todoList = document.createElement("p");
  let todo = document.createTextNode(`${input.value}`);
  todoList.appendChild(todo);
  toDos.appendChild(todoList);
  input.value = null;
}

inputButton.addEventListener("click", addToDo);
