'use strict';

const insertShiftArray = require('../arrayShift/array-shift.js');


describe('test should check if anumber is added to the array', () =>{
  test('should return with a new number in the middle of the array', () =>{
    const newArray = insertShiftArray([2,4,6,8], 5);
    expect(newArray).toEqual([2,4,5,6,8]);
  } );
});
