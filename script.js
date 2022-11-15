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
  myLibrary.push(newBook);
  displayBook();
};

function displayBook() {
  bookCard(myLibrary[myLibrary.length - 1]);
}

function Book(author, title, pages) {
  this.author = author;
  this.title = title;
  this.pages = pages;
}

function bookInput() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  return new Book(author, title, pages);
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
  const cardRead = document.createElement("button");
  const cardRemove = document.createElement("button");

  document.getElementById("card-area").appendChild(cardContainer);
  cardContainer.appendChild(card);
  card.appendChild(cardAuthorLable);
  card.appendChild(cardAuthor);
  card.appendChild(cardTitleLable);
  card.appendChild(cardTitle);
  card.appendChild(cardPagesLabel);
  card.appendChild(cardPages);
  card.appendChild(cardRead);
  card.appendChild(cardRemove);

  cardAuthorLable.textContent = "Author:";
  cardAuthor.textContent = a.author;
  cardTitleLable.textContent = "Title:";
  cardTitle.textContent = a.title;
  cardPagesLabel.textContent = "Pages:";
  cardPages.textContent = a.pages;
  cardRead.textContent = "Not read";
  cardRemove.textContent = "Delete book";

  function deleteCard() {
    cardRemove.parentNode.remove(card);
  }
  cardRemove.addEventListener("click", (e) => {
    deleteCard(e);
  });

  function readToggle() {
    if (cardRead.textContent == "Not read") {
      cardRead.textContent = "Read";
    } else if (cardRead.textContent == "Read") {
      cardRead.textContent = "Not read";
    }
  }

  function readColor() {
    if (cardRead.textContent == "Not read") {
      cardRead.classList.add("card-not-read");
    } else if (cardRead.textContent == "Read") {
      cardRead.classList.remove("card-not-read");
      cardRead.classList.add("card-read");
    }
  }

  cardRead.addEventListener("click", (e) => {
    readToggle(e);
    readColor();
  });

  cardRead.classList.add("card-not-read");
  cardContainer.classList.add("card-container");
  card.classList.add("card");
  cardRemove.classList.add("remove-book");
}
