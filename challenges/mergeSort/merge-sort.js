'use strict';


function mergeSort(arr) {


  let n = arr.length;
  if (n > 1) {
    let mid = n / 2;
    let left = arr.splice(0, mid);
    let right = arr.splice(0, arr.length);

    mergeSort(left);

    mergeSort(right);
    merge(left, right, arr);
    // console.log('left',left);
    // console.log('right',right);
  }

  return arr;

}


function merge(left, right, arr) {


  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }

    k++;
  }


  while (i < left.length) {
    arr[k] = left[i];
    i++;
    k++;


  }

  while (j < right.length) {
    arr[k] = right[j];
    j++;
    k++;
  }


}

console.log('its working',mergeSort([ 1,5,3,9,6,8]));


module.exports = mergeSort;

