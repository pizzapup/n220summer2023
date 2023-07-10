// Raindrops app.js

// Array to hold circle objects
const circles = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(244, 248, 252);
  strokeWeight(2);
  stroke(153, 237, 243);
  fill(212, 241, 249);

  // Draw a circle every 10 frames
  if (frameCount % 10 === 0) {
    const circleX = random(width);
    const circle = {x: circleX, y: 0, size: 30, speed: 5};
    circles.push(circle);
  }

  // Loop through the circles array
  for (let i = 0; i < circles.length; i++) {
    const {x, y, size, speed} = circles[i];

    // Update the Y location of the circle
    circles[i].y += speed;

    // Draw circle at current position
    drawWaterDrop(x, y, size);

    // Remove circles that are off the screen
    if (y > height) {
      circles.splice(i, 1);
      i--;
    }
  }
}

// Function to draw waterdrop-shaped circle
function drawWaterDrop(x, y, size) {
  const angle = PI / 6;

  // Create custom shape (https://p5js.org/reference/#/p5/beginShape)
  beginShape();
  vertex(x, y - size / 2);
  bezierVertex(
    x + size * cos(angle),
    y + size / 2,
    x - size * cos(angle),
    y + size / 2,
    x,
    y - size / 2
  );
  endShape(CLOSE);
}
