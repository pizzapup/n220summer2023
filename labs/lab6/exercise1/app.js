// List Display

//  Define the Dog class
class Dog {
  // Define the constructor method with three parameters: name, breed, and size - these will be used to set the properties of the dog object when a new instance of Dog is created
  constructor(name, breed, size) {
    this.name = name; // The dog's name
    this.breed = breed; // The dog's breed
    this.size = size; //  The dog's size
    this.divElement = null; // The div element representing the dog in the collection
  }

  // Generate the text content for the dog div element based on the dog's properties
  generateTextContent() {
    // Return a string with the dog's name, breed, and size - this will be used as the text content for the div element
    return `Name: ${this.name}, Breed: ${this.breed}, Size: ${this.size}`;
  }
}

// Create an array of Dog objects
const dogs = [
  // Create a new Dog object for each dog in the array and pass in the dog's name, breed, and size as arguments to the Dog constructor method
  new Dog("Max", "Golden Retriever", "medium"),
  new Dog("Bella", "Labrador Retriever", "large"),
  new Dog("Charlie", "German Shepherd", "small"),
];

//  Get the collection element by its id and assign it to a variable so we can append the dog divs to it later
const collectionElement = document.getElementById("collection");

//  Loop through the dogs array and create a div element for each dog object in the array and append it to the collection element on the page
for (let i = 0; i < dogs.length; i++) {
  // Get the current dog object from the array and assign it to a variable so we can access its properties and methods
  const dog = dogs[i];

  // Create a div element and assign it to a variable so we can append it to the collection element on the page
  const dogDiv = document.createElement("div");
  // Add the dog class to the div element - this will allow us to style the div element later
  dogDiv.className = "dog"; // Add the dog class to the div element
  dogDiv.textContent = dog.generateTextContent(); // Set the text content of the div element to the text returned by the generateTextContent method on the dog object

  dog.divElement = dogDiv; // This will allow us to access the div element for the dog object later

  // Add a different background color to the div element based on the dog's size
  if (dog.size === "large") {
    // Add the large class to the div element - this will allow us to style the div element later (see styles.css) - see https://developer.mozilla.org/en-US/docs/Web/API/Element/classList for more info on the classList property and its methods (add, remove, toggle, etc.)
    dogDiv.classList.add("different-bg");
  }

  // Append the div element to the collection element on the page (see https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
  collectionElement.appendChild(dogDiv);
}
