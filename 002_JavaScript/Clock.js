// alert("hi");

function updateClock() {
  const timeElement = document.getElementById("time");
  const dateElement = document.getElementById("date");

  const now = new Date();
  const hours = now.getHours() % 12 || 12;
  const minutes = now.getMinutes().toString().padStart(2, "0"); // padStart() adds leading zeros if necessary
  const seconds = now.getSeconds().toString().padStart(2, "0"); // padstart(size,default value)
  const ampm = now.getHours() >= 12 ? "PM" : "AM";

  timeElement.textContent = `${hours}:${minutes}:${seconds}:${ampm}`;

  const options = {
    weekday: "long", 
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  dateElement.textContent = now.toLocaleDateString(undefined, options);
}

setInterval(updateClock, 1000);

updateClock(); // call the function once to display the initial time
