const todoInput = document.getElementById("Todo-Input");
const addBtn = document.getElementById("Add-Btn");
const todoItems = document.getElementById("Todo-Items");

addBtn.addEventListener('click',()=>{
    const value = todoInput.value;
    const li = document.createElement('li'); // <li></li> created
    li.innerText = value;  // <li>value</li> created

    const delButton = document.createElement("button");
    delButton.innerText = "X";
    li.appendChild(delButton);
    delButton.addEventListener('click',() =>{
        li.remove();
    })

    todoItems.appendChild(li);
    todoInput.value=' ';

});