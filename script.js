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
  const cardRemove = document.createElement("button");

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
  card.appendChild(cardRemove);

  cardAuthorLable.textContent = "Author:";
  cardAuthor.textContent = a.author;
  cardTitleLable.textContent = "Title:";
  cardTitle.textContent = a.title;
  cardPagesLabel.textContent = "Pages:";
  cardPages.textContent = a.pages;
  cardReadLabel.textContent = "Read:";
  cardRead.textContent = a.read;
  cardRemove.textContent = "Delete book";
  function deleteCard() {
    cardRemove.parentNode.remove(card);
  }
  cardRemove.addEventListener("click", (e) => {
    deleteCard(e);
  });

  cardContainer.classList.add("card-container");
  card.classList.add("card");
  cardRemove.classList.add("remove-book");

  if (cardRead.textContent == "false") {
    cardRead.textContent = "I have not read it";
  } else {
    cardRead.textContent = "I have read it";
  }
}
