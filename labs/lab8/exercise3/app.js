// Click for Random app.js

// Index of the current color
let color = 0;

// Array of 4 colors in RGB format [red, green, blue]
let colors = [
  [0, 145, 110],
  [141, 106, 159],
  [238, 97, 35],
  [255, 207, 0],
];

// p5.js setup function
function setup() {
  // Create a canvas 400px wide and 400px high
  createCanvas(400, 400);
}

// p5.js draw function
function draw() {
  background(220); // Set the background color
  fill(colors[color]); // Set the fill color using the current color index
  circle(width / 2, height / 2, 300); // Draw a circle in the center of the canvas by dividing the width and height by 2
}

// p5.js mouseClicked function
function mouseClicked() {
  // If the value of color does not equal 3, increment it by 1, otherwise reset it to 0
  // reference: https://p5js.org/reference/#/p5.Element/mouseClicked
  color !== 3 ? color++ : (color = 0);
  console.log(`New color: rgb(${colors[color]})`);
}
