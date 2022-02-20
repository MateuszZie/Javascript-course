'use strict';

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
};
poll.displayResults = function (type = 'arrays') {
  if (type === 'string') {
    console.log('Poll results are 13, 2, 4, 1');
  } else if (type === 'arrays') {
    console.log(this.answers);
  }
};
poll.registerNewAnswer = function () {
  const fullQuestion = `${[this.question, ...this.options].join('\n')}`;
  let answer = Number(prompt(fullQuestion));
  let continiue = true;
  while (continiue) {
    if ([0, 1, 2, 3].includes(answer)) {
      this.answers[answer]++;
      continiue = false;
    } else {
      answer = Number(prompt(`Choose number between 0 and 3\n${fullQuestion}`));
    }
  }
  this.displayResults('string');
  this.displayResults('arrays');
};
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
