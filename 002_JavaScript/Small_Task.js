const buttonTask= document.getElementById("Task");
const input= document.getElementById("myInput");

buttonTask.addEventListener("click",() =>{
    // buttonTask.textContent = "You clicked!";
    buttonTask.textContent = input.value;
})