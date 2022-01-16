'use strict';

// Active Strict Mode
/*
let hasDriversLicens = false;
const passTest = true;

if (passTest) hasDriverLicens = true;
if (hasDriversLicens) console.log("Test Passed");

const interface = 23445;
*/
// Fuctions

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
