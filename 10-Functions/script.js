'use strict';

const lufthansa = {
  arline: 'Lufthansa',
  idata: 'LX',
  bookings: [],
  book(flightNumber, passName) {
    console.log(
      `${passName} booked a seat on ${this.arline} flght ${this.idata}${flightNumber}`
    );
    this.bookings.push({ flight: `${this.idata}${flightNumber}`, passName });
  },
};

const eurowings = {
  arline: 'Eurowings',
  idata: 'EW',
  bookings: [],
};

lufthansa.book(234, 'Mateusz');
console.log(lufthansa);

const bookFromLufthansa = lufthansa.book;
bookFromLufthansa.call(eurowings, 123, 'Andrzej');

const simpleArr = [987, 'Marta'];
bookFromLufthansa.apply(eurowings, simpleArr);
bookFromLufthansa.call(eurowings, ...simpleArr);
console.log(eurowings);

const bookEW = bookFromLufthansa.bind(eurowings);
bookEW(456, 'Sylwia');

const bookEW23 = bookFromLufthansa.bind(eurowings, 23);
bookEW23('Paula');

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

const tax = (tax, value) => value + value * tax;
console.log(tax(0.1, 100));

const vatPl = tax.bind(null, 0.23);
console.log(vatPl(100));

const nowyLad = function (tax) {
  return function (value) {
    return value + value * tax;
  };
};

console.log(nowyLad(0.4)(100));
const konf20 = nowyLad(0.2);
console.log(konf20(100));

/*
// Functions Returning Functions
const greet = function (param) {
  return function (name) {
    console.log(`${param} ${name}`);
  };
};
greet('Hey')('Mateusz');

const greetings = greet('Hello');

greetings('Mateusz');

const arrow = param => {
  return Myname => {
    console.log(`${param} ${Myname}`);
  };
};
arrow('Heyy')('Mateusz');
const greetArrow = arrow('HoHo');
greetArrow('Mateusz');

/*
// Functions Accepting Callback Functions
const oneWorld = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWorld = function (str) {
  const [firstWorld, ...other] = str.split(' ');
  return firstWorld.toUpperCase() + ' ' + other.join(' ');
};

const transform = function (str, fn) {
  console.log(`Orginal string: ${str}`);
  console.log(`Converterd string: ${fn(str)}`);
  console.log(`Created by: ${fn.name}`);
};

transform('JavaScript is the best', oneWorld);
transform('JavaScript is the best', upperFirstWorld);

const high5 = function () {
  console.log('👏');
};
document.body.addEventListener('click', high5);

['sads', 'dsds', 'dsds'].forEach(high5);

/*
// How Passing Arguments Works: Value vs. Reference
const flightNum = 'L123';
const passanger = {
  name: 'Mateusz',
  pesel: 435435435435,
};

const bookingSystem = function (flightNum, passanger) {
  flightNum = 'K432';
  passanger.name = 'Mr. ' + passanger.name;

  if (passanger.pesel === 435435435435) {
    alert('Check in');
  } else {
    alert('Incorrect pesel');
  }
};

const newPesel = function (passanger) {
  passanger.pesel = Math.trunc(Math.random() * 1000000000);
};

console.log(flightNum, passanger);
newPesel(passanger);
bookingSystem(flightNum, passanger);
console.log(flightNum, passanger);

// Default Parameters
const bookings = [];

const createBoking = function (
  flightNum,
  passangerNum = 1,
  price = passangerNum * 5.25
) {
  const booking = {
    flightNum,
    passangerNum,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBoking('L15', undefined, 15);
createBoking('L15', 10, 15);
createBoking('L15', 10);
*/
