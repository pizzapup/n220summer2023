class NumberGuesser {
  // Class for the number guessing game

  // Generate a random number between 1 and 20
  static generateRandomNumber() {
    return Math.floor(Math.random() * 20) + 1;
  }

  // Method to handle button click event
  static guessNumber() {
    // Retrieve the value entered in the input field with id "guessInput"
    const userGuess = parseInt(document.getElementById("guessInput").value);

    // Check if the entered value is a valid number
    if (isNaN(userGuess)) {
      console.log("Invalid input. Please enter a valid number.");
      return;
    }

    // Clear the input field
    document.getElementById("guessInput").value = "";

    // Calculate the comparison result (-1 for too low, 0 for correct, 1 for too high)
    const comparisonResult = Math.sign(userGuess - NumberGuesser.correctNumber);

    // Lookup table for feedback messages based on comparison results
    const comparisonResults = {
      "-1": "Too low! Try guessing a higher number.",
      0: "Congratulations! You guessed the correct number.",
      1: "Too high! Try guessing a lower number.",
    };

    // Retrieve the feedback message based on the comparison result
    const feedbackMessage = comparisonResults[comparisonResult.toString()];

    console.log(feedbackMessage);

    if (comparisonResult === 0) {
      NumberGuesser.correctNumber = NumberGuesser.generateRandomNumber();
      console.log("Guess a new number between 1 and 20.");
    }
  }
}

// Generate the initial correct number to be guessed
NumberGuesser.correctNumber = NumberGuesser.generateRandomNumber();

// Add event listener to the button with id "guessButton"
// When the button is clicked, call the NumberGuesser.guessNumber method
document
  .getElementById("guessButton")
  .addEventListener("click", NumberGuesser.guessNumber);
