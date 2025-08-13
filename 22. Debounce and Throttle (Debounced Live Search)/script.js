// Sample data (you can replace this with an API call)
const items = [
  "JavaScript", "Java", "Python", "PHP", "C++", "C#", 
  "Ruby", "Go", "Rust", "Swift", "Kotlin", "TypeScript"
];

const searchInput = document.getElementById("searchInput");
const resultsList = document.getElementById("results");
const statusText = document.getElementById("status");

let debounceTimer;

function debounce(func, delay) {
  return function (...args) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(this, args), delay);
  };
}

function search(query) {
  if (!query) {
    resultsList.innerHTML = "";
    statusText.textContent = "Start typing to search...";
    return;
  }

  statusText.textContent = `Searching for "${query}"...`;

  // Simulate API search
  const filtered = items.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  setTimeout(() => {
    resultsList.innerHTML = filtered
      .map(item => `<li>${item}</li>`)
      .join("");
    statusText.textContent = filtered.length
      ? `Found ${filtered.length} result(s)`
      : "No results found";
  }, 500); // Simulated network delay
}

searchInput.addEventListener("input", debounce(e => {
  search(e.target.value);
}, 500)); // 500ms debounce delay

 
