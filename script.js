"use strict";
const mainContainer = document.querySelector('.main__container')
const addButton = document.querySelector(".main__add-button")
let myLibrary = [];

addButton.onclick = () => addBookToLibrary();

function Book(title, author, pages, isRead) {
  this.title = title
  this.author = author
  this.pages = pages
  this.isRead = isRead
}
function createBookCard(book) {
  const div = document.createElement('div');
  const title = document.createElement('p');
  const author = document.createElement('p');
  const pages = document.createElement('p');

  div.classList.add('abobus');

  title.innerText = book.title
  author.innerText = book.author
  pages.innerText = book.pages

  div.appendChild(title)
  div.appendChild(author)
  div.appendChild(pages)
  let modal = book.title == 'The Hobbit' ? div.classList.add('abobus_active') : '';

  return div
}
function addBookToLibrary() {
    for(let i = 0; i < myLibrary.length; i++){
      mainContainer.appendChild(createBookCard(myLibrary[i]))
    }
  }

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet')
const the = new Book('The Hob', 'lkien', '25', 'not read yet')
myLibrary.push(theHobbit)
myLibrary.push(the)