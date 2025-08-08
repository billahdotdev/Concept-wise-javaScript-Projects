const usernameInput = document.querySelector("#username");
const validateBtn = document.querySelector("#validateBtn");
const message = document.querySelector("#message");

function validateUsername(username) {
  if (!username) {
    throw "Username cannot be empty!";
  }
  if (username.length < 4) {
    throw "Username must be at least 4 characters long.";
  }
  if (!/^[a-zA-Z0-9_]+$/.test(username)) {
    throw "Username can only contain letters, numbers, and underscores.";
  }
  return "✅ Username is valid!";
}

validateBtn.addEventListener("click", () => {
  const username = usernameInput.value.trim();
  try {
    const result = validateUsername(username);
    message.style.color = "green";
    message.textContent = result;
  } catch (error) {
    message.style.color = "red";
    message.textContent = `❌ ${error}`;
  }
});
