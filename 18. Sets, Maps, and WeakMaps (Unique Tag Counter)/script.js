function countUniqueTags() {
  const input = document.getElementById("tagInput").value;
  
  // Split tags, trim whitespace, and convert to lowercase
  const tagArray = input
    .split(",")
    .map(tag => tag.trim().toLowerCase())
    .filter(tag => tag.length > 0);

  // Use Set to store only unique tags
  const uniqueTags = new Set(tagArray);

  const resultDiv = document.getElementById("result");

  if (uniqueTags.size === 0) {
    resultDiv.textContent = "Please enter some tags.";
  } else {
    resultDiv.innerHTML = `
      Unique tags (${uniqueTags.size}):<br>
      ${Array.from(uniqueTags).join(", ")}
    `;
  }
}
