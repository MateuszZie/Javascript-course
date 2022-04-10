import icon from 'url:../../img/icons.svg';

export default class View {
  _data;

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this._data = data;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', this._markupData());
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  renderSpinner() {
    this._clear();
    const markup = `<div class="spinner">
        <svg>
          <use href="${icon}#icon-loader"></use>
        </svg>
      </div>`;
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(message = this._errorMeassage) {
    this._clear();
    this._parentElement.insertAdjacentHTML(
      'afterbegin',
      `        <div class="error">
    <div>
      <svg>
        <use href="${icon}#icon-alert-triangle"></use>
      </svg>
    </div>
    <p>${message}</p>
  </div>`
    );
  }

  renderMessage(message = this._meesage) {
    const markup = `<div class="message">
    <div>
      <svg>
        <use href="${icon}#icon-smile"></use>
      </svg>
    </div>
    <p>
      ${message}
    </p>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
