import previewView from './previewView.js';

class ResultView extends previewView {
  _parentElement = document.querySelector('.results');
  _errorMeassage = `Can't find recipe for search query! Try other one`;
  _meesage = '';
}

export default new ResultView();
