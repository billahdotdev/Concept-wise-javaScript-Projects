function saveStudent() {
  const name = document.getElementById('nameInput').value.trim();
  const age = Number(document.getElementById('ageInput').value);
  const course = document.getElementById('courseInput').value.trim();
  const display = document.getElementById('studentDisplay');

  if (!name || !age || !course) {
    display.textContent = 'Please fill in all fields.';
    return;
  }

  // Create object
  const student = {
    name: name,
    age: age,
    course: course,
  };

  // Modify property (example)
  student.status = 'Active';

  // Display result
  display.innerHTML = `
    <p>Name: ${student.name}</p>
    <p>Age: ${student.age}</p>
    <p>Course: ${student.course}</p>
    <p>Status: ${student.status}</p>
  `;
}
