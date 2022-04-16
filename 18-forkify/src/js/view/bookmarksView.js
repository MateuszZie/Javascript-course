import previewView from './previewView.js';

class ResultView extends previewView {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMeassage = `No bookmarks yet. Find a nice recipe and bookmark it :) test`;
  _meesage = '';
}

export default new ResultView();
