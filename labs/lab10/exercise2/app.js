// // Color Mixer app.js

// Get the container element from the DOM and set it to a variable named container
const container = document.getElementById("app");

// Initialize the color swatch and color text
let colorSwatch;
let colorText;

// Array of increment values (+1, +5, +10)
let amts = [1, 5, 10];

// Create an array of objects to hold the colors and their corresponding amts
let rgbColor = {red: 0, green: 0, blue: 0};

// Function to create the string for the color text
let rgbString = () =>
  `rgb(${rgbColor.red}, ${rgbColor.green}, ${rgbColor.blue})`;

// Create the div that will hold the color text
function createColorText() {
  colorText = document.createElement("div");
  colorText.classList.add("color-text");
  colorText.innerText = rgbString();
  container.appendChild(colorText);
}

// Function to update the color
function updateColor(e) {
  // Get the data attributes of the button that was clicked
  let {color, amt} = e.target.dataset;

  // Update the color and the amount of the color by the amount specified in the data attributes
  rgbColor[color] += Number(amt);

  // Check if the color is greater than 255, if so, set it to 255 and log a message
  if (rgbColor[color] > 255) {
    rgbColor[color] = 255;
    console.log("Reached the max of 255 for " + color);
  }

  // Update the color swatch with the new color
  colorSwatch.style.backgroundColor = rgbString();

  // Update the color text with the new color
  colorText.innerText = rgbString();
}

// Function to add the button group text
function addButtonGroupText(i, buttonGroup) {
  // Create a div to hold the text
  let buttonGroupText = document.createElement("div");

  // Set the text to the color name and the amount of the color
  buttonGroupText.innerText = `${i}: `;

  // Set the class name to button-group-text
  buttonGroupText.classList.add("button-group-text");

  // Append to the button group
  buttonGroup.appendChild(buttonGroupText);
}

// Buttons
// this function encompasses the creation of the elements that hold the buttons and the buttons themselves
function initButtons() {
  // Loop through the array of objects and add buttons for each color
  for (let i in rgbColor) {
    // Create a button
    let buttonGroup = document.createElement("div");

    // Add the class name button-group
    buttonGroup.classList.add("button-group");

    // Add the button group text
    addButtonGroupText(i, buttonGroup);

    // Add the buttons
    createButtons(i, buttonGroup);

    // Append the button group
    container.appendChild(buttonGroup);
  }
}

// Function to create the actual buttons
function createButtons(rgbColor, buttonGroup) {
  // Loop through the array of amts
  for (let i = 0; i < amts.length; i++) {
    // Create a button
    const amtButton = document.createElement("button");

    // Set the text content of the button to the amt and the color
    amtButton.innerText = `+ ${amts[i]} ${rgbColor}`;

    // Set the data attributes for the button for the amt and the color
    amtButton.setAttribute("data-amt", amts[i]);
    amtButton.setAttribute("data-color", rgbColor);

    // Add an event listener to the button to update the color when clicked
    amtButton.addEventListener("click", updateColor);

    // Append the button to the button group
    buttonGroup.appendChild(amtButton);
  }
}

// Function to create the color swatch
function createColorSwatch() {
  // Create a div to hold the color swatch
  colorSwatch = document.createElement("div");

  // Set the background color of the color swatch to the rgb value of the color
  colorSwatch.style.backgroundColor = `rgb(${rgbColor.red}, ${rgbColor.green}, ${rgbColor.blue})`;

  // Add the class name color-swatch
  colorSwatch.classList.add("color-swatch");

  // Append the color swatch
  container.appendChild(colorSwatch);

  // Create the color text
  createColorText();

  // Create the buttons
  initButtons();
}

// Call the functions
createColorSwatch();
