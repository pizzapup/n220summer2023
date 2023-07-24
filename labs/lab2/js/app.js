// Lab 2

// !!NOTE: The p5() constructor enables the activation of "instance mode" which allows the page to contain more than one p5 sketch.

// Default containers for canvas and other elements are specified in the second argument of the p5() constructor using the ID of the corresponding html element
// Example: let myp5 = new p5(s, 'myContainer');

// All p5 functions are bound in a single variable rather than the golbal namespace
// Example: var instancedDrawing = (p) => { ... };

// Instance mode and p5() references:
// https://p5js.org/reference/#/p5/p5
// https://github.com/processing/p5.js/wiki/p5.js-overview#instantiation--namespace

// --------------------------------------------------

// LAB 2 EXERCISES

// To keep the canvas background-color consistent on all exercises, the bg color is defined as a global variable
var bg = [244, 248, 252];

// Counter app
var counterApp = function (p) {
  let counter = 0; // Start counter at 0
  let isCounting = false; // Boolean to start and stop the counter (false = stop, true = start)

  p.setup = function () {
    p.createCanvas(400, 100);
  };

  p.draw = function () {
    isCounting ? counter++ : counter; // Increment counter if isCounting is true (counter will stop if isCounting is false)
    p.fill(50);
    p.textSize(100);
    p.background(bg);
    p.text(counter, 30, 90);
  };

  // Clicking the mouse will start/stop the counter by changing the boolean value of isCounting to the opposite value of isCounting
  // mouseClicked is a p5.js method. reference: https://p5js.org/reference/#/p5.Element/mouseClicked
  p.mouseClicked = function () {
    if (isCounting === true) {
      isCounting = false;
    } else {
      isCounting = true;
    }
  };
};
// Create a new p5 instance with the counterApp function above and target the element with the id of "counterApp"
var myp5 = new p5(counterApp, "counterApp");

// Puck side
var puckSideApp = function (p) {
  var lColor = "#215a63"; // Color for the left side
  var rColor = "#993430"; // Color for the right side
  var currColor = "#ffffff"; // Current color
  p.setup = function () {
    p.createCanvas(400, 300);
  };
  p.draw = function () {
    p.background(bg);
    p.noStroke();
    p.fill(currColor); // Set the fill color to the current color
    p.ellipse(p.mouseX, p.mouseY, 50, 50);
    // If the mouse is on the left side of the canvas, set the current color to the left color, otherwise set the current color to the right color
    // Horizontal position of the mouse stored in the system variable mouseX: https://p5js.org/reference/#/p5/mouseX
    // Vertical position of the mouse stored in the system variable mouseY: https://p5js.org/reference/#/p5/mouseY
    if (p.mouseX <= 200) {
      // Since canvas is 400px wide, the center is at 200px
      currColor = lColor; // Set the current color to the left color if the mouse is on the left side
    } else {
      currColor = rColor; // Set the current color to the right color if the mouse is on the right side
    }
  };
};
// Create a new p5 instance with the puckSideApp function above and target the element with the id of "puckSideApp"
var myp5 = new p5(puckSideApp, "puckSideApp");

// World wrap
var worldWrapApp = function (p) {
  var xPos = 0; // Horizontal position of the ball
  p.setup = function () {
    p.createCanvas(800, 600);
  };
  p.draw = function () {
    p.background(bg);
    p.noStroke();
    p.fill("#294936");
    p.ellipse(xPos, 300, 50, 50); // Draw the ball at the current horizontal position (xPos) and at the vertical center of the canvas (half of the height of the canvas - 300)
    xPos == 800 ? (xPos = 0) : (xPos = xPos + 5); // Increment the horizontal position of the ball by 5px until it reaches the end of the canvas (800px), then reset the position to 0 (left side of the canvas)
  };
};
// Create a new p5 instance with the worldWrapApp function above and target the element with the id of "worldWrapApp"
var myp5 = new p5(worldWrapApp, "worldWrapApp");

// Ball bounce
var ballBounce = function (p) {
  var x = 0; // Horizontal position of the ball
  var y = 200; // Vertical position of the ball
  var speed = 3; // Speed of the ball (horizontal)
  var speedY = 4; // Speed of the ball (vertical)
  var width = 600; // Width of the ball
  var height = 800; // Height of the ball
  p.setup = function () {
    p.createCanvas(width, height); // Create the canvas using the width and height variables
  };
  p.draw = function () {
    p.fill(1);
    p.background(bg);
    p.ellipse(x, y, 50, 50); // Draw the ball at the current horizontal position (x) and at the vertical center of the canvas (half of the height of the canvas - 300)
    x += speed; // Increment the horizontal position of the ball
    y += speedY; // Increment the vertical position of the ball

    // Check if the ball hits the left or right side of the canvas (width) or the top or bottom of the canvas (height) and reverse the speed of the ball if it does so it bounces back in the opposite direction
    if (x >= width || x <= 0) {
      // If the ball hits the left or right side of the canvas, reverse the speed of the ball by multiplying the speed by -1
      speed *= -1;
    }
    if (y >= height || y <= 0) {
      // If the ball hits the top or bottom of the canvas, reverse the speed of the ball by multiplying the speed by -1
      speedY *= -1;
    }
  };
};
// Create a new p5 instance with the ballBounce function above and target the element with the id of "ballBounceApp"
var myp5 = new p5(ballBounce, "ballBounceApp");

// Ever larger, until not
var everLarger = function (p) {
  var d = 1; // Diameter of the circle (starts at 1px)
  p.setup = function () {
    p.createCanvas(300, 300);
  };
  p.draw = function () {
    p.background(bg);
    p.noStroke();
    // Fun colors
    // Reference: https://p5js.org/reference/#/p5/color
    // https://p5js.org/reference/#/p5.Color/setBlue
    let backgroundColor = p.color(100, 50, 150); // Set the background color
    backgroundColor.setBlue(128 + 128 * p.sin(p.millis() / 1000)); // Change the blue value of the background color
    p.fill(backgroundColor); // Set the fill color to the new background color
    p.circle(150, 150, d); // Draw the circle at the center of the canvas (150, 150) with the current diameter (d)
    ++d; // Increase the diameter by 1 each time the draw function is called
    d == 200 && (d = 1); // Reset the diameter to 1 if the diameter reaches 200
  };
};
// Create a new p5 instance with the everLarger function above and target the element with the id of "everLargerApp"
var myp5 = new p5(everLarger, "everLargerApp");
