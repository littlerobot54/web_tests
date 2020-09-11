// --       Selectors       --
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

// --       Event Listeners     --
document.addEventListener('DOMContentLoaded', getLocalTodos)
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', delateCheck);
filterOption.addEventListener('change', filterTodo);

// --       Functions       --
function addTodo(e){
    // Prevent form from submitting
    event.preventDefault();

    // Evaluate input
    if (todoInput.value != "") {
        // Todo DIV
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        // Create LI
        const newTodo = document.createElement('li');
        newTodo.innerText = todoInput.value
        newTodo.classList.add('todo-item');
        // Add LI to Todo DIV
        todoDiv.appendChild(newTodo);
        // Add ToDo to localStorage
        console.log(todoInput.value)
        saveLocalTodos(todoInput.value);
        // Completed button
        const completedButton = document.createElement('button');
        completedButton.classList.add('completed-btn');
        completedButton.innerHTML="<i class='material-icons'>check_circle_outline</i>";
        todoDiv.appendChild(completedButton);
        // Trash button
        const trashButton = document.createElement('button');
        trashButton.classList.add('trash-btn');
        trashButton.innerHTML="<i class='material-icons'>delete_outline</i>";
        todoDiv.appendChild(trashButton);
        // Append to list
        todoList.appendChild(todoDiv);
        // Clear input
        todoInput.value = ""
    }
}

function delateCheck (e) {
    const item = e.target;
    // Delate ToDo
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        // Animation
        todo.classList.add('fall')
        removeLocalTodos(todo);
        todo.addEventListener('transitionend', function(){
            todo.remove();
            
        })
        
    } else if (item.classList[0] === 'completed-btn') {
        const todo = item.parentElement;
        if (todo.classList.contains('completed')) {
            todo.classList.remove('completed');
        } else {
            todo.classList.add('completed');
        }
    }
}

function filterTodo (e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case 'all':
                console.log('all')
                todo.style.display = 'flex';
                break;
            case 'completed':
                if (todo.classList.contains('completed')){
                    console.log('completed-true')
                    todo.style.display = 'flex';
                } else {
                    console.log('completed-false')
                    todo.style.display = 'none';
                }
                break;
            case 'uncompleted':
                if (todo.classList.contains('completed')){
                    console.log('uncompleted-true')
                    todo.style.display = 'none';
                } else {
                    console.log('uncompleted-false')
                    todo.style.display = 'flex';
                }
                break;
            default:
                break;
        }
    })
}

function saveLocalTodos(todo) {
    // Check if there is already local storage
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getLocalTodos() {
    // Check if there is already local storage
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo){
        // Todo DIV
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        // Create LI
        const newTodo = document.createElement('li');
        newTodo.innerText = todo
        newTodo.classList.add('todo-item');
        // Add LI to Todo DIV
        todoDiv.appendChild(newTodo);
        // Add ToDo to localStorage
        console.log(todoInput.value)
        // Completed button
        const completedButton = document.createElement('button');
        completedButton.classList.add('completed-btn');
        completedButton.innerHTML="<i class='material-icons'>check_circle_outline</i>";
        todoDiv.appendChild(completedButton);
        // Trash button
        const trashButton = document.createElement('button');
        trashButton.classList.add('trash-btn');
        trashButton.innerHTML="<i class='material-icons'>delete_outline</i>";
        todoDiv.appendChild(trashButton);
        // Append to list
        todoList.appendChild(todoDiv);
    })
}

function removeLocalTodos(todo) {
    // Check if there is already local storage
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}