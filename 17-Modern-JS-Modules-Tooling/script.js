// import def, { addItem, cart, totalPrice as price, tq } from './shopingCart.js';
// def();
// addItem('bread', 5);
// console.log(cart, price, tq);

console.log('Import Module');

const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await res.json();
console.log(data);
import * as ShopngCart from './shopingCart.js';
console.log(ShopngCart);
ShopngCart.addItem('bread', 5);
console.log(ShopngCart.cart);
