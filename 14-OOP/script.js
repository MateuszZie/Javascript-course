'use strict';
/*
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

console.log(mateusz.__proto__);
console.log(mateusz.__proto__.__proto__);
console.log(mateusz.__proto__.__proto__.__proto__);

const arr = [1, 2, 3, 4, 2, 3, 3, 4, 3, 2, 3, 2, 3, 3];

console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);
console.log(arr.__proto__.__proto__.__proto__);

console.log(arr.__proto__ === Array.prototype);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
*/

class PersonCl {
  constructor(firstName, birthYear) {
    this.birthYear = birthYear;
    this.firstName = firstName;
  }

  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }
}

const darek = new PersonCl('Darek', 1973);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

darek.greet();
darek.calcAge();
console.log(darek);
