'use strict';

const brackets = require('../multiBracketValidation/multi-bracket-validation.js');


describe('test should check if the bracket is true or false', () =>{
  test('should return true if the brackets match', () =>{
    const test = brackets('[]');
    expect(test).toBe(true);
  } );
  test('should return false if the brackets dont match', () =>{
    const test = brackets('[)');
    expect(test).toBe(false);
  } );
  test('should return true even if it has character in the brackets', () =>{
    const test = brackets('( codeFellows )');
    expect(test).toBe(true);
  } );
  test('should return false if it has character and the brackets dont match', () =>{
    const test = brackets('[ code )');
    expect(test).toBe(false);
  } );

});
