'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderError = function (msg) {
  countriesContainer.insertAdjacentText(
    'beforeend',
    `Can't load flag becouse ${msg} :(`
  );
};

const renderCountry = function (data, neighbour = '') {
  const html = `<article class="country ${neighbour}">
  <img class="country__img" src="${data[0].flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data[0].name.common}</h3>
    <h4 class="country__region">${data[0].continents[0]}</h4>
    <p class="country__row"><span>👫</span>${(
      +data[0].population / 1000000
    ).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${
      Object.values(data[0].languages)[0]
    }</p>
    <p class="country__row"><span>💰</span>${
      Object.values(data[0].currencies)[0].name
    }</p>
  </div>
</article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};

/*
const getCountry = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    const data = JSON.parse(this.responseText);
    console.log(data);
    renderCountry(data);
    const [border] = data[0].borders;
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${border}`);
    request2.send();
    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2, 'neighbour');
    });
  });
};
getCountry('poland');
*/

const getJson = function (url, msgEror = 'Something goes wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(msgEror);
    return response.json();
  });
};
const getCurentData = function (country) {
  getJson(
    `https://restcountries.com/v3.1/name/${country}`,
    `Country ${country} not found`
  )
    .then(data => {
      renderCountry(data);
      const neighbour = data[0].borders?.[0];
      if (!neighbour) throw new Error(`${country} don't have any neighbour`);
      return getJson(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        `Country ${neighbour} not found`
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => renderError(err.message))
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
btn.addEventListener('click', function () {
  getCurentData('australia');
});

console.log('Test start');
setTimeout(() => {
  console.log('timeot 0 sec');
}, 0);
Promise.resolve('Short promise').then(res => console.log(res));
Promise.resolve('Long promise').then(res => {
  for (let i = 1; i < 1000000000; i++) {}
  console.log(res);
});
console.log('Test end');
