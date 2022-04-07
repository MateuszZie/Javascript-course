const budget = [
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
];

const limits = {
  jonas: 1500,
  matilda: 100,
};

const addExpense = function (value, description, user) {
  if (!user) user = 'jonas';
  user = user.toLowerCase();

  const limit = limits[user] ?? 0;

  if (value <= limit) budget.push({ value: -value, description, user });
};
addExpense(10, 'Pizza 🍕');
addExpense(100, 'Going to movies 🍿', 'Matilda');
addExpense(200, 'Stuff', 'Jay');
console.log(budget);

const check = function () {
  for (const entry of budget) {
    const limit = limits[entry.user] ?? 0;

    if (entry.value < -limit) entry.flag = 'limit';
  }
};
check();

console.log(budget);

const bigExpenses = function (bigLimit) {
  let output = '';
  for (const entry of budget) {
    if (entry.value <= -bigLimit) output += `${entry.description.slice(-2)} / `; // Emojis are 2 chars
  }
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

bigExpenses(100);
