'use strict';
const textArea = document.createElement('textarea');
document.body.append(textArea);
const customButton = document.createElement('button');
document.body.append(customButton);
const toConvert = `underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure`;
textArea.textContent = toConvert;

const changeText = function () {
  const text = textArea.textContent.split('\n');
  let finalText = '';
  for (let i = 0; i < text.length; i++) {
    text[i] += '';
    const smallArr = text[i].trim().toLowerCase().split('_');
    const tesxt2 = smallArr[1] + '';
    const secondText = tesxt2.replace(tesxt2[0], tesxt2[0].toUpperCase());
    const textCdn = smallArr[0] + secondText + '';
    let endText = `${textCdn.padEnd(20, ' ')}${'✅'.repeat(i + 1)}\n`;
    finalText += endText;
  }
  textArea.textContent = finalText;
  console.log(finalText);
};

customButton.addEventListener('click', changeText);
