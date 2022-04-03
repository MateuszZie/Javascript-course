'use strict';

const wait = function (img, sec) {
  return new Promise(function (response) {
    setTimeout(() => {
      console.log('Timer');
      img.style.display = 'none';
      response('');
    }, sec * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (response, reject) {
    const img = document.createElement('img');
    document.querySelector('.images').insertAdjacentElement('beforeend', img);

    img.addEventListener('load', () => {
      console.log('Image');
      img.style.display = '';
      response(img);
    });
    img.addEventListener('error', () =>
      reject(new Error(`Can't load ${imgPath}`))
    );
    img.src = imgPath;
  });
};

const loadNPause = async function () {
  try {
    const img = await createImage(`img/img-1.jpg`);
    await wait(img, 2);
    const img2 = await createImage(`img/img-2.jpg`);
    await wait(img2, 2);
    createImage(`img/img-3.jpg`);
  } catch (error) {
    console.error(error);
  }
};
// loadNPause();

const loadAll = async function (imgArr) {
  const promises = imgArr.map(async url => createImage(url));
  const imgArray = await Promise.all(promises);

  imgArray.forEach(img => img.classList.add('parallel'));
  console.log(imgArray);
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
