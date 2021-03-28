'use strict';

const hash = require('../hashtable/hashtable.js');

describe('testing hash tables', () => {
  let table = new hash.HashTable(1024);

  test('should successfully add a key/value to the hashtable', () => {
    table.add('dog', 'bode');
    table.add('cat', 'ginger');
    table.add('bear', 'beary');

    expect(table.contains('dog')).toEqual(true);
  });

  test('retrieving based on a key returns the value stored', () => {
    table.add('dog', 'bode');
    table.add('cat', 'ginger');
    table.add('bear', 'beary');

    expect(table.get('dog')).toEqual('bode');
  });

  test('successfully returns false for a key that does not exist in the hashtable', () => {
    table.add('dog', 'bode');
    table.add('cat', 'ginger');
    table.add('bear', 'beary');

    expect(table.contains('giraffe')).toEqual(false);
  });

  test('successfully handles a collision within the hash table', () => {
    table.add('dog', 'bode');
    table.add('cat', 'ginger');
    table.add('dog', 'rossi');

    expect(table.add('dog', 'rossi')).toEqual(undefined);
  });

  test('successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    table.add('dog', 'bode');
    table.add('cat', 'ginger');
    table.add('dog', 'rossi');

    expect(table.get('dog')).toEqual('bode');
  });

  test('Successfully hash a key to an in-range value', () => {
    const hash = table.hash('test');

    expect(hash).toBeLessThanOrEqual(1024);
  });
});
