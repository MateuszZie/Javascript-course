console.log('Export Module');
console.log('Start Fetch');
await fetch('https://jsonplaceholder.typicode.com/users');
console.log('Stop Fetching');

export const cart = [];

export const addItem = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`You add ${quantity} ${product} to cart`);
};

const totalPrice = 250;
const totatQuantity = 23;

export { totalPrice, totatQuantity as tq };

export default function () {
  console.log(`I'm defalut`);
}
