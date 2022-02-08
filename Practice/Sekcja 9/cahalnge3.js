'use strict';
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);
const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
for (const [key, event] of gameEvents.entries()) {
  key < 45
    ? console.log(`[First Half] ${key}: ${event}`)
    : console.log(`[Secons Half] ${key}: ${event}`);
}
let sum = 0;
let nineMinut = 0;
for (let i = 0; i < 91; i++) {
  if (gameEvents.has(i)) sum++;
  if (i % 9 === 0) {
    nineMinut++;
  }
  console.log(`${sum / nineMinut} events happened, on
  average, every 9 minutes`);
}
