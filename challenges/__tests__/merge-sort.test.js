'use strict';


const mergeSort = require('../mergeSort/merge-sort.js');


describe('Testing merge sort function', () => {
  it ('should sort the array in ascending order', () => {
    let arr = [ 1,5,3,9,6,8];
    let test = mergeSort(arr);
    expect(test).toEqual([1,3,5,6,8,9]);
  });
  it ('should sort a reverse sorted array in ascending order', () => {
    let arr = [12,4,9,11,17];
    let test = mergeSort(arr);
    expect(test).toEqual([4,9,11,12,17]);
  });
  it ('should sort a few uniques array in ascending order', () => {
    let arr = [6,1,9,6,6,9];
    let test = mergeSort(arr);
    expect(test).toEqual([1,6,6,6,9,9]);
  });
  it ('should finish sorting a nearly sorted array in ascending order', () => {
    let arr = [2,3,5,7,13,11];
    let test = mergeSort(arr);
    expect(test).toEqual([2,3,5,7,11,13]);
  });
});
