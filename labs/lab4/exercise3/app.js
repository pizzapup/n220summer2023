// ClickToDrop app.js

// Array to store brick objects
let bricks = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Do the style stuff
  background(244, 248, 252);
  strokeWeight(4);
  stroke(111, 35, 19);
  fill(201, 88, 50);

  // Loop through the bricks array
  for (let i = 0; i < bricks.length; i++) {
    const brick = bricks[i];

    // Move Y location of brick 5px per frame
    brick.y += 5;

    // Check if the brick has collided with any other brick or reached the bottom
    const collidedBrick = getCollidedBrick(brick);
    if (collidedBrick || brick.y + brick.height >= height) {
      if (collidedBrick) {
        // Stack the brick on top of the collided brick
        brick.y = collidedBrick.y - brick.height;
      } else {
        // Set the brick at the bottom of the canvas
        brick.y = height - brick.height;
      }
    }

    // Draw the brick at its current position
    drawRectangle(brick.x, brick.y, brick.width, brick.height);
  }
}

// Function to check if a brick has collided with any other brick
function getCollidedBrick(currentBrick) {
  for (let i = 0; i < bricks.length; i++) {
    const otherBrick = bricks[i];
    if (otherBrick !== currentBrick) {
      // Check for collision
      if (
        // Embarassing amount of unnecessary effort to make the bricks stack by comparing positions and sizes to check if brick intersects with another
        currentBrick.x < otherBrick.x + otherBrick.width &&
        currentBrick.x + currentBrick.width > otherBrick.x &&
        currentBrick.y < otherBrick.y + otherBrick.height &&
        currentBrick.y + currentBrick.height > otherBrick.y
      ) {
        return otherBrick; // Return the collided brick
      }
    }
  }
  return null; // Return null if no collision is found
}

// Function to draw a brick
function drawRectangle(x, y, width, height) {
  rect(x, y, width, height); // Draw a brick with the provided position, width, and height
}

// Event handler for mouse click
function mouseClicked() {
  const newBrick = {
    x: mouseX, // Store the X location of the mouse click
    y: mouseY, // Store the Y location of the mouse click
    width: 50, // Set the width of the brick
    height: 20, // Set the height of the brick
  };
  bricks.push(newBrick); // Add the new brick to the bricks array
}
