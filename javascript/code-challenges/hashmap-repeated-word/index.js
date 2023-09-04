'use strict';

function repeatedWord(inputString) {
  const words = inputString.toLowerCase().split(' ');
  const wordMap = new Map();

  for (const word of words) {
    if (wordMap.has(word)) {
      return word;
    } else {
      wordMap.set(word, true);
    }
  }

  return 'No repeated words found';
}

let string = 'this is not jackblack, this is Tom';
let result = repeatedWord(string);
console.log(result);

module.exports = repeatedWord;
