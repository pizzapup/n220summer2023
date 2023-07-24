// Number Guesser
// User has to guess a randomly generated number between 1 and 20

class NumberGuesser {
  constructor(messageElement, guessInput, guessButton, guessListElement) {
    this.targetNumber = this.generateRandomNumber(); // The number the user is trying to guess (this is a random number between 1 and 20)
    this.guessList = []; // Array to store the user's guesses
    this.guessListElement = guessListElement; // HTML element to display the user's guesses
    this.createSpans(); // Display numbers between 1 and 20
    this.messageElement = messageElement; // HTML element to display messages to the user
    this.guessInput = guessInput; // HTML input element to get the user's guess
    this.guessButton = guessButton; // HTML button element to submit the user's guess (this is the submit button in the html that will trigger the handleGuess method)

    this.guessButton.addEventListener("click", this.handleGuess.bind(this)); // Add an event listener to the guessButton element that will call the handleGuess method when the user clicks the button
  }

  // This method will generate a random number between 1 and 20 and store it in the targetNumber property
  generateRandomNumber() {
    return Math.floor(Math.random() * 20) + 1;
  }

  // This method will display a message to the user (on the html document and in the console) based on the user's guess and the result of the guess
  displayUserMsg(userGuess, message) {
    // Create object with message options to be displayed to user
    let messages = {
      correct: `Congratulations! ${userGuess} is the correct number. Try guessing a new number between 1 and 20.`,
      invalid: `${userGuess} is not a number. Please enter a valid number.`,
      repeat: `You already guessed the number ${userGuess}`,
      over: `${userGuess} is too high!`,
      under: `${userGuess} is too low!`,
    };
    // Message options are displayed to user based on the message argument passed to the method (keys: correct, invalid, repeat, over, under)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#array_destructuring

    // Display message to user in html document
    this.messageElement.textContent = messages[message];
    // Display message to user in console
    console.log(messages[message]);
  }

  // If the user guess is correct, call the correctGuess method. This method will display the correct guess message to the user, reset the guessList array, generate a new targetNumber, and create new spans for the guessList.
  correctGuess(userGuess) {
    // Display `correct` guess message
    this.displayUserMsg(userGuess, "correct");

    // Reset guessList array & call the createSpans method to clear all guesses and their styling
    this.guessList = [];
    this.createSpans();

    // Generate new targetNumber
    this.targetNumber = this.generateRandomNumber();
  }

  // Handle guess (user input), called when user clicks guess button. This inital method will get the value from the input and check if: it is a number type, if it has already been guessed, or if it is the correct number. If none of these apply, it will call the displayGuessResult method. The input field is then cleared.
  handleGuess() {
    // Get userGuess from input field and convert to number type using parseInt method
    const userGuess = parseInt(this.guessInput.value);

    // Check if userGuess is a number
    isNaN(userGuess)
      ? this.displayUserMsg(userGuess, "invalid")
      : // Check if userGuess is already guessed
      this.guessList.includes(userGuess)
      ? this.displayUserMsg(userGuess, "repeat")
      : // Check if userGuess is correct
      userGuess === this.targetNumber
      ? this.correctGuess(userGuess)
      : // If none of the above apply, send the userGuess and guestList to the displayGuessResult function where it will be checked against being over or under the targetNumber
        this.displayGuessResult(userGuess, this.guessList);

    // Clear input field
    this.guessInput.value = "";
  }

  // Display guess result. This method will add the userGuess to the guessList array, then check if the userGuess is over or under the targetNumber. The userGuess will be displayed in the list of numbers defined in the createSpans method and the color of the number will be changed depending on if it is over or under the targetNumber.
  displayGuessResult(userGuess) {
    // Add userGuess to guessList
    this.guessList.push(userGuess);
    // Get span element with id of userGuess so we can change color depending on if it is over or under the targetNumber
    let guessSpan = document.getElementById(`${userGuess}`);
    if (userGuess < this.targetNumber) {
      // If userGuess is under the targetNumber, change color to red and display the "under" message
      this.displayUserMsg(userGuess, "under");
      guessSpan.style.color = "blue";
    } else {
      // If userGuess is over the targetNumber, change color to green and display the "over" message
      this.displayUserMsg(userGuess, "over");
      guessSpan.style.color = "red";
    }
  }

  // Create spans to display the numbers 1 to 20 in the guessListElement and assign each span's id to the number it represents
  createSpans() {
    // Clear existing spans
    this.guessListElement.innerHTML = "";
    // Create spans for numbers 1 to 20
    for (let number = 1; number <= 20; number++) {
      const listItem = document.createElement("span"); // Create a span element
      listItem.textContent = `${number}  `; // Set the text content of the span
      listItem.id = `${number}`; // Set the id of each span to the number it represents
      this.guessListElement.appendChild(listItem); // Add each span to the guessListElement
    }
  }
}

// Define variables for DOM elements
// These will be used to create a new instance of the NumberGuesser class
let messageElement = document.getElementById("message");
let guessInput = document.getElementById("guessInput");
let guessButton = document.getElementById("guessButton");
let guessListElement = document.getElementById("guessList");

// Create a new instance of the NumberGuesser class
const game = new NumberGuesser(
  messageElement,
  guessInput,
  guessButton,
  guessListElement
);
