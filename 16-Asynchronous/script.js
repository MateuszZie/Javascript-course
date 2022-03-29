'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

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
  countriesContainer.style.opacity = 1;
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
const getCurentData = function (country) {
  const request = fetch(`https://restcountries.com/v3.1/name/${country}`).then(
    response => response.json().then(data => renderCountry(data))
  );
};
getCurentData('poland');
