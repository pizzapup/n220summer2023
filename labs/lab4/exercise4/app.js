// Snake app.js

// Array to hold circle positions
const positions = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(244, 248, 252);

  // draw circles at previous positions
  positions.forEach(({x, y}) => drawCircle(x, y));

  // draw circle at current position
  drawCircle(mouseX, mouseY);

  // add current position to array
  positions.push({x: mouseX, y: mouseY});

  // remove oldest position if there are more than 10 circle
  if (positions.length > 10) {
    positions.shift();
  }
}

function drawCircle(x, y) {
  noStroke();
  fill(51, 180, 140);
  circle(x, y, 30);
}
