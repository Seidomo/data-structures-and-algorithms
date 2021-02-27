'use strict';

const {Stack} = require('../stacksAndQueues/stacks-and-queues.js');

describe('stack operation', () =>{
  test ('can succesfully push on stack', () =>{
    let myStack = new Stack();
    myStack.push('flowers');

    expect(myStack.isEmpty()).toBe(false);
    expect(myStack.peek()).toBe('flowers');
  });
  test ('can successfully add multiple nodes to the stack', () =>{
    let myStack = new Stack();

    myStack.push('Audi');
    myStack.push('Lambo');
    myStack.push('Lexus');
    myStack.push('Jeep');
    myStack.push('Ford');

    expect(myStack.isEmpty()).toBe(false);
    expect(myStack.peek()).toBe('ford');
  });
});
