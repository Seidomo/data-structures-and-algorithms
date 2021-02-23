'use strict';

const arrayReverse = require('../array-reverse.js');


describe('test the array reverse module', () =>{
  test('should return an array with reversed elements', () =>{
    const reversedArray = arrayReverse ([1, 2, 3, 4, 5, 6]);
    expect(reversedArray).toEqual([6, 5, 4, 3, 2, 1]);
  });
});

