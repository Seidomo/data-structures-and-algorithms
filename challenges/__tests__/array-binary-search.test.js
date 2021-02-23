'use strict';

const binarySearch = require('../arrayBinarySearch/array-binary-search.js');


describe('test must find the value using binary search', () =>{
  test('should return a value using binary searcg', () =>{
    const searchedNumber = binarySearch ([4,8,15,16,23,42], 15);
    expect(searchedNumber).toEqual(2);
  });
});

