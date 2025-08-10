// Select elements
const btn = document.getElementById("btn");
const colorCode = document.getElementById("colorCode");

// Generate random hex color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Change color on button click
btn.addEventListener("click", function() {
  const newColor = getRandomColor();
  document.body.style.backgroundColor = newColor;
  colorCode.textContent = newColor;
});
