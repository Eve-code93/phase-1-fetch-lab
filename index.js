function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books") // ✅ Ensure return statement
    .then(response => response.json())
    .then(data => {
      renderBooks(data); // ✅ Call renderBooks with fetched data
      return data; // ✅ Return data to help debugging if needed
    });
}


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
