// Thats a lot of div

// Get the container element by its id
const container = document.getElementById("container");

// Generate 100 square divs with random background colors
for (let i = 0; i < 100; i++) {
  const square = document.createElement("div");
  square.className = "square";
  square.style.backgroundColor = getRandomColor();
  container.appendChild(square);
}

// Function to generate a random hexadecimal color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
