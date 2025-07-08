function generateTable() {
  const number = Number(document.getElementById('numberInput').value);
  const resultList = document.getElementById('tableResult');

  resultList.innerHTML = ''; // clear previous table

  if (isNaN(number)) {
    resultList.innerHTML = '<li>Please enter a valid number.</li>';
    return;
  }

  for (let i = 1; i <= 10; i++) {
    const result = number * i;
    const listItem = document.createElement('li');
    listItem.textContent = `${number} × ${i} = ${result}`;
    resultList.appendChild(listItem);
  }
}
