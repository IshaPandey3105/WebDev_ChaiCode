// external js

// DOM Manupulation

// console.log(window);
// alert("hey");

// But this violates the dry principle, so we can use a single function

// function changeBackgroundBlack(){
//     document.body.style.backgroundColor = "black";
// }
// function changeBackgroundWhite(){
//     document.body.style.backgroundColor = "white";
// }

function changeBackground(color) {
  document.body.style.backgroundColor = color;
}

// Getting black background by using id

// const darkButton = document.getElementById('Dark-Mode-Button');
// // darkButton.inerText = "Dark Mode";
// darkButton.addEventListener('click',function(){
//     console.log('I am clicked');
//     changeBackground('black');
// });

// Lets Make A single button

const themeButton = document.getElementById("Theme-Button");
const nameHeaderTag = document.getElementById("name-Tag");

themeButton.addEventListener("click", () => {
  console.log(document.body.style.backgroundColor);
  const currentColor = document.body.style.backgroundColor;

  if (currentColor === "black") {
    changeBackground("white");
    themeButton.innerText = "Dark Mode";
    nameHeaderTag.style.color = "black";
  } else {
    changeBackground("black");
    themeButton.innerText = "Light Mode";
    nameHeaderTag.style.color = "white";
  }
});
