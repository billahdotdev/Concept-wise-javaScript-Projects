function countWords() {
  const text = document.getElementById('textInput').value.trim();

  // Word count
  const words = text === '' ? [] : text.split(/\s+/);
  const wordCount = words.length;

  // Character count (excluding spaces)
  const characters = text.replace(/\s/g, '').length;

  document.getElementById('wordCount').textContent = `Words: ${wordCount}`;
  document.getElementById(
    'charCount'
  ).textContent = `Characters (no spaces): ${characters}`;
}
