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
    }string += '{null}';
    // console.log(string);

    return string;
  }
  getKthElement(head, k){
    if(!head || k<1){
      return null;
    }
    let current = this.head;
    let nthlastCurrent = this.head;

    for (let i=0; i<k - 1; i++){
      current = current.next;
      if(nthlastCurrent === null){
        return null;
      }
      nthlastCurrent = nthlastCurrent.next;
    }

    while( nthlastCurrent.next !== null ){
      nthlastCurrent = nthlastCurrent.next;
      current = current.next;
    }
    return nthlastCurrent.value;
  }

  append(value) {
    let current = this.head;
    while (current) {
      if (current.next === null) {
        current.next = new Node(value);
        return;
      }
      current = current.next;
    }
  }

  insertBefore(value, newVal) {
    let current = this.head;
    let newNode = new Node(newVal);
    while (current.next !== null) {
      if (current.value === value) {
        newNode.next = current;
        this.head = newNode;
      } else if (current.next.value === value) {
        let temp = current.next;
        current.next = newNode;
        newNode.next = temp;
      }
      current = current.next;
    }
  }

  insertAfter(value, newVal) {
    let current =this.head;
    let newNode = new Node(newVal);
    while (current) {
      if (current.value === value) {
        let temp = current.next;
        // console.log(temp);
        current.next = newNode;
        newNode.next = temp;
      }
      current = current.next;
    }
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

