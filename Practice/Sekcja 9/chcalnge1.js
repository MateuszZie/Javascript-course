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

const [players1, players2] = game.players;
console.log(players1);
console.log(players2);
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
const { team1, x: draw, team2 } = { ...game.odds };
console.log(team1, draw, team2);

const printGoals = function (...players) {
  let totalt1 = 0;
  let totalt2 = 0;

  for (let i = 0; i < players.length; i++) {
    if (players1Final.includes(players[i])) {
      totalt1++;
    } else {
      totalt2++;
    }

    console.log(
      `${players[i]} ⚽ \n${game.team1} ${totalt1} : ${totalt2} ${game.team2}`
    );
  }
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);
let winner = team1 < team2 && game.team1;
winner ||= game.team2;
console.log(winner);
