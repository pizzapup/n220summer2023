// Its just average app.js

// Get the DOM elements that will display the sum, average, and list of numbers
let listElement = document.getElementById("list");
let sumElement = document.getElementById("sum");
let avgElement = document.getElementById("avg");

function calculateAverage(event) {
  // Initialize variables
  let sum = 0;
  let avg = 0;
  let numbersArray = [];
  listElement.innerHTML = "";

  // Split the input string into an array of strings
  //Uses regex to split on commas, spaces, & commas + spaces (https://www.freecodecamp.org/news/javascript-split-how-to-split-a-string-into-an-array-in-js/)
  let inputArray = event.target.value
    .split(/[, |,| |, ]/)
    .filter((n) => n !== "");

  // Loop through the array of strings and convert each string to a number
  for (let i = 0; i < inputArray.length; i++) {
    let currentNumber = Number(inputArray[i]);

    // Check if the current number is a valid number
    if (!isNaN(currentNumber)) {
      // Add the current number to the array of numbers
      numbersArray.push(currentNumber);

      // Create a list item for the current number and append it to the list element
      const listItem = document.createElement("span");
      listItem.textContent = `${currentNumber}, `;
      listElement.appendChild(listItem);

      // Add the current number to the sum
      sum += currentNumber;

      // Calculate the average
      avg = sum / numbersArray.length;

      // Update the DOM elements
      sumElement.textContent = sum;
      avgElement.textContent = avg;
    }
  }
}

// Add event listener to the "Calculate" button and pass the event target
document
  .getElementById("numbers-input")
  .addEventListener("input", function (event) {
    calculateAverage(event);
  });
