function setup() {
  createCanvas(400, 400);

  let bg = [244, 248, 252];
  let size = 50;
  let startX = 50;
  let startY = height - size;

  background(bg);
  stroke(bg);
  fill(255, 0, 0);

  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4 - row; col++) {
      rect(startX + col * size, startY - row * size, size, size);
    }
  }
}
