
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  // this.info = function () {
  //   let read = (isRead === true) ? "read" : "not read yet";
  //   return (title + " by " + author + ", " + pages + " pages, " + read);
  // }
}

const container = document.querySelector("#container");

Book.prototype.info = function () {
  // let read = (this.isRead === true) ? "read" : "not read yet";
  // return (this.title + " by " + this.author + ", " + this.pages + " pages, " + read);
  let card = document.createElement("div");
  card.setAttribute("class", "card");
  let title = document.createElement("p");
  let author = document.createElement("p");
  let pages = document.createElement("p");
  let isRead = document.createElement("input")
  isRead.setAttribute("type", "checkbox")

  title.textContent = this.title;
  author.textContent = this.author;
  pages.textContent = this.pages;
  isRead.value = this.isRead;
  console.log(isRead.value);
  this.isRead === true ? isRead.checked = true : isRead.checked = false
  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages)
  card.appendChild(isRead);
  container.appendChild(card);
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

