'use strict';

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const limits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

const getLimit = function (user) {
  return limits[user] ?? 0;
};

const addExpense = function (state, value, description, user) {
  if (!user) user = 'jonas';
  const fixedUser = user.toLowerCase();

  return value <= getLimit(fixedUser)
    ? [...state, { value: -value, description, user: fixedUser }]
    : state;
};

console.log(budget);

const newBudget1 = addExpense(budget, 10, 'Pizza 🍕');
const newBudget2 = addExpense(newBudget1, 10, 'Going to movies 🍿', 'Matilda');
const newBudget3 = addExpense(newBudget2, 200, 'Stuff', 'Jay');
console.log(newBudget3);

const check = function (state) {
  return state.map(obj =>
    obj.value < -getLimit(obj.user) ? { ...obj, flag: 'limit' } : obj
  );
};
const checketBudget = check(budget);
const checketNewBudget = check(newBudget3);

console.log(checketBudget);
console.log(checketNewBudget);

const bigExpenses = function (state, bigLimit) {
  return state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join(' / ');
};

console.log(bigExpenses(budget, 100));
console.log(bigExpenses(newBudget3, 300));
