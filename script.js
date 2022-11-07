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

//form checkbox on off function
const checkbox = document.getElementById("read");
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

const formSubmitBtn = document.getElementById("submit-btn");
formSubmitBtn.onclick = () => {
  const newBook = bookInput();
  bookCard(newBook);
  console.log(newBook);
};

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function bookInput() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;

  return new Book(author, title, pages, read);
}
//creates book card on dom
function bookCard(a) {
  const card = document.createElement("div");
  const cardAuthor = document.createElement("p");
  const cardTitle = document.createElement("p");
  const cardPages = document.createElement("p");
  const cardRead = document.createElement("p");

  document.body.appendChild(card);
  card.appendChild(cardAuthor);
  card.appendChild(cardTitle);
  card.appendChild(cardPages);
  card.appendChild(cardRead);

  cardAuthor.textContent = a.author;
  cardTitle.textContent = a.title;
  cardPages.textContent = a.pages;
  cardRead.textContent = a.read;
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
