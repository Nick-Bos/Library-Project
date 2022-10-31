let myLibrary = [];

function Book(author, title, numberOfPages, isRead) {
  this.author = author;
  this.title = title;
  this.numberOfPages = numberOfPages;
  this.isRead = isRead;
}

let newBook = new Book(
  "J.K Rowling",
  "Harry Potter and the Philosopher's Stone",
  "223",
  "No"
);

function addBookToLibrary() {}
