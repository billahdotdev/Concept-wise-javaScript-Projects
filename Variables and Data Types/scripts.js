function calculateAge() {
  const birthYearInput = document.getElementById("birthYear").value;
  const currentYear = new Date().getFullYear();

  // Convert input to number and calculate age
  const birthYear = Number(birthYearInput);
  const age = currentYear - birthYear;

  // Show result
  const resultElement = document.getElementById("result");

  if (!birthYearInput || isNaN(birthYear) || birthYear > currentYear || birthYear < 1900) {
    resultElement.textContent = "Please enter a valid birth year.";
  } else {
    resultElement.textContent = `You are ${age} years old.`;
  }
}
