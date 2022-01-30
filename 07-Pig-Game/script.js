'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newBtn = document.querySelector('.btn--new');
const currentScore0El = document.querySelector('#current--0');
const currentScore1El = document.querySelector('#current--1');
const plater0El = document.querySelector('.player--0');
const plater1El = document.querySelector('.player--1');

const setActive = () => {
  plater0El.classList.toggle('player--active');
  plater1El.classList.toggle('player--active');
};

const getActivePlayer = () =>
  plater0El.classList.contains('player--active') ? plater0El : plater1El;

const increseScore = activePlayer => {
  if (activePlayer === plater0El) {
    score0El.textContent =
      Number(score0El.textContent) + Number(currentScore0El.textContent);
    currentScore1El.textContent = 0;
    if (Number(score0El.textContent >= 100)) {
      plater1El.classList.remove('player--active');
      rollBtn.disabled = true;
      holdBtn.disabled = true;
    }
  } else {
    score1El.textContent =
      Number(score1El.textContent) + Number(currentScore1El.textContent);
    currentScore0El.textContent = 0;
    if (Number(score1El.textContent >= 100)) {
      plater0El.classList.remove('player--active');
      rollBtn.disabled = true;
      holdBtn.disabled = true;
    }
  }
};

const incresCurrentScore = (activePlayer, score) => {
  if (activePlayer === plater0El) {
    currentScore0El.textContent = Number(currentScore0El.textContent) + score;
  } else {
    currentScore1El.textContent = Number(currentScore1El.textContent) + score;
  }
};

const roll = () => {
  return Number(Math.trunc(Math.random() * 6 + 1));
};

const newGame = () => {
  diceEl.classList.add('hidden');
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;
  plater0El.classList.add('player--active');
  plater1El.classList.remove('player--active');
  holdBtn.disabled = false;
  rollBtn.disabled = false;
  diceEl.classList.add('hidden');
};

newGame();

rollBtn.addEventListener('click', () => {
  const activePlayer = getActivePlayer();
  const rollDice = roll();
  if (diceEl.classList.contains('hidden')) {
    diceEl.classList.remove('hidden');
  }
  diceEl.src = 'dice-' + rollDice + '.png';

  if (rollDice === 1) {
    setActive();
    currentScore1El.textContent = 0;
    currentScore0El.textContent = 0;
  } else {
    incresCurrentScore(activePlayer, rollDice);
  }
});

holdBtn.addEventListener('click', () => {
  const activePlayer = getActivePlayer();
  setActive();
  increseScore(activePlayer);
});

newBtn.addEventListener('click', newGame);
