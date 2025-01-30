const todoInput = document.getElementById("todo-text");
const todoForm = document.getElementById("form");
const todoList = document.getElementById("todo-list");

let todos = JSON.parse(localStorage.getItem('todos')) || [];

todos.forEach(newTodoItem);

todoForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const newTodoText = todoInput.value;
    newTodoItem(newTodoText);
    todos.push(newTodoText);


    localStorage.setItem('todos', JSON.stringify(todos));
    todoInput.value = '';

})

function newTodoItem(texto) {
    //todoList.innerHTML += `<li class='todo-item'> ${newTodoText} </li>`;
    const todoItem = document.createElement('li');
    todoItem.classList.add("todo-item");
    todoItem.textContent = texto;

    todoList.append(todoItem);
}