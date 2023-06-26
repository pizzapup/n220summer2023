function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
}
function draw() {
  let headSize = 150;
  let centerY = 140;
  let centerX = 200;
  let colorLightBrown = [234, 221, 202];
  let colorDarkBrown = [111, 78, 55];
  let colorHat = [89, 70, 103];
  let smCircle = (x, y, l = 10, w) => ellipse(x, y, l, w ? w : l);

  // earsOuter
  fill(colorDarkBrown);
  smCircle(172, centerY - 75, 25, 30);
  smCircle(229, centerY - 74, 25, 30);
  // earsInner
  fill(colorLightBrown);
  smCircle(172, centerY - 75, 15, 20);
  smCircle(229, centerY - 74, 15, 20);

  //body
  fill(colorDarkBrown);
  ellipse(centerX, centerY, headSize, headSize);

  //legs
  fill(colorDarkBrown);
  rect(centerX - 65, centerY + 55, 70, 40);
  rect(centerX + 65, centerY + 55, 70, 40);
  // arms
  rect(centerX - 35, centerY + 55, 30, 40);
  rect(centerX + 35, centerY + 55, 30, 40);
  noStroke();
  // overlap
  fill(colorDarkBrown);
  rect(centerX - 35, centerY + 35, 40, 10);
  rect(centerX + 35, centerY + 35, 40, 10);
  rect(centerX + 35, centerY + 35, 40, 10);

  // nose
  stroke(0, 0, 0);
  fill(colorLightBrown);
  smCircle(centerX, centerY - 50, 30, 20);
  fill(0, 0, 0);
  smCircle(centerX, centerY - 54, 10, 5);

  // eyes
  smCircle(220, centerY - 60, 5);
  smCircle(182, centerY - 60, 5);

  // mouth
  noFill();
  arc(centerX - 5, centerY - 52, 10, 10, 0, HALF_PI);
  arc(centerX + 5, centerY - 52, 10, 10, HALF_PI, PI);

  // hat
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
