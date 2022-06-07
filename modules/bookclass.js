/* eslint max-classes-per-file: ["error", 2] */

const bookContainer = document.querySelector('.books');
export const renderElements = (arr, container) => {
  container.innerHTML = '';
  arr.forEach((element, index) => {
    container.innerHTML += `
          <div class="book-element">
            <h2>${element.title}</h2>
            <p>${element.author}</p>
            <button type="button" data-id=${index} class="btn-rm"> Remove </button>
          </div>`;
  });
};
export default class BookList {
  static getBooks = () => {
    let bookList = [];
    if (localStorage.getItem('bookList') != null) {
      bookList = JSON.parse(localStorage.getItem('bookList'));
    }
    return bookList;
  }

  static addBook = (book) => {
    const bookList = BookList.getBooks();
    bookList.push(book);
    localStorage.setItem('bookList', JSON.stringify(bookList));
  }

  static removeBook = (index) => {
    let bookList = BookList.getBooks();
    bookList = bookList.filter((element) => element !== bookList[index]);
    renderElements(bookList, bookContainer);
    localStorage.setItem('bookList', JSON.stringify(bookList));
  };
}
