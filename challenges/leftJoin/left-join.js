'use strict';


function leftJoin(hashOne, hashTwo) {

  let newArr = [];

  for (let i = 0; i < hashOne.length; i++) {
    if (hashOne[i]) {
      let leftCurrent = hashOne[i];
      while (leftCurrent) {
        if (hashTwo[i]) {

          let rightCurrent = hashTwo[i];
          let noMatch = true;
          while (rightCurrent) {
            if (leftCurrent.key === rightCurrent.key) {
              newArr.push({
                key: leftCurrent.key,
                values: [leftCurrent.value, rightCurrent.value],
              });
              noMatch = false;
            }
            rightCurrent = rightCurrent.next;
          }
          if (noMatch) {
            newArr.push({
              key: leftCurrent.key,
              values: [leftCurrent.value, null],
            });
          }
        } else {
          newArr.push({
            key: leftCurrent.key,
            values: [leftCurrent.value, null],
          });
        }
        leftCurrent = leftCurrent.next;


      }
    }
  }
  return newArr;
}


module.exports = leftJoin;


