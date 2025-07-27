const changeBtn = document.querySelector("#change-btn");
const colorCode = document.querySelector("#color-code");

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for(let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

changeBtn.addEventListener("click", () => {
  const newColor = getRandomColor();
  document.body.style.backgroundColor = newColor;
  colorCode.innerText = newColor;
});
