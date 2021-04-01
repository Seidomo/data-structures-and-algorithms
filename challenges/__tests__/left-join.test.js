'use strict';

const leftJoin = require('../leftJoin/left-join.js');

describe('testin leftJoin function', () => {

  it('should return similar keys', () => {


    let amharic = [
      { key: 'one', value: 'eins' },
      undefined,
      undefined,
      { key: 'two', value: 'zwei' },
      undefined,
      undefined,
      { key: 'three', value: 'drei' },
    ];
    let english = [
      { key: 'one', value: 'uno' },
      undefined,
      undefined,
      { key: 'two', value: 'dos' },
      undefined,
      undefined,
      { key: 'three', value: 'tres' },
    ];
    let joinedArray = leftJoin(amharic, english);

    expect(joinedArray).toEqual([


      { key: 'one', values: ['eins', 'uno'] },


      { key: 'two', values: ['zwei', 'dos'] },


      { key: 'three', values: ['drei', 'tres'] },

    ]);
  });
});
