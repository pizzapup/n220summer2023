// Pyramid
// Draw a pyramid-like pattern made of red squares
function setup() {
  createCanvas(400, 400); // Canvas of size 400x400 pixels

  let bg = [244, 248, 252];
  let size = 50; // Size of the squares
  let startX = 50; // Starting x-coordinate
  let startY = height - size; // Starting y-coordinate (height of the canvas - size of the square) positions the bottom row of squares at the bottom of the canvas

  background(bg);
  stroke(bg);
  fill(255, 0, 0); // Red fill color

  // Nested `for` loops to draw the pyramid
  // Outer loop iterates 4 times to draw 4 rows
  for (let row = 0; row < 4; row++) {
    // Inner loop controls the number of squares in each row (4 - row) to draw 4 squares in the first row, 3 squares in the second row, 2 squares in the third row, and 1 square in the last row
    for (let col = 0; col < 4 - row; col++) {
      // Draw a square of at specified x and y coordinates
      rect(startX + col * size, startY - row * size, size, size);
    }
  }
}
