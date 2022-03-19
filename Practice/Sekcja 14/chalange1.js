'use strict';
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();

mercedes.brake();
mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();

// Chalange 2 ES6 class

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speedUS} mi/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speedUS} mi/h`);
  }
}

const ford = new CarCl('Ford', 120);

console.log(ford);
ford.accelerate();
ford.brake();
console.log(ford.speed, 'km/h');
console.log(ford.speedUS, 'mi/h');
ford.speedUS = 80;
console.log(ford);
ford.accelerate();
ford.brake();
