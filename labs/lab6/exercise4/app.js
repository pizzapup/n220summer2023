// Define the Circle class representing a circle object
class Circle {
  // Constructor to initialize a circle with its x, y coordinates and size
  constructor(x, y, size) {
    this.x = x; // x-coordinate of the circle
    this.y = y; // y-coordinate of the circle
    this.size = size; // size of the circle
  }

  // Method to update the position of the circle
  update() {
    this.x += 1; // Increment the x-coordinate by 1 to move the circle horizontally

    // If the circle moves off the right edge of the canvas, wrap it to the left edge
    if (this.x > width + this.size / 2) {
      this.x = -this.size / 2;
    }
  }

  // Method to display the circle on the canvas
  display() {
    fill(255); // Set the fill color of the circle to white
    noStroke(); // Disable stroke (no outline)
    ellipse(this.x, this.y, this.size, this.size); // Draw the ellipse/circle at the specified position and size
  }
}

// Array to store the circle objects
let circles = [];

function setup() {
  createCanvas(400, 400); // Create a canvas of size 400x400 pixels

  // Create multiple circle objects and add them to the circles array
  for (let i = 0; i < 10; i++) {
    // Generate random x, y coordinates and size for each circle
    let x = random(width);
    let y = random(height);
    let size = random(10, 50);

    // Create a new Circle object using the generated values and add it to the circles array
    let circle = new Circle(x, y, size);
    circles.push(circle);
  }
}

function draw() {
  background(220); // Set the background color to light gray

  // Loop through each circle object in the circles array
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i]; // Get the current circle object

    circle.update(); // Update the position of the circle
    circle.display(); // Display the circle on the canvas
  }
}
