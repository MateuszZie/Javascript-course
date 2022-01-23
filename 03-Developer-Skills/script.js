// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
const x = 23;
const mateusz = "Mateusz lol'mnn";

const age = birthYear => 2022 - birthYear;
console.log(age(1986));
*/
// Debugging with the Console and Breakpoints
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C) FIX
    // value: Number(prompt('Degrees celsius:')),
    value: 10,
  };

  // B) FIND
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin());
