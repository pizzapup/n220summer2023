// Its just average app.js

// Get the DOM elements that will display the sum, average, and list of numbers
let inputElement = document.getElementById("numbers-input");
let sumElement = document.getElementById("sum");
let avgElement = document.getElementById("avg");

// Initialize variables
let sum = 0;
let avg = 0;
let inputArray = [];
let numbersArray = [];

function calculateAverage() {
  // Split the input string into an array of strings
  //Uses regex to split on commas, spaces, & commas + spaces (https://www.freecodecamp.org/news/javascript-split-how-to-split-a-string-into-an-array-in-js/)
  inputArray = inputElement.value.split(/[, |,| |, ]/).filter((n) => n !== "");

  // Loop through the array of strings and convert each string to a number
  for (let i = 0; i < inputArray.length; i++) {
    let currentNumber = Number(inputArray[i]);

    // Check if the current number is a valid number
    if (!isNaN(currentNumber)) {
      // Add the current number to the array of numbers
      numbersArray.push(currentNumber);

      // Add the current number to the sum
      sum += currentNumber;
    }
  }

  // Calculate the average
  avg = sum / numbersArray.length;

  // Update the DOM elements
  sumElement.textContent = sum;
  avgElement.textContent = avg;

  // Clear the input element
  inputElement.value = "";
}

// Add event listener to the "Calculate" button to call the calculateAverage function
document.getElementById("submit").addEventListener("click", function () {
  calculateAverage();
});
