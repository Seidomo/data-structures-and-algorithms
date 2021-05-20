'use strict';

const repeat = require('../repeatdWord/repeated-word.js');

describe('Testing merge sort function', () => {
  const p1 = 'Once upon a time, there was a brave princess who...';
  const p2 = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
  const p3 = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';

  it ('should return the first word to occur more than once in the provided string', () => {
    let test = repeat(p1);
    expect(test).toEqual('a');
  });

  it ('should return the first word to occur more than once in the provided string', () => {
    let test = repeat(p2);
    expect(test).toEqual('it');
  });

  it ('should return the first word to occur more than once in the provided string', () => {
    let test = repeat(p3);
    expect(test).toEqual('summer');
  });
});
