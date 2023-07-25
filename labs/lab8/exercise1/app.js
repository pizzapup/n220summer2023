// Show Info app.js

// Create an array of strings
let textArray = ["I like dogs", "Dogs are cool", "All dogs are 11/10"];

// Array element accessed using the `index` parameter and corresponding text is displayed in the "app" element
// https://www.w3schools.com/js/js_arrays.asp
function changeText(index) {
  let newText = textArray[index];
  document.getElementById("app").textContent = newText;
  console.log(newText);
}

// Generate buttons for each element in the array
function generateButtons() {
  textArray.forEach((text, id) => {
    // Create an element for each button
    // https://www.w3schools.com/jsref/jsref_foreach.asp
    const button = document.createElement("button");

    // Set the button text to the corresponding text in the array
    button.textContent = `${text}`;
    button.style.margin = "3px";
    button.style.padding = "5px";

    // Add an event listener to the button that calls the changeText function
    button.addEventListener("click", () => {
      // Pass the index of the element to the changeText function
      changeText(id);
    });

    // Append the button element to the "btns" element
    btns.appendChild(button);
  });
}

// Create the DOM elements for the buttons
generateButtons();
