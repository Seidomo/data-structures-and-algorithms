
'use strict';





function findRepeatWord(string) {
  let wordsArr = string.split(' ');
  const hash = new Map();
  const results = [];
  if (string.length === 0) {
    return results;
  } else {
    for (let i = 0; i < wordsArr.length; i++) {
      if (hash.get(wordsArr[i]) === undefined) {
        hash.set(wordsArr[i], true);
      } else {
        const getValue = hash.get(wordsArr[i]);

        if (getValue !== undefined) {
          hash.set(wordsArr[i], !getValue);

        }

      }
    }
    hash.forEach((value, key) => {

      if (!value) {
        results.push(key);
      }
    });

  }
  return results[0];


}


module.exports = findRepeatWord;

