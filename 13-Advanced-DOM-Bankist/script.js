'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const documentHead = document.querySelector('.header');
console.log(documentHead);
const documentSections = document.querySelectorAll('.section');
console.log(documentSections);
const sec1 = document.getElementById('section--1');
console.log(sec1);
const documentButtons = document.getElementsByTagName('button');
console.log(documentButtons);
const documenyBtn = document.getElementsByClassName('btn');
console.log(documenyBtn);

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'Simple message';
message.innerHTML =
  'We use cookies. <button class="btn btn--close-cookie">Got it!</button>';
documentHead.prepend(message);
// documentHead.append(message.cloneNode(true));
// documentHead.before(message);
// documentHead.after(message);
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });
