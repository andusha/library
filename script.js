"use strict";
const mainContainer = document.querySelector('.main__book-container')
const addButton = document.querySelector(".main__add-button")
const BookModal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
const BookModalForm = document.querySelector('.modal__form')

let myLibrary = [];

addButton.onclick = () => showBookModal();
overlay.onclick = () => closeBookModal();
BookModalForm.addEventListener('submit', function(event){
  event.preventDefault();
  let title = event.currentTarget.title.value
  let author = event.currentTarget.author.value
  let pages = event.currentTarget.pages.value
  let isRead = event.currentTarget.isRead.checked
  myLibrary.push(new Book(title,author,pages,isRead))
  closeBookModal()
  updateGrid()
})

function Book(title, author, pages, isRead) {
  this.title = title
  this.author = author
  this.pages = pages
  this.isRead = isRead
  this.isReadFunc = function() {
    console.log(isRead)
    if(!isRead){
      this.classList.remove('main__book-button_not-read')
      this.innerText = 'read'
      this.classList.add('main__book-button_read')
      isRead = true
    } else{
      this.classList.remove('main__book-button_read')
      this.innerText = 'not read'
      this.classList.add('main__book-button_not-read')
      isRead = false
    }
  }
}
function createBookCard(book, index) {
  const div = document.createElement('div');
  const title = document.createElement('p');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const read = document.createElement('button');
  const remove = document.createElement('button');

  div.classList.add('main__book-card');
  title.classList.add('main__book-text');
  author.classList.add('main__book-text');
  pages.classList.add('main__book-text')
  remove.classList.add(...['main__book-button', 'button']);
  read.classList.add(...['main__book-button', 'button']);
  console.log(myLibrary)
  div.setAttribute('data-id', index)

  title.innerText = `'${book.title}'`
  author.innerText = book.author
  pages.innerText = book.pages + ' pages'
  remove.innerText = 'Remove'
  read.onclick = book.isReadFunc
  remove.addEventListener('click', function(){
    console.log('gg')
    const dataIndex = div.getAttribute('data-id')
    myLibrary.splice(dataIndex, 1)
    updateGrid()
  })

  if(book.isRead){
    read.classList.remove('main__book-button_not-read')
    read.innerText = 'read'
    read.classList.add('main__book-button_read')
  } else{
    read.classList.remove('main__book-button_read')
    read.innerText = 'not read'
    read.classList.add('main__book-button_not-read')
  }

  div.appendChild(title)
  div.appendChild(author)
  div.appendChild(pages)
  div.appendChild(read)
  div.appendChild(remove)

  return div
}
function addBookToLibrary() {
  for (let i = 0; index < myLibrary.length; i++){
    mainContainer.appendChild(createBookCard(myLibrary[i], index))
  }
}

function showBookModal() {
  BookModal.classList.add('modal_active')
  overlay.classList.add('overlay_active')
}
function closeBookModal() {
  BookModal.classList.remove('modal_active')
  overlay.classList.remove('overlay_active')
}
function updateGrid(){
  mainContainer.innerHTML = ''
  addBookToLibrary()
}
//const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', '')
//const the = new Book('The Hob', 'lkien', '25', 'not read yet')
//myLibrary.push(theHobbit)
//myLibrary.push(the)