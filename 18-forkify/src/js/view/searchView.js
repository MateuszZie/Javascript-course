class SearchView {
  #parentElement = document.querySelector('.search');

  addHandlerSearch(handler) {
    this.#parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }

  getQuery() {
    const query = document.querySelector('.search__field').value;
    this.#clearInput();
    return query;
  }

  #clearInput() {
    document.querySelector('.search__field').value = '';
  }
}

export default new SearchView();
