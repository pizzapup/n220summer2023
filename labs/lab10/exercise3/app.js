// Flash Cards app.js

// Get the container and output elements  from the DOM
let container = document.getElementById("app");
let output = document.getElementById("output");

// Create an array of objects to hold the questions and answers
let cards = [
  {
    q: "What is this dog on a scale of 1 to 10: 🐶",
    a: "11/10 very good dog",
  },
  {q: "What are these dogs on a scale of 1 to 10: 🐕🐩", a: "11/10 dogs"},

  {q: "All dogs are __ out of 10 ?", a: "at least 11"},

  // {q: "Taco bell is the ________ of tacos.", a: "meatball"},
  // This was a randomly generated and so incredibly wild that i dont have the heart to delete it
];

// Loop through the array of objects and create a button for each
for (let i in cards) {
  // Create a button
  let card = document.createElement("button");

  // Set the text content of the button to the question
  card.innerText = cards[i].q;

  // Set the data attributes for the button to the answer
  card.setAttribute("data-answer", cards[i].a);

  // Add an event listener to the button to display the answer when clicked
  card.addEventListener("click", (e) => {
    // Get the data attribute from the button that was clicked
    let answer = e.target.dataset.answer;

    // Set the output element's text to the answer
    output.innerText = answer;
  });

  // Append the button to the container
  container.appendChild(card);
}
