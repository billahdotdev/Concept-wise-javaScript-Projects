const nameInput = document.querySelector("#expense-name");
const amountInput = document.querySelector("#expense-amount");
const addBtn = document.querySelector("#add-btn");
const expenseList = document.querySelector("#expense-list");
const totalDisplay = document.querySelector("#total");

let expenses = [];

addBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const amount = parseFloat(amountInput.value);

  if (name !== "" && !isNaN(amount) && amount > 0) {
    const expense = { name, amount };
    expenses.push(expense);
    nameInput.value = "";
    amountInput.value = "";
    renderExpenses();
    calculateTotal();
  } else {
    alert("Enter valid name and amount.");
  }
});

function renderExpenses() {
  expenseList.innerHTML = expenses
    .map((item, index) => `<li>${item.name} - $${item.amount.toFixed(2)}</li>`)
    .join("");
}

function calculateTotal() {
  const total = expenses.reduce((sum, item) => sum + item.amount, 0);
  totalDisplay.innerText = total.toFixed(2);
}
