'use strict';

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

/*
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
