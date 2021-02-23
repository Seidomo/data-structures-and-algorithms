'use strict';


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let current = this.head;
    let newNode = new Node(value);
    if (!current) {
      this.head = newNode;
    } else {
      newNode.next = current;
      this.head = newNode;
    }
  }

  includes(value) {
    let current = this.head;
    while (current) {
      if (value === current.value) { return true; }
      else if (current.next === null) { return false; }
      else { current = current.next; }
    }
  }

  toString() {
    let current = this.head;
    let string = '';
    while (current) {
      const currentNode = current.value;
      current = current.next;
      string += `{ ${currentNode} } -> `;
    }string += '{NULL}';
    // console.log(string);
  
    return string;
  }

  
}

// const linkList = new LinkdenList();


// linkList.head = new Node(6);
// linkList.head.next = new Node(9);
// linkList.head.next.next = new Node(4);

// linkList.insert(7);
// linkList.include(8);



module.exports = {
  node: Node,
  ll: LinkedList,
};

