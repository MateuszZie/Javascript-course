'use strict';

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(dog => (dog.recommendedFood = dog.weight ** 0.75 * 28));
dogs
  .filter(dog => dog.owners.includes('Sarah'))
  .forEach(dog => {
    if (dog.curFood > dog.recommendedFood * 1.1) {
      console.log('Dog eat to much');
    } else if (dog.curFood < dog.recommendedFood - dog.recommendedFood * 0.1) {
      console.log('Dog eat to little');
    }
  });
console.log(dogs);
const ownersEatTooMuch = dogs.flatMap(dog =>
  dog.curFood > dog.recommendedFood * 1.1 ? dog.owners : []
);
const ownersEatTooLittle = dogs.flatMap(dog =>
  dog.curFood < dog.recommendedFood - dog.recommendedFood * 0.1
    ? dog.owners
    : []
);
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));
const dogEatOk = dog =>
  dog.curFood < dog.recommendedFood * 1.1 &&
  dog.curFood > dog.recommendedFood * 0.9;

console.log(dogs.some(dog => dogEatOk(dog)));
const arrDogEatOk = dogs.filter(dog => dogEatOk(dog));
console.log(arrDogEatOk);

const dogsCopy = [...dogs].sort(
  (a, b) => b.recommendedFood - a.recommendedFood
);

console.log(dogs, dogsCopy);
