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

// Arrays

const friends = ["Marek", "Jarek", "Zygmunt"];

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

// Basic Array Operations

const friends = ["Marek", "Jarek", "Zygmunt"];

const push = friends.push("Mateusz");
console.log(push);
console.log(friends);
console.log(friends.length);

const unshift = friends.unshift("Darek");
console.log(unshift);
console.log(friends);

const pop = friends.pop();
console.log(pop);
console.log(friends);

const shift = friends.shift();
console.log(shift);
console.log(friends);

console.log(friends.indexOf("Jarek"));
console.log(friends.indexOf("Mateusz"));

console.log(friends.includes("Jarek"));
console.log(friends.includes("Mateusz"));

// Objects  /  Dot vs. Bracket Notation

const mateusz = {
    firstName: "Mateusz",
    lastName: "Ziebura",
    age: 2022 - 1986,
    job: "Junior Java Developer",
    friends: ["Marek", "Jarek", "Zygmunt"]
};

console.log(mateusz);

console.log(mateusz.firstName);
console.log(mateusz["firstName"]);

let matInformation = prompt("What do you want know about Mateusz? Choose beetwen firstName, lastName, age, job, friends");

if (mateusz[matInformation]) {
    console.log(mateusz[matInformation]);
} else matInformation = prompt("Bad request! Choose beetwen firstName, lastName, age, job, friends");

mateusz.email = "mat@wp.pl";
mateusz['phone'] = 12345678;

console.log(mateusz);

console.log(`${mateusz.firstName} has ${mateusz.friends.length} nad his best friend calls ${mateusz.friends[0]}`);
*/
// Object Methods

const mateusz = {
    firstName: "Mateusz",
    lastName: "Ziebura",
    birthYear: 1986,
    job: "Junior Java Developer",
    friends: ["Marek", "Jarek", "Zygmunt"],
    isHasDrivingLicence: true,

    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    }
};


// mateusz.calcAge();
// console.log(mateusz);

console.log(`${mateusz.firstName} is a ${mateusz.calcAge()} years old ${mateusz.job}, and he has ${mateusz.isHasDrivingLicence ? 'a' : 'no'} driving license`)
