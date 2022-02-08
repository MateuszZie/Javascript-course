'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [`sat`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  hours: openingHours,

  order(startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },

  deliver({
    adress = 'Rybnik',
    time = '22:00',
    indexMainMenu = 0,
    indexStratMenu = 3,
  }) {
    console.log(
      `${this.mainMenu[indexMainMenu]} ${this.starterMenu[indexStratMenu]} will be delivred to ${adress} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here you have your past with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPiza(mainIngridient, ...restIngridiens) {
    console.log(mainIngridient);
    console.log(restIngridiens);
  },
};

const question = new Map([
  ['question', 'What is the best programing language'],
  [1, 'C'],
  [2, 'java'],
  [3, 'javaScript'],
  ['correct', 2],
  [true, 'Well done 🎉🎆'],
  [false, 'Try Again!'],
]);

console.log(question.get('question'));
for (const [key, value] of question.entries()) {
  typeof key === 'number' && console.log(`${key}: ${value}`);
}
const answer = prompt('Chose correct number');

console.log(question.get(question.get('correct') === Number(answer)));
/*
// Maps
const rest = new Map();
rest.set(1, 'first');
rest.set('omeNam', 'second');
rest.set([1, 2], "cant't reach");
console.log(rest);

console.log(rest.set(3, 'four').set('five').size);

const arr = [3, 5];
rest.set(arr, 'Array');
console.log(rest.get(arr));

// Sets
const setExample = new Set(['Pizza', 'Pasta', 'Pizza', 'Risotto']);
console.log(setExample);
setExample.add('Bread');
setExample.add('Bread');
console.log(setExample);
setExample.delete('Risotto');
console.log(setExample);
// setExample.clear();
// console.log(setExample);
for (const ing of setExample) {
  console.log(ing);
}

// Looping Objects: Object Keys, Values, and Entries
const keys = Object.keys(openingHours);
console.log(keys);
const values = Object.values(openingHours);
console.log(values);
const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`We are open ${day} from ${open} to ${close}`);
}

// Optional Chaining (?.)
if (restaurant.hours && restaurant.hours.mon) {
  console.log(restaurant.hours.mon.open);
}
console.log(restaurant.hours.mon?.open);

for (const day of weekDays) {
  console.log(
    `${day} we are open at ${restaurant.hours[day]?.open ?? 'close'}`
  );
}

console.log(restaurant.order?.(2, 2));
console.log(restaurant.orderRissoto?.(2, 2) ?? 'method dont exist');

const zenek = [{ irstname: 'Zenek' }];
console.log(zenek?.[0]?.firstname ?? 'User unknow');

// Looping Arrays: The for-of Loop
const main = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of main) console.log(item);

for (const [i, elm] of main.entries()) console.log(`${i + 1}: ${elm}`);


// Logical Assignment Operators
const rest1 = {
  name: 'Pizza Hut',
  guessNumber: 0,
};
const rest2 = {
  name: 'Pizza Hut',
  owner: 'Mateusz',
};

// rest1.guessNumber = rest1.guessNumber || 10;
// rest2.guessNumber = rest2.guessNumber || 10;

// rest1.guessNumber ||= 10;
// rest2.guessNumber ||= 10;

rest1.guessNumber ??= 10;
rest2.guessNumber ??= 10;

console.log(rest1, rest2);

// rest1.owner = rest1.owner && 'Darek';
// rest2.owner = rest2.owner && 'Darek';

rest1.owner &&= 'Darek';
rest2.owner &&= 'Darek';

console.log(rest1, rest2);


// The Nullish Coalescing Operator (??)
restaurant.numberOfGuess = 0;
const numberOfGuess2 = restaurant.numberOfGuess ?? 10;
console.log(numberOfGuess2);


// Short Circuiting (&& and ||)
console.log('Mateusz' || 0);
console.log(0 || null || 'Mateusz');
console.log(0 || null || undefined);

restaurant.numberOfGuess = 0;
const numberOfGuess = restaurant.numberOfGuess ? restaurant.numberOfGuess : 10;
console.log(numberOfGuess);
const numberOfGuess2 = restaurant.numberOfGuess || 10;
console.log(numberOfGuess2);

console.log('Mateusz' && 0);
console.log(0 && null && 'Mateusz');
console.log(0 && null && undefined);
console.log('Darek' && 'Jarek' && 'Mateusz');

if (restaurant.orderPiza) {
  restaurant.orderPiza('mushrooms');
}
restaurant.orderPiza && restaurant.orderPiza('something');

if (restaurant.orderP) {
  restaurant.orderPiza('mushrooms');
}
console.log(0 && restaurant.orderP && restaurant.orderPiza('something'));


//Rest Pattern and Parameters
const [a, b, ...c] = [1, 2, 3, 4, 5];
console.log(a, b, c);
const [pizza1, , pizza2, ...pizzas] = [
  ...restaurant.starterMenu,
  ...restaurant.mainMenu,
];
console.log(pizza1, pizza2, pizzas);

const { sat, ...other } = { ...restaurant.openingHours };
console.log(sat, other);
const ingridiens = ['mashrooms', 'garlic', 'pottatos', 'cucamber'];
restaurant.orderPiza('mashrooms');
restaurant.orderPiza('mashrooms', 'garlic', 'pottatos', 'cucamber');
restaurant.orderPiza(...ingridiens);

// The Spread Operator (...)
console.log(parseInt(0.0000000005));
const arr = [5, 6, 7];
const newArr = [1, 2, ...arr];
console.log(newArr);

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

const letter = ['a', 'b', 'c'];
const newletter = [...letter, ' ', '.S'];
console.log(newletter);
console.log(...letter);

const copyNewRestaurant = { ...restaurant, owner: 'Mateusz' };
console.log(copyNewRestaurant);

const ingridiens = [
  prompt('First Ingrident'),
  prompt('Second Ingrident'),
  prompt('Third Ingrident'),
];

restaurant.orderPasta(...ingridiens);

// Destructuring Objects
// restaurant.deliver({
//   adress: 'Chabrowa',
//   indexMainMenu: 1,
//   time: '23:00',
// });
// restaurant.deliver({
//   adress: 'Earth',
// });

// const { name: firstName, mainMenu, openingHours } = restaurant;
// console.log(firstName, mainMenu);

// const {
//   fri: { open: p, close: cl },
// } = openingHours;

// console.log(p, cl);

// const { open: timeopen = 10, cloed: closed = 22 } = openingHours.sat;
// console.log(timeopen, closed);

// let a = 2;
// let b = 5;
// const arr = { a: 10, b: 12 };
// ({ a, b } = arr);
// console.log(a, b);

// Destructuring Arrays
// const [a, b, c] = [1, 2, 3];
// console.log(a, b, c);

// let [start1, , start3] = restaurant.categories;
// console.log(start1, start3);
// const temp = start1;
// start1 = start3;
// start3 = temp;
// console.log(start1, start3);

// [start1, start3] = [start3, start1];
// console.log(start1, start3);

// const [d, e] = restaurant.order(2, 2);
// console.log(d, e);

// const [f = 1, g = 1, h = 1] = [3, 5];
// console.log(f, g, h);
*/
