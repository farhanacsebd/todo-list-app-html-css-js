// find the elements
const container = document.querySelector('.container');
const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('#inputTodo');
const todoAddButton = document.querySelector('#addTodoButton');
const todoLists = document.getElementById('lists');
const messageElement = document.getElementById('message');



// showMessage 
const showMessage = (text,status) => {
    messageElement.textContent = text;
    messageElement.classList.add(`bg-${status}`);
    setTimeout(()=>{
        messageElement.textContent = "";
        messageElement.classList.remove(`bg-${status}`);
    },1000);
}


// createTodo
const createTodo = (todoId,todoValue) =>{
     const todoElement = document.createElement('li');
     todoElement.id = todoId;
     todoElement.classList.add("li-style");
     todoElement.innerHTML =`
     <span>${todoValue}</span>
     <span><button class="btn" id="deleteButton"> <i class="fa fa-trash"> </i> </button></span>
     `
     todoLists.appendChild(todoElement);
}


// addTodo
const addTodo = (event) =>{
    event.preventDefault();
    const todoValue = todoInput.value;


    // unique id 
    const todoId = Date.now().toString();
    createTodo(todoId,todoValue);
    showMessage("todo is added","success");
}


// adding listeners
todoForm.addEventListener("submit",addTodo);