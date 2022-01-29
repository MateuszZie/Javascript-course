'use strict';

/*
// Selecting and Manipulating Elements
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
// Handling Click Events
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
let gameOver = false;

const displayMessage = message =>
  (document.querySelector('.message').textContent = message);

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!gameOver) {
    if (!guess || guess > 20 || guess < 1) {
      displayMessage('Chose only number\nbetween 1 and 20');
    } else if (guess === secretNumber) {
      displayMessage('Game Over You Won!!!');
      gameOver = true;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else {
      score--;
      document.querySelector('.score').textContent = score;
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
    }
    if (score === 0) {
      displayMessage('Game Over You Lose!!!');
      gameOver = true;
    }
  }
});
document.querySelector('.again').addEventListener('click', () => {
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = '20';
  gameOver = false;
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
});
