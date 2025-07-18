function rollDice() {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  document.getElementById('dice-number').textContent = randomNumber;
}
