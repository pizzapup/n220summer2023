// Greeter app
//  Generates a greeting message based on the provided name input and logs it to the console.

class Greeting {
  // A static method can be called without instantiating the class first
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
  static sayHello() {
    const name = document.getElementById("nameInput").value; // Get the value of the "nameInput" element

    const greetingMessage = `Hello ${name}`; // Generate the greeting

    console.log(greetingMessage); // Log the greeting
  }
}

// Add event listener to the submit button
document
  .getElementById("submitButton")
  .addEventListener("click", Greeting.sayHello);
