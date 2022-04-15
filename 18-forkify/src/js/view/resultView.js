import View from './view';
import icon from 'url:../../img/icons.svg';

class ResultView extends View {
  _parentElement = document.querySelector('.results');
  _errorMeassage = `Can't find recipe for search query! Try other one`;
  _meesage = '';

  _markupData() {
    return this._data.map(this.#markupRecipe).join('');
  }

  #markupRecipe(data) {
    const id = window.location.hash.slice(1);
    return ` <li class="preview">
      <a class="preview__link ${
        data.id === id ? 'preview__link--active' : ''
      }" href="#${data.id}">
        <figure class="preview__fig">
          <img src="${data.image}" alt="Test" crossorigin/>
        </figure>
        <div class="preview__data">
          <h4 class="preview__title">${data.title}</h4>
          <p class="preview__publisher">${data.publisher}</p>
          <div class="preview__user-generated">
            <svg>
              <use href="${icon}#icon-user"></use>
            </svg>
          </div>
        </div>
      </a>
    </li>`;
  }
}

export default new ResultView();
