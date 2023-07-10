// Neapolitan app.js

// Array holding rgb values for background color
let bg = [244, 248, 252];

// Array of colors from https://colorswall.com/palette/213545
const colors = ["#f9a1bc", "#fefaec", "#80584e"];

function setup() {
  createCanvas(400, 200);
  background(bg);
  // Remove the stroke outlines so colors look better
  noStroke();

  // Calculate the width of each rectangle by dividing canvas width by length of colors array
  const rectWidth = width / colors.length;

  // Loop through the colors array using a for loop
  for (let i = 0; i < colors.length; i++) {
    // Set the fill color for the rectangle using the current color
    fill(colors[i]);

    // Calculate the x-coordinate of the rectangle by multiplying the rectangle width with the indnex `i` so the rectangles are horizontal
    const rectX = i * rectWidth;

    // Draw the rectangle at the calcuated x,y position
    rect(rectX, 0, rectWidth, height);

    // it looks like neapolitan ice cream!
  }
}
