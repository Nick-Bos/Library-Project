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

const formSubmitBtn = document.getElementById("submit-btn");
formSubmitBtn.onclick = () => {
  const newBook = bookInput();
  bookCard(newBook);
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
  const cardContainer = document.createElement("div");
  const card = document.createElement("div");
  const cardAuthorLable = document.createElement("p");
  const cardAuthor = document.createElement("p");
  const cardTitleLable = document.createElement("p");
  const cardTitle = document.createElement("p");
  const cardPagesLabel = document.createElement("p");
  const cardPages = document.createElement("p");
  const cardReadLabel = document.createElement("p");
  const cardRead = document.createElement("p");

  document.getElementById("card-area").appendChild(cardContainer);
  cardContainer.appendChild(card);
  card.appendChild(cardAuthorLable);
  card.appendChild(cardAuthor);
  card.appendChild(cardTitleLable);
  card.appendChild(cardTitle);
  card.appendChild(cardPagesLabel);
  card.appendChild(cardPages);
  card.appendChild(cardReadLabel);
  card.appendChild(cardRead);

  cardAuthorLable.textContent = "Author:";
  cardAuthor.textContent = a.author;
  cardTitleLable.textContent = "Title:";
  cardTitle.textContent = a.title;
  cardPagesLabel.textContent = "Pages:";
  cardPages.textContent = a.pages;
  cardReadLabel.textContent = "Read:";
  cardRead.textContent = a.read;

  cardContainer.classList.add("card-container");
  card.classList.add("card");

  if (cardRead.textContent == "false") {
    cardRead.textContent = "I have not read it";
  } else {
    cardRead.textContent = "I have read it";
  }
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
