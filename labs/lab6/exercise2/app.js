// Virtual Pet

// Define the virtual pet object
const virtualPet = {
  name: "Fido", // The name of the pet
  energy: 50, // The energy level of the pet
  happiness: 50, // The happiness level of the pet
  age: 1, // The age of the pet
};

// Get the document elements by their ids
const nameElement = document.getElementById("name"); // The element to display the pet's name
const happinessElement = document.getElementById("happiness"); // The element to display the pet's happiness level
const energyElement = document.getElementById("energy"); // The element to display the pet's energy level
const feedButton = document.getElementById("feedButton"); // The button to feed the pet
const playButton = document.getElementById("playButton"); // The button to play with the pet

// Function to update the pet's stats on the document
function updateStats() {
  nameElement.textContent = virtualPet.name; // Update the displayed name with the pet's name
  happinessElement.textContent = virtualPet.happiness; // Update the displayed happiness level with the pet's happiness level
  energyElement.textContent = virtualPet.energy; // Update the displayed energy level with the pet's energy level
}

// Function to feed the pet
function feedPet() {
  virtualPet.energy += 5; // Increase the pet's energy by 5
  updateStats(); // Update the pet's stats on the document
}

// Function to play with the pet
function playWithPet() {
  virtualPet.happiness += 5; // Increase the pet's happiness by 5
  updateStats(); // Update the pet's stats on the document
}

// Attach event listeners to the feed and play buttons
feedButton.addEventListener("click", feedPet); // When the feed button is clicked, call the feedPet function
playButton.addEventListener("click", playWithPet); // When the play button is clicked, call the playWithPet function

// Update the initial stats on the document
updateStats(); // Display the pet's initial stats on the document
