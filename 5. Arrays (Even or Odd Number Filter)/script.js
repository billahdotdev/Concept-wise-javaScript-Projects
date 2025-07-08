function filterNumbers(type) {
  const input = document.getElementById('numberInput').value;
  const result = document.getElementById('resultOutput');

  // Convert input string to number array
  const numberArray = input
    .split(',')
    .map((num) => Number(num.trim()))
    .filter((num) => !isNaN(num));

  if (numberArray.length === 0) {
    result.textContent = 'Please enter valid numbers separated by commas.';
    return;
  }

  // Filter logic
  const filtered = numberArray.filter((num) => {
    if (type === 'even') return num % 2 === 0;
    if (type === 'odd') return num % 2 !== 0;
  });

  result.textContent = `Filtered ${type} numbers: ${filtered.join(', ')}`;
}
