// Create a class called VirtualPet
class VirtualPet {
  // define virtual pet properties
  constructor(name, energy, happiness, age) {
    // Values passed to the constructor when a new instance of VirtualPet is created will be assigned to the properties of the instance
    this.name = name;
    this.energy = energy;
    this.happiness = happiness;
    this.age = age;
  }

  // Update the text content of the document elements with the values of the virtualPet instance
  updateStats() {
    nameElement.textContent = this.name;
    happinessElement.textContent = this.happiness;
    energyElement.textContent = this.energy;
  }

  // Log a message to the console to confirm the pet's energy or happiness has increased
  logAction(action, amount, stat) {
    console.log(
      "You",
      action,
      this.name,
      "by",
      amount,
      ". ",
      this.name,
      "'s",
      stat,
      "is now:",
      this[stat]
    );
    console.log(this.name, "'s", stat, "is now:", this[stat]);
  }

  // Increase the pet's energy by 5 when feedButton is clicked
  feedPet() {
    this.energy += 5; // this.energy = this.energy + 5;
    this.updateStats();
    // Log a message to the console to confirm the pet's energy has increased
    this.logAction("fed", 5, "energy");
  }
  // Increase the pets happiness by 5 when playButton is clicked
  playWithPet() {
    this.happiness += 5; // this.happiness = this.happiness + 5;
    this.updateStats();
    this.logAction("played with", 5, "happiness");
  }
}

// Create an instance of VirtualPet
const virtualPet = new VirtualPet("Fido", 50, 50, 1);

// Get the document elements by their ids and assign them to variables so we can update them later
// Variable names are the property names of the VirtualPet class + "Element" to make semantically clear
const nameElement = document.getElementById("name");
const happinessElement = document.getElementById("happiness");
const energyElement = document.getElementById("energy");
const feedButton = document.getElementById("feedButton");
const playButton = document.getElementById("playButton");

// Create a function to update the stats on the document with the values of the virtualPet instance
function updateStats() {
  virtualPet.updateStats();
}

// Attach event listeners to the feed and play buttons to call the feedPet and playWithPet methods on the virtualPet instance when clicked
// See https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
feedButton.addEventListener("click", () => {
  // Call the feedPet method on the virtualPet instance when the feedButton is clicked - this will increase the pet's energy by 5
  virtualPet.feedPet();
});
playButton.addEventListener("click", () => {
  // Call the playWithPet method on the virtualPet instance when the playButton is clicked - this will increase the pet's happiness by 5
  virtualPet.playWithPet();
});

// Call the updateStats function on page load to update the stats on the document with the initial values of the virtualPet instance
updateStats();
