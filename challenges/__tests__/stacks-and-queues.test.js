/* eslint-disable new-cap */
'use strict';


const stacks = require('../stacksAndQueues/stacks-and-queues.js');

describe('Testing basic stacks functionality', () => {
  const stack = new stacks.stack;
  const nodeA = new stacks.node('audi');
  const nodeB = new stacks.node('ford');

  test('If successfully push onto a stack', () => {
    stack.push(nodeA);

    expect(stack.top.value).toEqual('audi');
  });

  test('If successfully push multiple values onto a stack', () => {
    stack.push(nodeA);
    stack.push(nodeB);

    expect(stack.top.value).toEqual('ford');

  });

  test('If successfully pop off the stack', () => {
    stack.push(nodeA);
    stack.push(nodeB);

    expect(stack.pop()).toEqual('ford');
  });
  test('If successfully peek the next item on the stack', () => {
    stack.push(nodeA);

    expect(stack.peek()).toEqual(stack.top.value);
  });

  test('If successfully instantiate an empty stack', () => {
    const stack = new stacks.stack;

    expect(stack.isEmpty()).toBeTruthy();
  });

  test('If calling pop or peek on empty stack raises exception', () => {
    const stack = new stacks.stack;

    expect(stack.isEmpty()).toBeTruthy();
    expect(() => stack.pop()).toThrow('null');
    expect(() => stack.peek()).toThrow('null');
  });
});


describe('Testing basic queue functionality', () => {
  const queueVal = new stacks.queue;
  const nodeA = new stacks.node('audi');
  const nodeB = new stacks.node('ford');

  test('If successfully enqueue into a queue', () => {
    queueVal.enqueue(nodeA);

    expect(queueVal.front.value).toEqual('audi');
  });

  test('If successfully enqueue multiple values into a queue', () => {
    queueVal.enqueue(nodeA);
    queueVal.enqueue(nodeB);

    expect(queueVal.front.value).toEqual('audi');
    expect(queueVal.front.next.value).toEqual('ford');
  });

  test('If successfully dequeue out of a queue the expected value', () => {

    expect(queueVal.dequeue()).toEqual('audi');
  });

  test('If successfully peek into a queue, seeing the expected value', () => {

    expect(queueVal.peek()).toEqual(queueVal.front.value);
  });

  test('If successfully empty a queue after multiple dequeues', () => {
    queueVal.enqueue(nodeA);
    queueVal.dequeue();
    queueVal.dequeue();

    expect(queueVal.isEmpty()).toBeTruthy();
  });

  test('If successfully instantiate an empty queue', () => {
    const queueVal = new stacks.queue;

    expect(queueVal.isEmpty()).toBeTruthy();
  });

  test('If calling dequeue or peek on empty queue raises exception', () => {

    expect(queueVal.isEmpty()).toBeTruthy();
    expect(() => queueVal.dequeue()).toThrow('error');
    expect(() => queueVal.peek()).toThrow('error');
  });
});
