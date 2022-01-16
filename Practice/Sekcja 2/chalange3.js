const delphine = 'Delphine';
const koalas = 'Koalas';

const delphineAvgScore = (96 + 108 + 89) / 3;
const koalasAvgScore = (88 + 91 + 110) / 3;

// const delphineAvgScore = (97 + 112 + 101) / 3;
// const koalasAvgScore = (109 + 95 + 123) / 3;

// const delphineAvgScore = (97 + 112 + 101) / 3;
// const koalasAvgScore = (109 + 95 + 106) / 3;

const minimum = 100;

if (delphineAvgScore > koalasAvgScore && delphineAvgScore >= minimum) console.log(`${delphine} Wins!!`);
else if (delphineAvgScore < koalasAvgScore && koalasAvgScore >= minimum) console.log(`${koalas} Wins!!`);
else if (delphineAvgScore === koalasAvgScore && delphineAvgScore>= minimum && koalasAvgScore >= minimum) console.log(`Draw!!`);
else console.log("Both team are losers");