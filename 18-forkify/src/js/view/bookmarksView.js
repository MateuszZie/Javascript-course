import previewView from './previewView.js';

class ResultView extends previewView {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMeassage = `No bookmarks yet. Find a nice recipe and bookmark it :) `;
  _meesage = '';

  addHandlerBookmarks(handler) {
    window.addEventListener('load', function () {
      handler();
    });
  }
}

export default new ResultView();
