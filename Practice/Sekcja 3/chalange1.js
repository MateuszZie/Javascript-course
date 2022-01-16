const calcAvrage = (firstScorem, secondScore, thirsScore) => (firstScorem + secondScore + thirsScore) / 3;

const dolphineAvg = calcAvrage(44, 23, 71);
const koalaAvg = calcAvrage(65, 54, 49);

function checkWinner(dolphineTeamAvg, koalaTeamAvg) {
    if (dolphineTeamAvg >= koalaTeamAvg * 2) return `Delphine win ${dolphineTeamAvg} : ${koalaTeamAvg}`;
    else if (dolphineTeamAvg * 2 <= koalaTeamAvg) return `Koala win ${dolphineTeamAvg} : ${koalaTeamAvg}`;
    else return 'Zonk';
}

console.log(checkWinner(dolphineAvg, koalaAvg));
console.log(checkWinner(calcAvrage(85, 54, 41), calcAvrage(23, 34, 27)));