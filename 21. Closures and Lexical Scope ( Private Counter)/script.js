// Function factory using closures
function createCounter() {
  let count = 0; // Private variable (not accessible outside)

  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    },
    reset: function() {
      count = 0;
      return count;
    },
    getValue: function() {
      return count;
    }
  };
}

// Create a counter instance
const counter = createCounter();

// DOM Elements
const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

// Event Listeners
incrementBtn.addEventListener('click', () => {
  counterValue.textContent = counter.increment();
});

decrementBtn.addEventListener('click', () => {
  counterValue.textContent = counter.decrement();
});

resetBtn.addEventListener('click', () => {
  counterValue.textContent = counter.reset();
});
