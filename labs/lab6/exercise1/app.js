// List Display

// Define the Dog class representing a dog in the collection
class Dog {
  constructor(name, breed, size) {
    this.name = name; // The dog's name
    this.breed = breed; // The dog's breed
    this.size = size; // The dog's size (e.g., small, medium, large)
    this.divElement = null; // Reference to the div element for the dog
  }

  // Method to generate the text content for the dog's display
  generateTextContent() {
    return `Name: ${this.name}, Breed: ${this.breed}, Size: ${this.size}`;
  }
}

// Define the collection of dogs
const dogs = [
  new Dog("Max", "Golden Retriever", "medium"),
  new Dog("Bella", "Labrador Retriever", "large"),
  new Dog("Charlie", "German Shepherd", "small"),
];

// Get the collection element by its id
const collectionElement = document.getElementById("collection");

// Loop through the dogs collection
for (let i = 0; i < dogs.length; i++) {
  const dog = dogs[i];

  // Create a div element for each dog
  const dogDiv = document.createElement("div");
  dogDiv.className = "dog";
  dogDiv.textContent = dog.generateTextContent();

  // Assign the div element to the divElement property of the dog object
  dog.divElement = dogDiv;

  // Apply a different background color if the dog's size is large
  if (dog.size === "large") {
    dogDiv.classList.add("different-bg");
  }

  // Append the dog div to the collection element
  collectionElement.appendChild(dogDiv);
}
