'use strict';
const Person = function (firstName, birthDay) {
  this.firstName = firstName;
  this.birthDay = birthDay;
};

const mateusz = new Person('Mateusz', 1986);
console.log(mateusz instanceof Person);
console.log(mateusz);

Person.prototype.calcAge = function () {
  console.log(new Date().getFullYear() - this.birthDay);
};

console.log(mateusz.calcAge());
console.log(mateusz.__proto__ === Person.prototype);
Person.prototype.species = 'Homo Sapiens';

console.log(Person.prototype.isPrototypeOf(mateusz));
console.log(mateusz.hasOwnProperty('firstName'));
console.log(mateusz.hasOwnProperty('species'));
