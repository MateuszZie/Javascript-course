'use strict';
const Person = function (firstName, birthDay) {
  this.firstName = firstName;
  this.birthDay = birthDay;
};

const mateusz = new Person('Mateusz', 1986);
console.log(mateusz instanceof Person);
console.log(mateusz);
