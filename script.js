const book1 = new Book ("Pride and Prejudice", "Jane Austen", "432", true);
const book2 = new Book ("The Eye of The World", "Robert Jordan", "782", true);
const book3 = new Book ("The Pragmatic Programmer", "Andrew Hunt", "320", false);

let myLibrary = [];

const input = document.querySelector(".header");

const addBook = document.querySelector(".addBook");
addBook.addEventListener('click', createInputCard);

const library = document.querySelector(".library");
let card = document.createElement("div");

//this is the Book constructor:makes books into obejcts and added to array when used in conjunction with addBooksToLibrary()
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

//prototype to retrieve information about the books in order to display on screen
Book.prototype.info = function () {
  let displayCard = document.createElement("div");
  displayCard.setAttribute("class", "card");
  let cardTitle = document.createElement("p");
  let cardAuthor = document.createElement("p");
  let cardPages = document.createElement("p");
  let cardIsRead = document.createElement("input")
  cardIsRead.setAttribute("type", "checkbox")

  cardTitle.textContent = "Title: " + this.title;
  cardAuthor.textContent = "Author: " + this.author;
  cardPages.textContent = "Page Count: " + this.pages;
  this.isRead === true ? cardIsRead.checked = true : cardIsRead.checked = false
  displayCard.appendChild(cardTitle);
  displayCard.appendChild(cardAuthor);
  displayCard.appendChild(cardPages)
  displayCard.appendChild(cardIsRead);
  library.appendChild(displayCard);
}

function createInputCard() {
  addBook.disabled = true;

  let card = document.createElement("div");
  card.setAttribute("class", "card");
  let header = document.createElement("h3");
  header.textContent = "Add Book"
  let title = document.createElement("input");
  title.setAttribute("class", "title")
  title.setAttribute("type", "text")
  title.setAttribute("placeholder", "Title")
  let author = document.createElement("input");
  author.setAttribute("class", "author")
  author.setAttribute("type", "text")
  author.setAttribute("placeholder", "Author")
  let pages = document.createElement("input");
  pages.setAttribute("class", "pages");
  pages.setAttribute("type", "number")
  pages.setAttribute("placeholder", "Number of Pages")
  let status = document.createElement("p");
  status.setAttribute("class", "status");
  status.textContent = "Have you read this book yet?"
  let isRead = document.createElement("input");
  isRead.setAttribute("class", "isRead");
  isRead.setAttribute("type", "checkbox");
  let submitBtn = document.createElement("button");
  submitBtn.setAttribute("type", "button");
  submitBtn.setAttribute("class", "submitBook");
  submitBtn.textContent = "Add Book";
  submitBtn.addEventListener('click', addBookToLibrary);

  card.appendChild(header);
  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(status);
  card.appendChild(isRead);
  card.appendChild(submitBtn);
  input.appendChild(card);
}

function addBookToLibrary () {
  console.log("hi");
  title = document.querySelector(".title").value
  author = document.querySelector(".author").value;
  pages = document.querySelector(".pages").value;
  isRead = document.querySelector(".isRead").checked;

  let newBook = new Book (title, author, pages, isRead);

  myLibrary.push(newBook);
  showBooks();
  input.removeChild(input.lastChild);
  addBook.disabled = false;
}

function showBooks() {
  myLibrary.forEach((book) => console.log(book.info()))
  }

