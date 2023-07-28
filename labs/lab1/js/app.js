// JavaScript sketch using the p5.js library to draw a bear wearing a tiny hat
// p5.js reference: https://p5js.org/

// Set up the canvas; setup() runs once at beginning of sketch
function setup() {
  createCanvas(800, 800); // Canvas of size 800x800 pixels
  rectMode(CENTER); // Set rectangle mode to `CENTER` so x and y coordinates for shapes like rectangles will be specified from their centers
  // https://p5js.org/reference/#/p5/rectMode
}
// The draw() function runs in a loop after setup and continuously redraws the elements on the canvas
function draw() {
  // Setting the variables

  // Size of the head
  let headSize = 150;

  // Store the x and y coordinates of center of the canvas to use as starting point for drawing elements
  let centerY = 140;
  let centerX = 200;

  // Colors: store the rgb values that will be used in the drawing
  let colorLightBrown = [234, 221, 202];
  let colorDarkBrown = [111, 78, 55];
  let colorHat = [89, 70, 103];

  // Shorthand for drawing circles/ellipses on the canvas; Makes it more convenient to use and keeps the code concise
  // Takes parameters:
  // `x` & `y` = center coordinates of the shape
  // `l` as the diameter or width
  // `w` as the height(if no`w` is specified the value of `l` will be used)
  let smCircle = (x, y, l = 10, w) => ellipse(x, y, l, w ? w : l);

  // Draw the bear
  // Functions are called in order of bottom-layer to top-layer (hat will show on top of all other elements)

  // Draw the outer ears
  fill(colorDarkBrown);

  smCircle(172, centerY - 75, 25, 30);
  smCircle(229, centerY - 74, 25, 30);
  // earsInner
  fill(colorLightBrown);
  smCircle(172, centerY - 75, 15, 20);
  smCircle(229, centerY - 74, 15, 20);

  // Draw the bear's body
  fill(colorDarkBrown);
  ellipse(centerX, centerY, headSize, headSize);

  // Draw the legs
  fill(colorDarkBrown);
  rect(centerX - 65, centerY + 55, 70, 40);
  rect(centerX + 65, centerY + 55, 70, 40);

  // Draw the arms
  rect(centerX - 35, centerY + 55, 30, 40);
  rect(centerX + 35, centerY + 55, 30, 40);
  noStroke();

  // Draw the over lap for the arms to hide the stroke of the arm elements
  fill(colorDarkBrown);
  rect(centerX - 35, centerY + 35, 40, 10);
  rect(centerX + 35, centerY + 35, 40, 10);
  rect(centerX + 35, centerY + 35, 40, 10);

  // Draw the nose
  stroke(0, 0, 0);
  fill(colorLightBrown);
  smCircle(centerX, centerY - 50, 30, 20);
  fill(0, 0, 0);
  smCircle(centerX, centerY - 54, 10, 5);

  // Draw the eyes
  smCircle(220, centerY - 60, 5);
  smCircle(182, centerY - 60, 5);

  // Draw the mouth
  noFill();
  arc(centerX - 5, centerY - 52, 10, 10, 0, HALF_PI);
  arc(centerX + 5, centerY - 52, 10, 10, HALF_PI, PI);

  // Draw the hat
  fill(colorHat);
  rect(centerX, centerY - 76, 25, 8);
  triangle(
    centerX + 10,
    centerY - 80,
    centerX + -10,
    centerY - 80,
    centerX,
    centerY - 120
  );
}
