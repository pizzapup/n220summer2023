// Peak Pixels

// Get the square element by its class name
const square = document.querySelector(".square");

// Initialize the size of the square
let size = 100;

// Add a click event listener to the square
square.addEventListener("click", () => {
  // Increase the size by 10%
  size *= 1.1;

  // Set the new size to the square
  square.style.width = size + "px";
  square.style.height = size + "px";
});
