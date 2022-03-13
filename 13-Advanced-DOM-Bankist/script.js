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
  section1.scrollIntoView({ behavior: 'smooth' });
});

// document.querySelectorAll('.nav__link').forEach(el => {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = el.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    document
      .querySelector(e.target.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  }
});

const tabs = document.querySelectorAll('.operations__tab');
const tabConetiner = document.querySelector('.operations__tab-container');
const tabContent = document.querySelectorAll('.operations__content');
const navContainer = document.querySelector('.nav__links');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const sectionList = document.querySelectorAll('.section');
const imgToBlur = document.querySelectorAll('img[data-src]');
const sldies = document.querySelectorAll('.slide');

const changeNavOpacity = function (e, opacity) {
  const link = e.target;
  if (link.classList.contains('nav__link')) {
    const closeNav = link.closest('.nav');
    const siblings = closeNav.querySelectorAll('.nav__link');
    const logo = closeNav.querySelector('img');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

navContainer.addEventListener('mouseover', changeNavOpacity.bind(0.5));
navContainer.addEventListener('mouseout', changeNavOpacity.bind(1));

tabConetiner.addEventListener('click', e => {
  const target = e.target.closest('.operations__tab');

  if (!target) return;

  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabContent.forEach(t => t.classList.remove('operations__content--active'));

  target.classList.add('operations__tab--active');
  document
    .querySelector(`.operations__content--${target.dataset.tab}`)
    .classList.add('operations__content--active');
});

const stickyNav = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${nav.getBoundingClientRect().height}px`,
});

headerObserver.observe(header);

const sectionsAnimation = function (entries, observe) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observe.unobserve(entry.target);
};

const sectionsObserver = new IntersectionObserver(sectionsAnimation, {
  root: null,
  threshold: 0.15,
});
sectionList.forEach(sec => {
  sectionsObserver.observe(sec);
  sec.classList.add('section--hidden');
});

const loadImage = function (entries, observe) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  const target = entry.target;
  target.src = target.dataset.src;
  target.addEventListener('load', () => target.classList.remove('lazy-img'));
  observe.unobserve(target);
};

const imgObserver = new IntersectionObserver(loadImage, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgToBlur.forEach(img => imgObserver.observe(img));

const slidePosition = function (currentSlide) {
  sldies.forEach((sl, i) => {
    sl.style.transform = `translateX(${100 * (i - currentSlide)}%)`;
  });
};
let currSlide = 0;
slidePosition(currSlide);
const maxSlides = sldies.length - 1;

const rightSliderButton = function () {
  if (currSlide === maxSlides) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  slidePosition(currSlide);
};

const leftSliderButton = function () {
  if (currSlide === 0) {
    currSlide = maxSlides;
  } else {
    currSlide--;
  }
  slidePosition(currSlide);
};

document
  .querySelector('.slider__btn--left')
  .addEventListener('click', leftSliderButton);
document
  .querySelector('.slider__btn--right')
  .addEventListener('click', rightSliderButton);

/*
// Implementing a Sticky Navigation: The Scroll Event
const initialCords = section1.getBoundingClientRect();

window.addEventListener('scroll', function () {
  if (window.scrollY > initialCords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});
/*
// DOM Traversing
const h1 = document.querySelector('h1');
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
console.log(h1.firstChild);

h1.firstElementChild.style.color = 'orange';
h1.lastElementChild.style.color = 'black';

console.log(h1.parentElement);
console.log(h1.parentNode);
h1.closest('header').style.backgroundColor = 'var(--color-primary-opacity)';
h1.closest('h1').style.backgroundColor = 'var(--color-tertiary)';

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

[...h1.parentElement.children].forEach(el => {
  if (el !== h1) {
    el.style.transform = 'scale(0.5)';
  }
});

/*
// Event Propagation in Practice
const randNum = () => Math.trunc(Math.random() * 256);
const randColor = () => `rgb(${randNum()},${randNum()},${randNum()})`;
document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randColor();
    console.log('Nav', e.target, e.currentTarget);
    console.log(e.currentTarget === this);
  },
  true
);
document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randColor();
  console.log('Link', e.target, e.currentTarget);
  // e.stopPropagation();
});
document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randColor();
  console.log('Links', e.target, e.currentTarget);
});
/*
// Types of Events and Event Handlers
const h1 = document.querySelector('h1');
const mouseenterFunc = function () {
  alert('EventListner: Reading headre');
};

h1.addEventListener('mouseenter', mouseenterFunc);

setTimeout(() => h1.removeEventListener('mouseenter', mouseenterFunc), 5000);
h1.onmouseenter = function () {
  alert('mouseEnter: Reading headre');
};
/*
// Implementing Smooth Scrolling
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
