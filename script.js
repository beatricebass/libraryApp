const book1 = new Book ("Pride and Prejudice", "Jane Austen", "432", true);
const book2 = new Book ("The Eye of The World", "Robert Jordan", "782", true);
const book3 = new Book ("The Pragmatic Programmer", "Andrew Hunt", "320", false);

let myLibrary = [book1, book2, book3];

const addBook = document.querySelector(".addBook");
console.log(addBook);
addBook.addEventListener('click', createInputCard);

//this is the Book constructor:makes books into obejcts and added to array when used in conjunction with addBooksToLibrary()
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

//prototype to retrieve information about the books in order to display on screen
Book.prototype.info = function () {
  let card = document.createElement("div");
  card.setAttribute("class", "card");
  let cardTitle = document.createElement("p");
  let cardAuthor = document.createElement("p");
  let cardPages = document.createElement("p");
  let cardIsRead = document.createElement("input")
  isRead.setAttribute("type", "checkbox")

  cardTitle.textContent = "Title: " + this.title;
  cardAuthor.textContent = "Author: " + this.author;
  cardPages.textContent = "Page Count: " + this.pages;
  this.isRead === true ? cardIsRead.checked = true : cardIsRead.checked = false
  card.appendChild(cardTitle);
  card.appendChild(cardAuthor);
  card.appendChild(cardPages)
  card.appendChild(cardIsRead);
  library.appendChild(card);
}

function createInputCard() {
  console.log("Hi");
  const input = document.querySelector(".header");
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
  submitBtn.setAttribute("class", "addBook");
  submitBtn.textContent = "Add Book";

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
  createCard();
  console.log("hi");
  title.value;    
  //  = document.querySelector(".title")
  author = document.querySelector(".author").value;
  pages = document.querySelector(".pages").value;
  isRead = document.querySelector(".isRead").checked;

  let newBook = new Book (title, author, pages, isRead);

  myLibrary.push(newBook);
  showBooks();
}

function showBooks() {
  myLibrary.forEach((book) => console.log(book.info()))
  }

