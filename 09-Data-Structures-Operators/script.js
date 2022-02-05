'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },

  deliver: function ({
    adress = 'Rybnik',
    time = '22:00',
    indexMainMenu = 0,
    indexStratMenu = 3,
  }) {
    console.log(
      `${this.mainMenu[indexMainMenu]} ${this.starterMenu[indexStratMenu]} will be delivred to ${adress} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here you have your past with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPiza: function (mainIngridient, ...restIngridiens) {
    console.log(mainIngridient);
    console.log(restIngridiens);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

restaurant.numberOfGuess = 0;
const numberOfGuess2 = restaurant.numberOfGuess ?? 10;
console.log(numberOfGuess2);

/*
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
