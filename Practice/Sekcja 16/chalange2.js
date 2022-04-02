'use strict';

let img = document.createElement('img');

const wait = function (sec) {
  return new Promise(function (response) {
    setTimeout(() => {
      img.style.display = 'none';
      response('');
    }, sec * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (response, reject) {
    img.addEventListener('load', () => {
      img.style.display = '';
      response('');
    });
    img.addEventListener('error', reject);
    img.src = imgPath;
  });
};

createImage(`img/img-1.jpg`)
  .then(() => {
    document.querySelector('.images').insertAdjacentElement('beforeend', img);
  })
  .then(() => wait(2))
  .then(() => createImage(`img/img-2.jpg`))
  .then(() => wait(2))
  .then(() => createImage(`img/img-3.jpg`))
  .catch(() => console.error(`Can't load img`));
