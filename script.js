
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

const library = document.querySelector(".library");

Book.prototype.info = function () {
  let card = document.createElement("div");
  card.setAttribute("class", "card");
  let title = document.createElement("p");
  let author = document.createElement("p");
  let pages = document.createElement("p");
  let isRead = document.createElement("input")
  isRead.setAttribute("type", "checkbox")

  title.textContent = "Title: " + this.title;
  author.textContent = "Author: " + this.author;
  pages.textContent = "Page Count: " + this.pages;
  this.isRead === true ? isRead.checked = true : isRead.checked = false
  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages)
  card.appendChild(isRead);
  library.appendChild(card);
}

const book1 = new Book ("Pride and Prejudice", "Jane Austen", "432", true);
const book2 = new Book ("The Eye of The World", "Robert Jordan", "782", true);
const book3 = new Book ("The Pragmatic Programmer", "Andrew Hunt", "320", false);

let myLibrary = [book1, book2, book3];

let title;
let author;
let pages;
let isRead;

function addBookToLibrary () {
  title = document.querySelector(".title").value;
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

