

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
