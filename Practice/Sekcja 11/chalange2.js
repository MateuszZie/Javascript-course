'use strict';

const calcAverageHumanAge = function (ages) {
  const adultDogs = ages
    .map(age => (age >= 2 ? 16 + age * 4 : age * 2))
    .filter(age => age >= 18);
  const sum = adultDogs.reduce((acc, age) => acc + age, 0);
  console.log(sum / adultDogs.length);
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
