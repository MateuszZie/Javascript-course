'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
for (const [score, player] of game.scored.entries()) {
  console.log(`Goal ${score + 1}: ${player}`);
}
let sum = 0;
for (const value of Object.values(game.odds)) {
  sum += value;
}
const avg = sum / Object.keys(game.odds).length;
console.log(avg);

for (const [key, value] of Object.entries(game.odds)) {
  console.log(
    `Odd of ${game[key] ? `victory ${game[key]}` : `draw`}: ${value}`
  );
}

const scores = {};
for (const player of game.scored) {
  if (scores[player]) {
    scores[player]++;
  } else {
    scores[player] = 1;
  }
}

console.log(scores);
