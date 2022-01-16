const bill = 40;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

console.log(`Bill: ${bill} tip: ${tip} total: ${bill + tip}`);

