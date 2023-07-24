// Create a class named Dog with properties (name, breed, size)

class Dog {
  constructor(name, breed, size) {
    this.name = name;
    this.breed = breed;
    this.size = size;
    this.divElement = null; // The div element representing the dog in the collection of dogs on the page
  }

  // Generate the text content for the dog div element based on the dog's properties  (name, breed, size)
  generateTextContent() {
    return `Name: ${this.name}, Breed: ${this.breed}, Size: ${this.size}`;
  }

  // Generate the div element representing the dog in the collection of dogs on the page
  generateDivElement() {
    this.divElement = document.createElement("div"); // Create the div element representing the dog in the collection of dogs on the page (but don't attach it to the DOM yet)
    this.divElement.innerHTML = this.generateTextContent();

    return this.divElement; // Return the div element representing the dog in the collection of dogs on the page
  }

  // Attach the div element representing the dog in the collection of dogs on the page to the DOM
  displayDog() {
    document.body.appendChild(this.generateDivElement());
  }

  // Display the dog based on the selected size (all, small, medium, large)
  displayDogIfSizeMatches(selectedSize) {
    // If the selected size is the same as the dog's size, or if the selected size is "all"
    if (selectedSize === this.size || selectedSize === "all") {
      this.divElement.style.backgroundColor = "#ecfffe"; // Change the background color of the div element
      console.log(this.name + " is " + this.size);
    }
    // Otherwise display the dog in the default background color
    else {
      this.divElement.style.backgroundColor = "#fafafa"; // Change the background color of the div element
      console.log(this.name + " is NOT " + selectedSize);
    }
  }
}

// Create an array of dogs
const dogs = [
  new Dog("Max", "German Shepherd", "large"),
  new Dog("Charlie", "Beagle", "medium"),
  new Dog("Rocky", "Labrador", "small"),
  new Dog("Fido", "Labrador", "small"),
  new Dog("Pico", "Labrador", "large"),
];

// Loop through the array of dogs and display each dog
for (const dog of dogs) {
  dog.displayDog();
}

// Create a fieldset element with radio buttons for selecting the size of the dogs to display   (all, small, medium, large)
class SizeSelector {
  static sizes = ["all", "small", "medium", "large"]; // All, small, medium, large  (all is selected by default)

  // Create a fieldset element with radio buttons for selecting the size of the dogs to display   (all, small, medium, large)
  static createFieldset() {
    //
    const fieldsetElement = document.createElement("fieldset"); // Create the fieldset element
    const legendElement = document.createElement("legend"); // Create the legend element
    legendElement.textContent = "Size"; // Set the text content of the legend element
    fieldsetElement.appendChild(legendElement); // Append the legend element to the fieldset element

    // Create the radio buttons for selecting the size of the dogs to display   (all, small, medium, large)
    for (const size of this.sizes) {
      const radioElement = this.createElement("input", {
        type: "radio",
        name: "size",
        id: size,
        value: size, // The value of the radio button is the size (all, small, medium, large)
      });
      // Create the label element for the radio button
      const labelElement = this.createElement("label", {
        textContent: size,
        for: size,
      });
      // Append the radio button and label element to the fieldset element
      fieldsetElement.appendChild(radioElement);
      fieldsetElement.appendChild(labelElement);
    }

    // Add a change event listener to the fieldset element to display the dogs based on the selected size (all, small, medium, large)
    fieldsetElement.addEventListener("change", SizeSelector.onSizeChange);
    // Return the fieldset element with radio buttons for selecting the size of the dogs to display   (all, small, medium, large)
    return fieldsetElement;
  }
  // Create an element with the specified tag and attributes
  static createElement(tag, attributes) {
    const element = document.createElement(tag);
    Object.assign(element, attributes);
    // Return the element with the specified tag and attributes
    return element;
  }
  // Display the dogs based on the selected size (all, small, medium, large)
  static onSizeChange(event) {
    const selectedSize = event.target.value; // Get the selected size from the fieldset element
    console.log("Selected size:", selectedSize);
    for (const dog of dogs) {
      // Display the dog based on the selected size
      dog.displayDogIfSizeMatches(selectedSize);
    }
  }
}

// Display the fieldset element with radio buttons for selecting the size of the dogs to display
document.body.appendChild(SizeSelector.createFieldset());
