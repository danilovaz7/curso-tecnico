const todoInput = document.getElementById('todo-text');
const todoForm = document.getElementById('form');
const todoList = document.getElementById('todo-list');

// let todos = JSON.parse(localStorage.getItem('todos'));

// todos.forEach(todo => {
//     newTodoItem(todo);
// });

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const newTodoText = todoInput.value;
    newTodoItem(newTodoText);
    todos.push(newTodoText);

    localStorage.setItem('todos', JSON.stringify(todos));

    todoInput.value = '';
})

function newTodoItem(text) {
    // todoList.innerHTML += `<li class='todo-item'>${newTodoText}</li>`;
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');
    todoItem.textContent = text;

    todoList.append(todoItem);
}