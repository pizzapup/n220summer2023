var bg = [244, 248, 252];

// counter app
var counterApp = function (p) {
  let counter = 0;
  let isCounting = false;
  p.setup = function () {
    p.createCanvas(400, 100);
  };

  p.draw = function () {
    isCounting ? counter++ : counter;
    p.fill(50);
    p.textSize(100);
    p.background(bg);
    p.text(counter, 30, 90);
  };
  p.mouseClicked = function () {
    if (isCounting === true) {
      isCounting = false;
    } else {
      isCounting = true;
    }
  };
};
var myp5 = new p5(counterApp, "counterApp");

// puck side
var puckSideApp = function (p) {
  var lColor = "#215a63";
  var rColor = "#993430";
  var currColor = "#ffffff";
  p.setup = function () {
    p.createCanvas(400, 300);
  };
  p.draw = function () {
    p.background(bg);
    p.noStroke();
    p.fill(currColor);
    p.ellipse(p.mouseX, p.mouseY, 50, 50);
    if (p.mouseX <= 200) {
      currColor = lColor;
    } else {
      currColor = rColor;
    }
  };
};
var myp5 = new p5(puckSideApp, "puckSideApp");

// world wrap
var worldWrapApp = function (p) {
  var xPos = 0;
  p.setup = function () {
    p.createCanvas(800, 600);
  };
  p.draw = function () {
    p.background(bg);
    p.noStroke();
    p.fill("#294936");
    p.ellipse(xPos, 300, 50, 50);
    xPos == 800 ? (xPos = 0) : (xPos = xPos + 5);
  };
};
var myp5 = new p5(worldWrapApp, "worldWrapApp");

// ball bounce
var ballBounce = function (p) {
  var x = 0;
  var y = 200;
  var speed = 3;
  var speedY = 4;
  var width = 600;
  var height = 800;
  p.setup = function () {
    p.createCanvas(width, height);
  };
  p.draw = function () {
    p.fill(1);
    p.background(bg);
    p.ellipse(x, y, 50, 50);
    x += speed;
    y += speedY;

    if (x >= width || x <= 0) {
      speed *= -1;
    }
    if (y >= height || y <= 0) {
      speedY *= -1;
    }
  };
};
var myp5 = new p5(ballBounce, "ballBounceApp");

// ever larger, until not
var everLarger = function (p) {
  var d = 1;
  p.setup = function () {
    p.createCanvas(300, 300);
  };
  p.draw = function () {
    p.background(bg);
    p.noStroke();
    // fun colors
    let backgroundColor = p.color(100, 50, 150);
    backgroundColor.setBlue(128 + 128 * p.sin(p.millis() / 1000));
    p.fill(backgroundColor);
    p.circle(150, 150, d);
    ++d;
    d == 200 && (d = 1);
  };
};
var myp5 = new p5(everLarger, "everLargerApp");
