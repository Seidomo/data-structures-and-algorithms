'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(node) {
    if (this.isEmpty()) {
      this.top = node;
      return;
    } else {
      node.next = this.top;
      this.top = node;
    }
  }

  pop() {
    if (this.isEmpty()) {
      throw 'Error';
    } else {
      let temp = this.top;
      this.top = temp.next;
      temp.next = null;
      return temp;
    }
  }

  peek() {
    if (this.isEmpty()) {
      throw 'Error';
    } else {
      return this.top.value;
    }
  }

  isEmpty() {
    return this.top === null;
  }
}

class PseudoQueue {
  constructor() {
    this.front = new Stack();
    this.rear = new Stack();
  }

  enqueue(node) {
    this.rear.push(node);
  }

  dequeue() {
    if (this.front.isEmpty()) {
      while(!this.rear.isEmpty()) {
        this.front.push(this.rear.pop());
      }
    }
    return this.front.pop();
  }
}

module.exports = {
  node: Node,
  stack: Stack,
  queue: PseudoQueue,
};
