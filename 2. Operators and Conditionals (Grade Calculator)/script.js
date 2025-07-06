function calculateGrade() {
  const score = Number(document.getElementById('scoreInput').value);
  const result = document.getElementById('gradeResult');

  if (isNaN(score) || score < 0 || score > 100) {
    result.textContent = 'Please enter a valid score between 0 and 100.';
    return;
  }

  let grade;

  if (score >= 90) {
    grade = 'A';
  } else if (score >= 80) {
    grade = 'B';
  } else if (score >= 70) {
    grade = 'C';
  } else if (score >= 60) {
    grade = 'D';
  } else {
    grade = 'F';
  }

  result.textContent = `Your grade is ${grade}.`;
}
