// Greeter app.js

class Greeting {
  // Class for handling greetings

  // Method to handle button click event
  static sayHello() {
    // Get the value entered in the input field with id "nameInput"
    const name = document.getElementById("nameInput").value;

    // Create a greeting message with the entered name
    const greetingMessage = `Hello ${name}`;

    // Log the greeting message to the developer console
    console.log(greetingMessage);
  }
}

// Add event listener to the button with id "submitButton"
// When the button is clicked, call the Greeting.sayHello method
document
  .getElementById("submitButton")
  .addEventListener("click", Greeting.sayHello);
