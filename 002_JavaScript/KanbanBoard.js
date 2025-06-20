// const addTaskBtn =document.getElementById('add-task-btn');
const todoBoard = document.getElementById("Todo-board");

// ---- for Local Storage ----
let taskData = JSON.parse(localStorage.getItem("taskData")) || {
  "to-do": [],
  "in-progress": [],
  done: [],
};

function saveToLocalStorage() {
  localStorage.setItem("taskData", JSON.stringify(taskData));
}

function attachDragEvents(target) {
  target.addEventListener("dragstart", () => {
    target.classList.add("flying");
  });
  target.addEventListener("dragend", () => {
    target.classList.remove("flying");
  });
}

function updateCounters() {
  const boards = document.querySelectorAll(".board");

  boards.forEach((board) => {
    const counter = board.querySelector(".counter");
    const taskContainer = board.querySelector(".task-container");
    if (!counter || !taskContainer) return;

    const count = taskContainer.querySelectorAll(".item").length;
    counter.innerText = count;
  });
}
// Call it once on page load
updateCounters();
saveToLocalStorage();

document.querySelectorAll(".item").forEach((taskCard) => {
  attachDragEvents(taskCard);
  addEditDeleteFunctionality(taskCard);
});

// Function to setup edit & delete actions
function addEditDeleteFunctionality(taskCard) {
  taskCard.querySelector(".edit-btn").onclick = () => {
    const span = taskCard.querySelector("span");
    const newText = prompt("Edit your task:", span.textContent);
    if (newText && newText.trim() !== "") {
      span.textContent = newText;
      saveToLocalStorage();
    }
  };

  taskCard.querySelector(".delete-btn").onclick = () => {
    saveToLocalStorage();
    taskCard.remove();
    updateCounters();
  };
}

const addTaskBtns = document.querySelectorAll(".add_task");

addTaskBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const input = prompt("What is the task?");
    if (!input) return;

    const taskCard = document.createElement("p");
    taskCard.classList.add(
      "item",
      "d-flex",
      "justify-content-between",
      "align-items-center",
      "mb-2",
      "p-2"
    );

    taskCard.setAttribute("draggable", true);

    taskCard.innerHTML = `
    <span class="me-3 mb-0">${input}</span>
    <div class="d-flex">
      <button class="btn btn-sm btn-warning edit-btn me-2">Update</button>
      <button class="btn btn-sm bg-danger text-white  delete-btn">Delete</button>
    </div>
`;
    addEditDeleteFunctionality(taskCard);
    attachDragEvents(taskCard);

    todoBoard.appendChild(taskCard); // this always adds to TODO board

    // now to fix this problem
    const board = btn.closest(".board"); // finds the board of the clicked button.
    const container = board.querySelector(".task-container"); //finds the container inside that board.
    container.appendChild(taskCard);

    saveToLocalStorage();
    updateCounters();
  });
});

// const allBoards = document.getElementsByClassName('board');
const allBoards = document.querySelectorAll(".board");
const allItems = document.querySelectorAll(".item");

allItems.forEach(attachDragEvents);

// allBoards.forEach(board =>{
//     board.addEventListener('dragover',() =>{
//         const flyingElement = document.querySelector('.flying');
//         board.appendChild(flyingElement);
//     });
// });

allBoards.forEach((board) => {
  // Allow drop by preventing default
  board.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  // Handle drop event to move item into .task-container
  board.addEventListener("drop", (e) => {
    e.preventDefault();

    const flyingElement = document.querySelector(".flying");

    // Find the .task-container inside this board
    const container = board.querySelector(".task-container");
    container.appendChild(flyingElement);
    saveToLocalStorage();
    updateCounters();
  });
});

const themeToggle = document.getElementById("theme-toggle");
const htmlElement = document.documentElement; // <html> element

themeToggle.addEventListener("click", function () {
  let htmlElement = document.documentElement; // Select <html> tag
  let themeIcon = document.getElementById("themeIcon"); // Icon inside button

  if (htmlElement.getAttribute("data-bs-theme") === "dark") {
    htmlElement.setAttribute("data-bs-theme", "light");
    this.classList.replace("btn-outline-light", "btn-outline-dark"); // Change button style
    themeIcon.classList.replace("fa-sun", "fa-moon"); // Switch icon to Moon
  } else {
    htmlElement.setAttribute("data-bs-theme", "dark");
    this.classList.replace("btn-outline-dark", "btn-outline-light"); // Change button style
    themeIcon.classList.replace("fa-moon", "fa-sun"); // Switch icon to Sun
  }
});
