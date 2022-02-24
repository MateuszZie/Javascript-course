'use strict';
const checkDogs = function (arr1, arr2) {
  const arr3 = arr1.splice(1, 2);
  const arr4 = arr3.concat(arr2);
  arr4.forEach(function (dogAge, i) {
    console.log(
      `Dog number ${i + 1} is ` +
        `${
          dogAge >= 3
            ? `an adult, and is ${dogAge} years old`
            : 'still a puppy 🐶'
        }`
    );
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
console.log('===========================================================');
checkDogs([9, 16, 6, 8, 3], [4, 1, 15, 8, 3]);
