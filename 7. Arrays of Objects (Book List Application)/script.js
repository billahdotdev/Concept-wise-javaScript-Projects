let books = [];

function addBook() {
  const title = document.getElementById('titleInput').value.trim();
  const author = document.getElementById('authorInput').value.trim();

  if (!title || !author) {
    alert('Please enter both title and author.');
    return;
  }

  const newBook = { id: Date.now(), title, author };
  books.push(newBook);

  document.getElementById('titleInput').value = '';
  document.getElementById('authorInput').value = '';

  displayBooks(books);
}

function deleteBook(id) {
  books = books.filter((book) => book.id !== id);
  displayBooks(books);
}

function searchBooks() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const filtered = books.filter((book) =>
    book.title.toLowerCase().includes(query)
  );
  displayBooks(filtered);
}

function displayBooks(bookArray) {
  const list = document.getElementById('bookList');
  list.innerHTML = '';

  if (bookArray.length === 0) {
    list.innerHTML = '<li>No books found.</li>';
    return;
  }

  bookArray.forEach((book) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span><strong>${book.title}</strong> by ${book.author}</span>
      <button class="delete-btn" onclick="deleteBook(${book.id})">Delete</button>
    `;
    list.appendChild(li);
  });
}
