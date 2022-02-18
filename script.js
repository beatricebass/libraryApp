function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    let status = (read === true) ? "read" : "not read yet";
    return (title + " by " + author + ", " + pages + " pages, " + status);
  }
}

const book1 = new Book ("Pride and Prejudice", "Jane Austen", "432", true);
const book2 = new Book ("The Eye of The World", "Robert Jordan", "782", true);
const book3 = new Book ("The Pragmatic Programmer", "Andrew Hunt", "320", false);

function addBookToLibrary () {
  
}

let myLibrary = [book1, book2, book3];
