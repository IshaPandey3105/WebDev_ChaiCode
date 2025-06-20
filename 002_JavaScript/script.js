// alert("Yash");
const Form = document.getElementById("form");
const Input = document.getElementById("name");
const heading = document.getElementById("display");


Input.addEventListener("input", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  heading.innerText = name;
});
