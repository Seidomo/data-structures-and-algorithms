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
      Node.next = this.top;
      this.top = node;
    }
    this.top;
  }
  pop() {
    let temp = this.top;
    this.top = temp.next;
    temp.next = null;
    return temp.value;
  }
  isEmpty(){
    return this.top === null;
  }
  peek(){
    if (this.top) return this.top.value;

    throw 'null';


  }
}
class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }
  enqueue(node) {
    if (this.isEmpty()) {
      this.font = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
  }
  dequeue() {
    let temp = this.front;
    this.front = temp.next;
    temp.next = null;
    return temp.value;
  }
  isEmpty(){
    return this.front === null;
  }
  peek(){
    if(this.isEmpty()){
      throw 'error';

    }
    return this.front.value;
  }



}
let stack = new Stack();
let nodeA = new Node('first');
let nodeB = new Node('second');



stack.push(nodeA);
stack.push(nodeB);

let top = stack.pop();
console.log(top);
let queue = new Queue();

queue.enqueue(nodeA);
queue.enqueue(nodeB);
console.log(queue);
