'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
const createUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUserName(accounts);

const displayMovments = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const operation = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `        <div class="movements__row">
    <div class="movements__type movements__type--${operation}">${
      i + 1
    } ${operation}</div>
    <div class="movements__value">${mov}</div>
  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const displayBallance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};

const displaySummary = function (acc) {
  labelSumIn.textContent = `${acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, dep) => acc + dep, 0)}???`;
  labelSumOut.textContent = `${Math.abs(
    acc.movements.filter(mov => mov < 0).reduce((acc, wit) => acc + wit, 0)
  )}???`;
  labelSumInterest.textContent = `${acc.movements
    .filter(mov => mov > 0)
    .map(dep => (dep * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0)}???`;
};

const updateUi = function (acc) {
  displayMovments(acc.movements);
  displayBallance(acc);
  displaySummary(acc);
};

let curentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  curentAccount = accounts.find(
    acc =>
      acc.username === inputLoginUsername.value &&
      acc.pin === Number(inputLoginPin.value)
  );
  if (curentAccount) {
    containerApp.style.opacity = 100;
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();
    labelWelcome.textContent = `Welcome back, ${
      curentAccount.owner.split(' ')[0]
    }`;
    updateUi(curentAccount);
  }
});
let sorted = true;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovments(curentAccount.movements, sorted);
  sorted = !sorted;
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const reciverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  if (
    amount > 0 &&
    reciverAcc &&
    reciverAcc.username !== curentAccount.username &&
    curentAccount.balance >= amount
  ) {
    curentAccount.movements.push(-amount);
    reciverAcc.movements.push(amount);
  }
  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferAmount.blur();
  updateUi(curentAccount);
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    curentAccount.username === inputCloseUsername.value &&
    curentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === curentAccount.username
    );
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputClosePin.value = inputCloseUsername.value = '';
  inputClosePin.blur();
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && curentAccount.movements.some(mov => mov >= amount * 0.1)) {
    curentAccount.movements.push(amount);
    updateUi(curentAccount);
  }
  inputLoanAmount.value = '';
  inputLoanAmount.blur();
});

// sum all deposits
console.log(
  accounts
    .flatMap(acc => acc.movements)
    .filter(movements => movements > 0)
    .reduce((acc, mov) => acc + mov, 0)
);

// num deposit >= 1000
console.log(
  accounts
    .flatMap(acc => acc.movements)
    .reduce((sum, cur) => (cur >= 1000 ? ++sum : sum), 0)
);
console.log(
  accounts
    .flatMap(acc => acc.movements)
    .reduce(
      (sums, curr) => {
        curr > 0 ? (sums.deposit += curr) : (sums.withdraw += curr);
        return sums;
      },
      {
        deposit: 0,
        withdraw: 0,
      }
    )
);
const text = 'this is a nice Title';
const text2 = ' and this is   a NICE Title';
const exceptions = ['and', 'the', 'a', 'an', 'for', 'to', 'but', 'at', 'by'];
const converter = function (text) {
  const capitalizeFirstLetter = txt => txt[0].toUpperCase() + txt.slice(1);
  console.log(
    capitalizeFirstLetter(
      text
        .trim()
        .toLowerCase()
        .split(' ')
        .filter(word => word)
        .map(txt =>
          !exceptions.includes(txt) ? capitalizeFirstLetter(txt) : txt
        )
        .join(' ')
    )
  );
};
converter(text);
converter(text2);

/*
// flat and flatMap
const arr = [[[1, 2], [3, 4], 5, 6], 7];
console.log(arr.flat(2));

console.log(
  accounts
    .map(acc => acc.movements)
    .flat()
    .reduce((acc, mov) => acc + mov, 0)
);

console.log(
  accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0)
);
/*
// The find Method
const owner = accounts.find(acc => acc.owner === 'Sarah Smith');
console.log(owner);
const ownerFroLoop = function (acccount) {
  for (const acc of acccount) {
    if (acc.owner === 'Sarah Smith') return acc;
  }
  return null;
};
console.log(ownerFroLoop(accounts));
/*
// forEach With Maps and Sets
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

const setArr = new Set(['USD', 'EUR', 'GBP', 'USD', 'EUR']);

setArr.forEach(function (value, _, set) {
  console.log(value);
});
*/
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/*
// some and every
console.log(movements.every(mov => mov > -700));

/*
//The reduce Method
const max = movements.reduce(
  (acc, mov) => (acc > mov ? acc : mov),
  movements[0]
);
const min = movements.reduce(
  (acc, mov) => (acc < mov ? acc : mov),
  movements[0]
);
console.log(min);

/*
// The filter Method
const deposits = movements.filter(mov => mov > 0);
const withdraws = movements.filter(mov => mov < 0);
console.log(deposits);
console.log(withdraws);
/*
//The map Method
const eurToUsd = 1.1;

const movementsUSD = movements.map(mov => {
  return mov * eurToUsd;
});

console.log(movements);
console.log(movementsUSD);

const movementsDescriptions = movements.map(
  (mov, i, arr) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposit' : 'withdraw'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);

/*
//Looping Arrays: forEach
movements.forEach(function (mov, i, arr) {
  let ver;
  if (mov > 0) ver = 'Deposit';
  else if (mov < 0) ver = 'Withdraw';
  console.log(`Transaction ${i + 1} ${ver} ${Math.abs(mov)}`);
});

/////////////////////////////////////////////////
/*
// Looping Arrays: forEach
const arr = [20, 30, 60];
console.log(arr[0]);
console.log(arr.at(0));

console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
/*
// Simple Array Methods
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(1));
console.log(arr.slice(1, 3));
console.log(arr.slice(-2));
console.log(arr.slice(2, -1));
console.log(arr);

console.log(arr.splice(2, 3));
console.log(arr);

arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
arr2.reverse();
console.log(arr2);

const fullArr = arr.concat(arr2);

console.log(fullArr);

console.log(fullArr.join('-'));

// More Ways of Creating and Filling Arrays
const arr = [1, 2, 3, 4, 5];
const arr2 = new Array(1, 2, 3, 4, 5);
console.log(arr);
console.log(arr2);
const a = new Array(5);

a.fill(1, 2, 4);
console.log(a);

const b = Array.from({ length: 5 }, () => 1);
console.log(b);
const c = Array.from({ length: 5 }, (_, i) => i * 2);
console.log(c);

labelBalance.addEventListener('click', function () {
  const g = Array.from(document.querySelectorAll('.movements__value'), el =>
    Number(el.textContent)
  );
  console.log(g);
});
*/
