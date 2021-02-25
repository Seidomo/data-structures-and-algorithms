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


}
function zipList(ll1, ll2) {
  const zippedList = new LinkedList();
  ll1 = ll1.head;
  ll2 = ll2.head;
  zippedList.head = new Node(ll1.value);
  ll1 = ll1.next;

  while (ll1 || ll2) {
    if (ll1 && ll2) {
      zippedList.append(ll2.value);
      zippedList.append(ll1.value);
      ll2 = ll2.next;
      ll1 = ll1.next;
    }
    else if (!ll1 && ll2) {
      zippedList.append(ll2.value);
      ll2 = ll2.next;
    }
    else if (ll1 && !ll2) {
      zippedList.append(ll1.value);
      ll1 = ll1.next;
    }
    else {
      return;
    }
  }
  zippedList.toString();
//   console.log(zippedList);
  return zippedList;
}
// const linkList = new LinkdenList();


// linkList.head = new Node(1);
// linkList.head.next = new Node(2);
// linkList.head.next.next = new Node(3);

// linkList.insert(4);
// linkList.include(5);



module.exports = {
  node: Node,
  ll: LinkedList,
  zipList : zipList,
};

