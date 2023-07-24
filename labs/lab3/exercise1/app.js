// Fizzbuzz
// Create a row of 25 shapes with alternating colors and shapes (rectangles and ellipses) with spacing between them
function setup() {
  createCanvas(800, 200);
}

function draw() {
  background(220);

  let x = 15; // x-coordinate starting at 15
  let y = height / 2; // y-coordinate starting at the middle of the canvas (https://p5js.org/reference/#/p5/height)
  let shapeSize = 15; // size (diameter for ellipses and side length for rectangles) of the shapes

  // Draw the shapes in a `for` loop that iterates 25 times
  for (let i = 1; i <= 25; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      // If `i` is divisible by 3 and 5 it means `i` is divisible by 15 so draw a blue rectangle
      fill("blue");
      rect(x, y, shapeSize, shapeSize);
    } else if (i % 3 === 0) {
      // If `i` is only divisible by 3, draw a purple ellipse
      fill("purple");
      ellipse(x, y, shapeSize, shapeSize);
    } else if (i % 5 === 0) {
      // If `i` is only divisible by 5, draw a green rectangle
      fill("green");
      rect(x, y, shapeSize, shapeSize);
    } else {
      // If `i` is not divisible by 3 or 5, draw a black ellipse
      fill("black");
      ellipse(x, y, shapeSize, shapeSize);
    }
    // After each shape is drawn, increment the `x` value by `shapeSize + 15` to add a spacing of 15px between each shape
    x += shapeSize + 15;
  }
}
