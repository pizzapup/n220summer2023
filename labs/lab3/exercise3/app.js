// Circles inside of circles
function setup() {
  createCanvas(400, 400);
  background(220);

  let largestRadius = 350; // size of largest circle
  let smallestRadius = 5; // size of the most inner circle
  let gap = 10; // space between the circles

  let numCircles = Math.floor((largestRadius - smallestRadius) / gap) + 1;

  // Draw the circles in a `for` loop that iterates `numCircles` times to draw `numCircles` circles
  for (let i = 0; i < numCircles; i++) {
    let radius = largestRadius - i * gap;
    circle(width / 2, height / 2, radius);
  }
}
