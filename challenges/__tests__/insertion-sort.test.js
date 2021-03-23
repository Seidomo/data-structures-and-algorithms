const insertionSort = require('../insertionSort/insertion-sort.js');

describe('Testing insertion sort function', () => {
  test ('should sort in the array  ascending order', () => {
    let arr = [1,4,7,2,5,3,6];
    let test = insertionSort(arr);
    expect(test).toEqual([1,2,3,4,5,6,7]);
  });
  test ('should sort reversed in the array ascending order', () => {
    let arr = [12,4,9,11,17];
    let test = insertionSort(arr);
    expect(test).toEqual([4,9,11,12,17]);
  });
  test ('should sort uniques in the array ascending order', () => {
    let arr = [6,1,9,6,6,9];
    let test = insertionSort(arr);
    expect(test).toEqual([1,6,6,6,9,9]);
  });
  test ('should sort a sorted array in ascending order', () => {
    let arr = [2,3,5,7,13,11];
    let test = insertionSort(arr);
    expect(test).toEqual([2,3,5,7,11,13]);
  });
 
});
