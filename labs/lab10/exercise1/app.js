// Color Changer app.js

// Initialize the colors
let colors = ["rgb(102, 0, 1)", "rgb(1, 47, 31)", "rgb(0, 0, 170)"];
let baseColor = "rgb(153, 153, 153)";

// Get references to the DOM elements
let container = document.getElementById("app");

// Loop through the array and create divs
function createSquare(color) {
  // Create div
  const square = document.createElement("div");

  // Add the square class name (used for styling in the HTML)
  square.classList.add("square");

  // Add custom data attributes
  square.setAttribute("data-color", color);
  square.setAttribute("data-base-color", baseColor);

  // Set the background color based on the color
  square.style.backgroundColor = baseColor;

  // Return the square
  return square;
}

// Handle click event
function handleClick(e) {
  // Get the data attributes
  let dataColor = e.target.getAttribute("data-color");
  let baseColor = e.target.getAttribute("data-base-color");

  // Check if the current background color is the same as the base color
  if (e.target.style.backgroundColor === baseColor) {
    // If true: change the color to the data color
    e.target.style.backgroundColor = dataColor;
  } else {
    // If false: change the color to the base color
    e.target.style.backgroundColor = baseColor;
  }
}

// Loop through the array, create divs, add click event listeners, and append to the container
colors.forEach((color) => {
  // Create div
  const square = createSquare(color);

  // Add click event listener
  square.addEventListener("click", handleClick);

  // Append the div to the container
  container.appendChild(square);
});
