'use strict';
/*
const Person = function (firstName, birthDay) {
  this.firstName = firstName;
  this.birthDay = birthDay;
};

Person.prototype.calcAge = function () {
  console.log(new Date().getFullYear() - this.birthDay);
};

const Student = function (firstName, birthDay, course) {
  Person.call(this, firstName, birthDay);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.intruduce = function () {
  console.log(`Hey my name is ${this.firstName} i m study ${this.course}`);
};
const mike = new Student('Mike', 1999, 'Java Scrpit');
console.dir(mike);
mike.intruduce();
mike.calcAge();
Student.prototype.constructor = Student;

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);
/*
const mateusz = new Person('Mateusz', 1986);
console.log(mateusz instanceof Person);
console.log(mateusz);

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


class PersonCl {
  constructor(fullName, birthYear) {
    this.birthYear = birthYear;
    this.fullName = fullName;
  }

  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }

  get age() {
    return new Date().getFullYear() - this.birthYear;
  }

  get fullName() {
    return this._fullName;
  }
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not full Name`);
  }

  static hey2() {
    console.log('Hey i m static too');
  }
}
PersonCl.hey = function () {
  console.log('Hey i m static');
};

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  intrudace() {
    console.log(`Hey my name is ${this.fullName} i m study ${this.course}`);
  }
  calcAge() {
    console.log('I m old');
  }
}

const marek = new StudentCl('Marek H', 2001, 'Java Script');
marek.intrudace();
marek.calcAge();

console.log(marek);
/*
PersonCl.hey();
PersonCl.hey2();

const darek = new PersonCl('Darek Z', 1973);

console.log(darek);

console.log(darek.age);

console.log(darek.fullName);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.fullName}`);
};

darek.greet();
darek.calcAge();
console.log(darek);

const account = {
  owner: 'Mateusz',
  movments: [100, 300, 200, 500],

  get latest() {
    return this.movments.slice(-1).pop();
  },
  set latest(num) {
    this.movments.push(num);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.latest);



const PersonProto = {
  init(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  },

  calAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  },
};

const steven = Object.create(PersonProto);

steven.init('Mateusz', 1986);
steven.calAge();

const StudentProto = Object.create(PersonProto);
const jay = Object.create(StudentProto);

StudentProto.init = function (name, birthYear, course) {
  PersonProto.init.call(this, name, birthYear);
  this.course = course;
};

StudentProto.intrudace = function () {
  console.log(`Hey my name is ${this.name} i m study ${this.course}`);
};
jay.init('Jay', 2005, 'Java Scrpt');
jay.intrudace();
jay.calAge();
console.log(jay);

*/
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movments = [];
    this.locale = navigator.language;
    console.log(`Hello ${owner} your account sucesfull created`);
  }
  deposit(val) {
    this.movments.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }
  isLoanPosible(val) {
    return true;
  }
  requesLoan(val) {
    if (this.isLoanPosible(val)) {
      this.deposit(val);
      console.log(`You deposit ${val}`);
    }
  }
}

const acc1 = new Account('Mateusz', 'PLN', 1234);
acc1.deposit(200);
acc1.withdraw(100);
acc1.requesLoan(300);
console.log(acc1.isLoanPosible());
console.log(acc1);
