// Make Divs app.js
let objects = [
  {color: "#FF0000", height: 100, width: 300},
  {color: "#FFFF00", height: 200, width: 200},
  {color: "#ff0000", height: 300, width: 100},
];

// Get the container element to append the divs
const container = document.getElementById("app");

// Loop through the array and create divs
for (let i = 0; i < objects.length; i++) {
  const div = document.createElement("div");
  const {color, height, width} = objects[i];

  // Set the div's properties based on the array data
  div.style.backgroundColor = color;
  div.style.height = height + "px";
  div.style.width = width + "px";

  // Append the div to the container
  container.appendChild(div);
}
