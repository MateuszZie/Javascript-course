import View from './view';
import icon from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');
  _errorMeassage = `Error in pagination view`;
  _meesage = '';

  addHandlerPagination(handler) {
    this._parentElement.addEventListener('click', function (e) {
      e.preventDefault();
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      handler(+btn.dataset.page);
    });
  }

  _markupData() {
    const curPage = this._data.page;
    const maxPage = Math.ceil(
      this._data.recipes.length / this._data.resultPerPage
    );
    if (curPage === 1 && maxPage > 1) {
      return `<button data-page="${
        curPage + 1
      }" class="btn--inline pagination__btn--next">
      <span>Page ${curPage + 1}</span>
      <svg class="search__icon">
        <use href="${icon}.svg#icon-arrow-right"></use>
      </svg>
    </button>`;
    }
    if (curPage === maxPage && maxPage > 1) {
      return `<button data-page="${
        curPage - 1
      }" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icon}.svg#icon-arrow-left"></use>
      </svg>
      <span>Page ${curPage - 1}</span>
    </button>`;
    }
    if (maxPage > 1) {
      return `<button data-page="${
        curPage - 1
      }" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icon}.svg#icon-arrow-left"></use>
      </svg>
      <span>Page ${curPage - 1}</span>
    </button>
    <button data-page="${
      curPage + 1
    }" class="btn--inline pagination__btn--next">
      <span>Page ${curPage + 1}</span>
      <svg class="search__icon">
        <use href="${icon}.svg#icon-arrow-right"></use>
      </svg>
    </button>`;
    }
    return '';
  }
}

export default new PaginationView();
