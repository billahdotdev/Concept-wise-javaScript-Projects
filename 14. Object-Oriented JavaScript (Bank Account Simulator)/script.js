class BankAccount {
  constructor(owner, initialBalance = 0) {
    this.owner = owner;
    this.balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      return `Deposited ${amount}৳`;
    } else {
      return "Invalid deposit amount.";
    }
  }

  withdraw(amount) {
    if (amount > this.balance) {
      return "Insufficient balance!";
    } else if (amount <= 0) {
      return "Invalid withdrawal amount.";
    } else {
      this.balance -= amount;
      return `Withdrew ${amount}৳`;
    }
  }

  getBalance() {
    return this.balance;
  }
}

// Create account instance
const myAccount = new BankAccount("User", 0);

// DOM Elements
const balanceEl = document.getElementById("balance");
const amountEl = document.getElementById("amount");
const messageEl = document.getElementById("message");
const depositBtn = document.getElementById("depositBtn");
const withdrawBtn = document.getElementById("withdrawBtn");

// Update UI
function updateBalance() {
  balanceEl.innerText = myAccount.getBalance();
}

// Button Events
depositBtn.addEventListener("click", () => {
  const amount = parseFloat(amountEl.value);
  const msg = myAccount.deposit(amount);
  messageEl.innerText = msg;
  updateBalance();
  amountEl.value = "";
});

withdrawBtn.addEventListener("click", () => {
  const amount = parseFloat(amountEl.value);
  const msg = myAccount.withdraw(amount);
  messageEl.innerText = msg;
  updateBalance();
  amountEl.value = "";
});

// Initial balance render
updateBalance();
