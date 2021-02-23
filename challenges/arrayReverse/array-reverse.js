'use strict';

function reverseArray(arr){
  const output = [];
  for (let i = arr.length - 1; i> -1; i--){
    output.push(arr[i]);
  }

  return output;
}

module.exports = reverseArray;
