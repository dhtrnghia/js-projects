//Define array todoList to contain objects have 2 properties: name and dueDate
const todoList = [
  {
    name: 'make dinner',
    dueDate: '2022-12-22'
  },
  {
    name: 'wash dishes',
    dueDate: '2022-12-23'
  }
];

renderTodoList();

function renderTodoList () {
  let todoListHTML = '';

  //Loop throught array todoList and render nember of it using forEach
  todoList.forEach((todoObject, index) => {
    const {name, dueDate} = todoObject;
    const html = `
      <p>${name}</p>
      <p>${dueDate}</p>
      <button class="del-todo-button js-del-todo-button">Delete</button>
    `;
    todoListHTML += html;
  });

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  //Select all del button 
  //Put the code for event delButton click here after gererate html of these buttons
  document.querySelectorAll('.js-del-todo-button').forEach ((delButton, index) => {
    delButton.addEventListener('click', () => {
      todoList.splice(index,1);
      renderTodoList();
    });
  });
}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo();
});

//Get value from input element and push them into array todoList
function addTodo() {
  const inputElem = document.querySelector('.js-name-input');
  const name = inputElem.value;
  const dueDate = document.querySelector('.js-due-date-input').value;
  todoList.push({
    name,
    dueDate
  });  

  renderTodoList();

  inputElem.value = '';  
}