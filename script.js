function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.info = function () {
    let read = (isRead === true) ? "read" : "not read yet";
    return (title + " by " + author + ", " + pages + " pages, " + read);
  }
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

  let newBook = new Book (title, author, pages, isReadmy);

  myLibrary.push(newBook);
}

function getInformation () {

}

