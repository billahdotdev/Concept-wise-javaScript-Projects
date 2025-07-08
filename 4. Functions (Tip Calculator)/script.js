// Function to calculate total bill with tip
function calculateTotal(bill, tipPercent) {
  const tipAmount = (bill * tipPercent) / 100;
  return bill + tipAmount;
}

// Handles user input and displays the result
function handleCalculation() {
  const billInput = Number(document.getElementById('billAmount').value);
  const tipInput = Number(document.getElementById('tipPercent').value);
  const resultDisplay = document.getElementById('totalResult');

  if (isNaN(billInput) || isNaN(tipInput) || billInput <= 0 || tipInput < 0) {
    resultDisplay.textContent = 'Please enter valid numbers.';
    return;
  }

  const total = calculateTotal(billInput, tipInput);
  resultDisplay.textContent = `Total amount (with tip): $${total.toFixed(2)}`;
}
