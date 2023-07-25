// Bounce off rectangle example

// Canvas Variables
let canvasWidth = 400;
let canvasHeight = 400;

// Circle Variables
let circleX = canvasWidth / 2;
let circleY = canvasHeight / 2;
let circleSpeedX = 3;
let circleSpeedY = 3;
let circleRadius = 30;

// Rectangle Variables
let rectWidth = 200;
let rectHeight = 20;
let rectX = canvasWidth / 2 - rectWidth / 2;
let rectY = canvasHeight - rectHeight;

// Counter
let count = 0;

function setup() {
  // Set canvas size using canvasWidth and canvasHeight variables
  createCanvas(canvasWidth, canvasHeight);
  background(220);
}

function draw() {
  background(220);
  // Draw the circle at (circleX, circleY) with the specified radius
  ellipse(circleX, circleY, circleRadius * 2);

  // Draw the rectangle at (rectX, rectY) with the specified width and height
  rect(rectX, rectY, rectWidth, rectHeight);

  // Handle Circle Collisions with Canvas Edges
  if (circleX - circleRadius < 0 || circleX + circleRadius > canvasWidth) {
    // If the circle hits the left or right edge, reverse its horizontal direction
    circleSpeedX *= -1;
  }
  if (circleY - circleRadius < 0 || circleY + circleRadius > canvasHeight) {
    // If the circle hits the top or bottom edge, reverse its vertical direction
    circleSpeedY *= -1;
  }

  // Move the rectangle based on user input (LEFT_ARROW and RIGHT_ARROW keys)
  // Arrow keys move rectangle left / right
  // Reference: https://p5js.org/reference/#/p5/keyIsDown
  if (keyIsDown(LEFT_ARROW)) {
    rectX -= 5;
  } else if (keyIsDown(RIGHT_ARROW)) {
    rectX += 5;
  }
  //   Constrain the rectangle's position to the canvas boundary
  // reference: https://p5js.org/reference/#/p5.Element/constrainPosition
  rectX = constrain(rectX, 0, canvasWidth - rectWidth);

  // Circle-Rectangle Collisions
  // Check if the circle's bottom point is colliding with the rectangle
  // Function to check if the circle is colliding with the rectangle
  // Reference: https://iu.instructure.com/courses/2156188/assignments/14818564?module_item_id=29524306
  let isColliding = collideRect(
    circleX,
    circleY + circleRadius,
    rectX,
    rectY,
    rectWidth
  );

  if (isColliding) {
    // If the circle is colliding with the rectangle:
    // - Move the circle above the rectangle
    circleY = rectY - circleRadius;

    // - Reverse the circle's vertical direction
    circleSpeedY *= -1;

    // - Increase the counter by 1 and log the updated count
    count++;
    console.log(`Count: ${count}`);
    document.getElementById("count").textContent = count;
  }

  // Move the circle based on its speed in both x and y directions
  circleX += circleSpeedX;
  circleY += circleSpeedY;
}

// Function to check if the circle is colliding with the rectangle
function collideRect(circleX, circleY, rectX, rectY, rectWidth) {
  // Define a variable to store the collision status
  let isColliding = false;

  // Check if the circle's bottom point is below the top edge of the rectangle,
  // its left side is to the right of the left edge, and its right side is to the left of the right edge
  if (circleY > rectY && circleX > rectX && circleX < rectX + rectWidth) {
    // If all conditions are true, the circle is colliding with the rectangle
    isColliding = true;
  }

  // Return the collision status
  return isColliding;
}
