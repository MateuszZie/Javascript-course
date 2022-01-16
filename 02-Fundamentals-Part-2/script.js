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

// Arrow function

const calcAge3 = birthYear => 2022 - birthYear;

console.log(calcAge3(1986));

const yearsUntilRetiment = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retairment = 65 - age;
    return `${firstName} you need still work ${retairment} years before you will go to retairment`;
}

console.log(yearsUntilRetiment(1986, 'Mateusz'));
*/
// Arrays

const friends = ["Marek", "Jarek", "zygmunt"];

const years = new Array(1999, 2000, 2015);

console.log(friends);
console.log(years);

console.log(friends[0]);
console.log(years.length);
console.log(years[years.length - 1]);

friends[1] = "Mateusz";
console.log(friends);

const mxArray = ["Marcin", 2012, friends];

console.log(mxArray);