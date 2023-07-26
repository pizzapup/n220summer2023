// Bad word catcher with loops app.js

// Get references to the DOM elements
let inputElement = document.getElementById("words-input"); // input
let outputElement = document.getElementById("output"); // output
let numberOutputElement = document.getElementById("number-output"); // output (secondary)

// Initialize the bad words array
const badWords = ["clear", "water", "tires"];

// Initialize the count
let count = 0;

// Check for bad words
function checkForBadWords(inputArray) {
  // Loop through the input array
  for (let i = 0; i < inputArray.length; i++) {
    // Get the current word
    let word = inputArray[i];

    // Check if the word is in the bad words array
    if (badWords.includes(word.toLowerCase())) {
      // Increment the count
      ++count;
    }
  }

  // Check if the count is greater than 0
  let containsBadWord = count !== 0 ? true : false;

  // Update the output
  updateDOM(containsBadWord, inputArray.length);

  // Log the count and true/false
  console.log(containsBadWord);
  console.log(count);
}

// Update the output
function updateDOM(containsBadWord, numberOfWords) {
  // Check if the count is greater than 0
  if (containsBadWord === false) {
    // If no bad words were found out of the input array, output "No bad words found out of the input array."
    outputElement.textContent = `No bad words found out of ${numberOfWords} words.`;
  } else {
    // If bad words were found out of the input array, output "Bad words found."
    outputElement.textContent = `Bad words found. `;
    // And output the number of bad words
    numberOutputElement.textContent += `${count} of the ${numberOfWords} words found are bad.`;
  }
}

// Handle the click event
function handleButtonClick() {
  // Get the input from the user and split it into an array
  let inputArray = inputElement.value.split(" ");

  // Call the checkForBadWords function with the input array
  checkForBadWords(inputArray);

  // Clear the input
  inputElement.value = "";
}

// Call the handleButtonClick function
document.getElementById("submit").addEventListener("click", handleButtonClick);
