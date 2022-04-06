import def, { addItem, cart, totalPrice as price, tq } from './shopingCart.js';
def();
addItem('bread', 5);
console.log(cart, price, tq);
/*
console.log('Import Module');

const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await res.json();
console.log(data);
import * as ShopngCart from './shopingCart.js';
console.log(ShopngCart);
ShopngCart.addItem('bread', 5);
console.log(ShopngCart.cart);

const ShopngCart2 = (function () {
  const cart = [];
  const totalPrice = 250;
  const totatQuantity = 23;

  const addItem = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`You add ${quantity} ${product} to cart`);
  };
  return {
    addItem,
    totalPrice,
    cart,
  };
})();

ShopngCart2.addItem('apple', 20);
console.log(ShopngCart2);
console.log(ShopngCart2.totalPrice);
console.log(ShopngCart2.totatQuantity);
*/

import cloneDeep from 'lodash-es';

const state = {
  cart: [{ product: 'bread', quantty: 5 }],
  user: { loginIn: true },
};

const stateClone = Object.assign({}, state);
const stateCloneDeep = cloneDeep(state);
state.user.loginIn = false;
console.log(state);
console.log(stateClone);
console.log(stateCloneDeep);

class Person {
  gretings = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.gretings} ${this.name}`);
  }
}

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const mateusz = new Person('Mateusz');
Promise.resolve('Test').then(x => console.log(x));
