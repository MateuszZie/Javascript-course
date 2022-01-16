'use strict';

// Active Strict Mode
/*
let hasDriversLicens = false;
const passTest = true;

if (passTest) hasDriverLicens = true;
if (hasDriversLicens) console.log("Test Passed");

const interface = 23445;

// Functions

function logger() {
    console.log("My name is Mateusz");
}

logger();
logger();
logger();

function juiceProcesor(apples, oranges) {
    console.log(apples, oranges);
    return `Juice from ${apples} Apples and ${oranges} Oranges`;
}

const appleJuice = juiceProcesor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = juiceProcesor(3, 4);
console.log(appleOrangeJuice);

console.log(juiceProcesor(6, 4));

const num = Number('25');
console.log(num);
*/
// Functions declaration vs expression

const age1 = calcAge1(1986);

function calcAge1(birthYear) {
    return 2022 - birthYear;
}

const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
}

const age2 = calcAge2(1986);

console.log(age1, age2);
