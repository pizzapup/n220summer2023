function setup() {
  createCanvas(800, 200);
}

function draw() {
  background(220);

  let x = 15;
  let y = height / 2;
  let shapeSize = 15;

  for (let i = 1; i <= 25; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      fill("blue");
      rect(x, y, shapeSize, shapeSize);
    } else if (i % 3 === 0) {
      fill("purple");
      ellipse(x, y, shapeSize, shapeSize);
    } else if (i % 5 === 0) {
      fill("green");
      rect(x, y, shapeSize, shapeSize);
    } else {
      fill("black");
      ellipse(x, y, shapeSize, shapeSize);
    }
    x += shapeSize + 15; // spacing between shapes
  }
}
