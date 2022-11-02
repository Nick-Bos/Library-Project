let myLibrary = [];

let author = "unknown";
let title = "unknown";
let pages = "unknown";
let read = "unknown";

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

//form checkbox on off function
const checkbox = document.getElementById("read it?");
checkbox.onclick = () => {
  checkbox.value = "true";
  checkboxToggle();
};
function checkboxToggle() {
  if (checkbox.value == "Not read") {
    read = "Not read";
  } else {
    checkbox.value = "I have read this";
  }
}

//form input data
function sendFormData() {
  let authorInput = document.getElementById("author").value;
  let titleInput = document.getElementById("title").value;
  let pagesInput = document.getElementById("pages").value;
  let readInput = document.getElementById("read it?").value;

  author = authorInput;
  title = titleInput;
  pages = pagesInput;
  read = readInput;
}

const formSubmitBtn = document.getElementById("submit-btn");
formSubmitBtn.onclick = () => {
  submitForm();
};
function submitForm() {
  sendFormData();
  console.log(author);
  console.log(title);
  console.log(pages);
  console.log(read);
}

function createBookCard() {}

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
