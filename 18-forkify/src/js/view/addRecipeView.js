import View from './view';

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _errorMeassage = `Add recipe form error`;
  _meesage = '';
  btnOpen = document.querySelector('.nav__btn--add-recipe');
  btnClose = document.querySelector('.btn--close-modal');
  overlay = document.querySelector('.overlay');
  windowForm = document.querySelector('.add-recipe-window');

  constructor() {
    super();
    this.#addEventListners();
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }

  #toggleAddForm() {
    this.overlay.classList.toggle('hidden');
    this.windowForm.classList.toggle('hidden');
  }

  #addEventListners() {
    this.btnOpen.addEventListener('click', this.#toggleAddForm.bind(this));
    this.btnClose.addEventListener('click', this.#toggleAddForm.bind(this));
    this.overlay.addEventListener('click', this.#toggleAddForm.bind(this));
    this._parentElement.addEventListener(
      'click',
      this.#toggleAddForm.bind(this)
    );
  }
}

export default new AddRecipeView();
