'use strict';



const binarySearch = require('../arrayBinarySearch/array-binary-search.js');

describe('test should check if the given number was found by binary search', ()=>{
    test('should find the index of the given value using binary search', ()=>{
        const binaryIndex = binarySearch([4,8,15,16,23,42], 15);
        expect(binaryIndex).toEqual(2);

    })
})