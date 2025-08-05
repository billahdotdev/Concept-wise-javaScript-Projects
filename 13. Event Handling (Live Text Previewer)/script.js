// Select input and output elements
const textInput = document.getElementById("textInput");
const previewOutput = document.getElementById("previewOutput");

// Add input event listener
textInput.addEventListener("input", function () {
  previewOutput.innerText = textInput.value || "Your text will appear here...";
});
