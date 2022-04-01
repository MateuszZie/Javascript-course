'use strict';

const whereAmI = function (lat, lng) {
  fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=pl`
  )
    .then(response => {
      if (!response.ok) throw new Error('wrong adress');
      return response.json();
    })
    .then(data => {
      console.log(`You are in ${data.city}, ${data.countryName}`);
    })
    .catch(err => console.error(`Somethng go wrong: `, err.message));
};

whereAmI(52.508, 13.38);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
