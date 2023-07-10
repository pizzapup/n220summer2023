// Dripping Water app.js

// Array holding rgb values for background color
let bg = [244, 248, 252];

// Array to store circle Y locations
const circleYs = [];

function setup() {
  createCanvas(400, 400);
  // https://p5js.org/reference/#/p5/height
  // https://p5js.org/reference/#/p5/width)
}

function draw() {
  // set colors
  background(bg); // clear background of canvas
  stroke(153, 237, 243);
  fill(212, 241, 249);

  // Draw circle every 10 frames --> if current frame count is divisble evenly by 10, add new circle
  if (frameCount % 10 === 0) {
    // Add new circle's Y location to the array
    circleYs.push(0);
  }

  // Loop through the circleYs array
  for (let i = 0; i < circleYs.length; i++) {
    // Increment the Y location by 5px
    circleYs[i] += 5;

    // Draw a circle at the top center --> set the X to half of the canvas widtg
    const circleX = width / 2;
    const circleY = circleYs[i];
    const circleSize = 30;
    ellipse(circleX, circleY, circleSize); // draw circle (ellipse) at position determinged by the x,y
  }

  // Remove circles that are off the screen --> Loop through array in reverse order and use splice to remove circles y locations if its is larger than the canvas height
  for (let i = circleYs.length - 1; i >= 0; i--) {
    if (circleYs[i] > height) {
      circleYs.splice(i, 1);
    }
  }
}
