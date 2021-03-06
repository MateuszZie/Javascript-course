'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2022-03-04T18:49:59.371Z',
    '2022-03-05T12:01:20.894Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2022-03-04T18:49:59.371Z',
    '2022-03-05T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

const formCur = function (value, locale, curency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: curency,
  }).format(value);
};

const displaMovmentsDate = function (date, locale) {
  const dayAgo = Math.round((new Date() - date) / (1000 * 60 * 60 * 24));
  if (dayAgo === 0) return 'Today';
  if (dayAgo === 1) return 'Yesterday';
  if (dayAgo <= 7) return dayAgo + ' days ago';
  return new Intl.DateTimeFormat(locale).format(date);
};

const timeToString = function () {
  const now = new Date();
  return `, ${now.getHours().toString().padStart(2, 0)}:${now
    .getMinutes()
    .toString()
    .padStart(2, 0)}`;
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  let allMovements = [];
  acc.movements.forEach((mov, i) =>
    allMovements.push([mov, acc.movementsDates[i]])
  );
  const movs = sort ? allMovements.sort((a, b) => a[0] - b[0]) : allMovements;

  movs.forEach(function (mov, i) {
    const type = mov[0] > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displaMovmentsDate(
      new Date(mov[1]),
      acc.locale
    )}</div>
        <div class="movements__value">${formCur(
          mov[0],
          acc.locale,
          acc.currency
        )}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;
// Fake loggin user
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

// const local = navigator.language;

// labelDate.textContent = new Intl.DateTimeFormat(local).format(new Date());
const getTime = function (time) {
  labelTimer.textContent = `${String(Math.trunc(time / 60)).padStart(
    2,
    '0'
  )}:${String(time % 60).padStart(2, '0')}`;
};

const statLogOutTimer = function () {
  let time = 15;
  getTime(time);
  timer = setInterval(() => {
    getTime(time);
    time--;
    labelTimer.textContent = `${String(Math.trunc(time / 60)).padStart(
      2,
      '0'
    )}:${String(time % 60).padStart(2, '0')}`;
    if (time === 0) {
      containerApp.style.opacity = 0;
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
    }
  }, 1000);
};

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();
  if (timer) clearInterval(timer);
  statLogOutTimer();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, {
      minute: '2-digit',
      hour: 'numeric',
      day: 'numeric',
      month: 'long',
      weekday: 'long',
      year: 'numeric',
    }).format(new Date());

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    currentAccount.movementsDates.push(new Date());
    receiverAcc.movementsDates.push(new Date());

    // Update UI
    updateUI(currentAccount);
    clearInterval(timer);
    statLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(() => {
      // Add movement
      currentAccount.movements.push(amount);
      currentAccount.movementsDates.push(new Date());

      // Update UI
      updateUI(currentAccount);
    }, 2500);
  }
  inputLoanAmount.value = '';
  clearInterval(timer);
  statLogOutTimer();
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/*
// Timers: setTimeout and setInterval
const arr = [2, 3];
const calc = setTimeout(
  (arg1, arg2) => console.log(`${arg1} plus ${arg2} equal ${arg1 + arg2}`),
  2000,
  ...arr
);

if (arr[1] === 3) clearTimeout(calc);

setInterval(() => console.log(new Date()), 1000);
/*
// Creating Dates
const now = new Date();
console.log(now);
console.log(new Date('Mar 06 2022 15:50:36'));
console.log(new Date('March 06, 2022'));
console.log(new Date(account1.movementsDates[0]));
console.log(new Date(2037, 10, 8, 15, 23, 42));
console.log(new Date(2037, 10, 8));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

const feature = new Date(2037, 10, 9, 15, 23, 42);
console.log(feature);
console.log(feature.getFullYear());
console.log(feature.getMonth());
console.log(feature.getDate());
console.log(feature.getDay());
console.log(feature.getHours());
console.log(feature.getMinutes());
console.log(feature.getSeconds());
console.log(feature.getMilliseconds());
console.log(feature.toISOString());
console.log(feature.getTime());
console.log(new Date(2141389422000));

console.log(Date.now());

feature.setFullYear(2400);
console.log(feature);

/*
// Working with BigInt
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);

console.log(4353345454353454354345n);
console.log(BigInt(345435));

console.log(100n * 100n);

const huge = 32423543367465879455234345646764654n;
console.log(huge * BigInt(345345));
console.log(20n > 15);
console.log(20n < 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == 20);
console.log(huge + ' is really BIG');

console.log(8n / 3n);
console.log(8n / 2n);
/*
// Numeric Separators
console.log(860_450_000);
console.log(34_55);
console.log(Number('230_000'));
console.log(Number.parseInt('230_000'));
/*
// The Remainder Operator
const isEven = num => num % 2 === 0;

console.log(isEven(2));
console.log(isEven(7));
console.log(isEven(14));

labelBalance.addEventListener('click', function () {
  const monRows = [...document.querySelectorAll('.movements__row')];
  monRows.forEach((mov, i) => {
    if (i % 2 === 0) mov.style.backgroundColor = 'orange';
    if (i % 3 === 0) mov.style.backgroundColor = 'blue';
  });
});
/*
Math and Rounding
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(2, 45, 67, 456, 55));
console.log(Math.max(2, 45, '67', 456, 55));
console.log(Math.max(2, 45, '67px', 456, 55));

console.log(Math.min(2, 45, 67, 456, 55));

console.log(Math.floor(Math.random() * 5 + 1));

const randomBetween = (min, max) =>
  console.log(Math.floor(Math.random() * (max - min) + 1 + min));
randomBetween(10, 20);

console.log(Math.round(23.3));
console.log(Math.round(23.9));
console.log('=========');
console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));
console.log('=========');
console.log(Math.floor(23.3));
console.log(Math.floor('23.9'));
console.log('=========');
console.log(Math.floor(-23.3));
console.log(Math.trunc(-23.3));

console.log((23).toFixed(2));
console.log((23.43545).toFixed(2));
console.log(+(23.45).toFixed(5));

/*
// Converting and Checking Numbers
console.log(23 === 23.0);
console.log(Number('23'));
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);
console.log(+'23');

console.log(Number.parseInt('  20px'));
console.log(Number.parseInt('2.5xd'));
console.log(Number.parseFloat('2.5xd'));

console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(Number('20x')));
console.log(Number.isNaN(20 / 0));

console.log(20 / 0);

console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(Number('20x')));
console.log(Number.isFinite(20 / 0));
console.log('===============');
console.log(Number.isInteger(20));
console.log(Number.isInteger(20.0));
console.log(Number.isInteger(20.5));
console.log(Number.isInteger('20'));
console.log(Number.isInteger(Number('20x')));
console.log(Number.isInteger(20 / 0));
*/
