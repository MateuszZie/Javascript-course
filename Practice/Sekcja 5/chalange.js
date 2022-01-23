'use strict';
const printForecast = lol => {
  let text = `...`;
  for (let i = 0; i < lol.length; i++) {
    text += ` ${lol[i]}\u00B0C in ${i + 1} days ...`;
  }
  console.log(text);
};

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
