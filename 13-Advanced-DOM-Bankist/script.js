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

const btnScrollToo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollToo.addEventListener('click', function (e) {
  const s1coods = section1.getBoundingClientRect();
  // console.log(s1coods);
  // console.log(e.target.getBoundingClientRect());
  // console.log('curent position ', window.pageXOffset, window.pageYOffset);
  // console.log(
  //   'view port',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // window.scrollTo(
  //   s1coods.left + window.pageXOffset,
  //   s1coods.top + window.pageYOffset
  // );
  // window.scrollTo({
  //   left: s1coods.left + window.pageXOffset,
  //   top: s1coods.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  section1.scrollIntoView({ behavior: 'smooth' });
});

/*
// Styles, Attributes and Classes
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

message.style.backgroundColor = 'red';
message.style.width = '120%';

console.log(message.style.backgroundColor);
console.log(getComputedStyle(message).backgroundColor);
console.log(getComputedStyle(message).height);
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
console.log(message.style.height);

document.documentElement.style.setProperty('--color-primary', 'orangered');
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);
logo.alt = 'New name of Banking logo';
console.log(logo.alt);
console.log(logo.src);
console.log(logo.getAttribute('src'));
console.log(logo.desiner);
console.log(logo.getAttribute('desiner'));
console.log(logo.dataset.versionNumber);

logo.classList.add('c', 'j');
logo.classList.remove('j');
logo.classList.toggle('c');
logo.classList.toggle('c');
console.log(logo.classList.contains('c'));
logo.className = 'jonas';
*/
