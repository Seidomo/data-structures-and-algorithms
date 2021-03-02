/* eslint-disable new-cap */
'use strict';

const stacks = require('../queueWithStacks/queue-with-stacks.js');

describe('testing pseudoqueue functionality', () => {
  const pseudoQueue = new stacks.queue();
  const nodeA = new stacks.node('jeep');
  const nodeB = new stacks.node('ford');
  const nodeC = new stacks.node('prius');
  const nodeD = new stacks.node('audi');
  pseudoQueue.enqueue(nodeA);
  pseudoQueue.enqueue(nodeB);
  pseudoQueue.enqueue(nodeC);
  pseudoQueue.enqueue(nodeD);

  test('should insert value into the pseudoqueue', () => {
    expect(pseudoQueue.rear.top.value).toEqual('audi');
  });

  test('should extract value from the pseudoqueue', () => {
    pseudoQueue.dequeue();
    expect(pseudoQueue.dequeue().value).toEqual('ford');
  });
});