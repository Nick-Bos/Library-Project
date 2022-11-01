let myLibrary = [];

const addBookBtn = document.getElementById("add-book-btn");
addBookBtn.onclick = function () {
  popUpFormToggle(".pop-up-form", "pop-up-form--on");
};

function popUpFormToggle(classname, classnameOpen) {
  const formDiv = document.querySelector(classname);
  if (formDiv.classList.contains(classnameOpen)) {
    formDiv.classList.remove(classnameOpen);
  } else {
    formDiv.classList.add(classnameOpen);
  }
}

function Book(author, title, pages, isRead) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.isRead = isRead;
}

let newBook = new Book(
  "J.K Rowling",
  "Harry Potter and the Philosopher's Stone",
  "223",
  "No"
);

function addBookToLibrary() {}

// when called, this function displays the books in the myLibrary array.
function displayBooks() {
  for (i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i]);
  }
}
