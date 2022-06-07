/* eslint max-classes-per-file: ["error", 2] */
import BookList from './modules/bookclass.js';
import {DateTime} from './modules/luxon.js';
import {renderElements} from './modules/element.js';

const addBookForm = document.querySelector('.add-book-form');
const bookContainer = document.querySelector('.books');
const bookForminputs = [...addBookForm.elements];
const mainSection = document.querySelector('.main-section');
const links = document.querySelectorAll('.link');
const linkarr = [...links];
const sections = [...mainSection.children];
linkarr.forEach((element, index) => {
  const index1 = index;
  element.addEventListener('click', () => {
    sections.forEach((element, index) => {
      if (index1 === index) {
        element.classList.remove('not-visible');
      } else {
        element.classList.add('not-visible');
      }
    });
  });
});
setInterval(() => {
  const now = DateTime.now();
  const showDate = now.toLocaleString(DateTime.DATETIME_MED);
  document.getElementById('showDate').innerHTML = showDate;
}, 1000);
let title;
let author;

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

bookForminputs.forEach((element) => {
  if (element.name === 'title') {
    element.addEventListener('change', (e) => {
      title = e.target.value;
    });
  }
  if (element.name === 'author') {
    element.addEventListener('change', (e) => {
      author = e.target.value;
    });
  }
});

addBookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const book = new Book(title, author);
  BookList.addBook(book);
  addBookForm.submit();
});

const bookList = BookList.getBooks();
renderElements(bookList, bookContainer);

bookContainer.addEventListener('click', (e) => {
  const removeBtn = e.target.closest('.btn-rm');
  BookList.removeBook(removeBtn.getAttribute('data-id'));
});
