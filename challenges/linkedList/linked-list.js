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

  getKthElement(k){
    if(this.head ===null || k<1){
      return null;
    }
    let valueOne = this.head;
    let valueTwo = this.head;

    for (let i=0; i<k - 1; i++){

      if(valueTwo === null){
        return null;
      }
      valueTwo = valueTwo.next;
    }

    while( valueTwo.next !== null ){
      valueOne = valueOne.next;
      valueTwo = valueTwo.next;

    }
    return valueOne.value;
  }

  // zipList(ll1, ll2){
  //   let mergedList = new LinkedList();
  //   let l1Pointer = ll1;
  //   let l2Pointer = ll2;

  //   while(l1Pointer || l2Pointer){

  //     if(l1Pointer){
  //       mergedList.append(l1Pointer.newValue);
  //       l1Pointer = l1Pointer.next;

  //     }

  //     if(l2Pointer){
  //       mergedList.append(l2Pointer.newValue);
  //       l2Pointer = l2Pointer.next;

  //     }
  //   }

  //   return mergedList.head;

  // }

  

}
function zipList(listOne, listTwo) {
  const newll = new LinkedList();
  listOne = listOne.head;
  listTwo = listTwo.head;
  newll.head = new Node(listOne.value);
  listOne = listOne.next;

  while (listOne || listTwo) {
    if (listOne && listTwo) {
      newll.append(listTwo.value);
      newll.append(listOne.value);
      listTwo = listTwo.next;
      listOne = listOne.next;
    }
    else if (!listOne && listTwo) {
      newll.append(listTwo.value);
      listTwo = listTwo.next;
    }
    else if (listOne && !listTwo) {
      newll.append(listOne.value);
      listOne = listOne.next;
    }
    else {
      return;
    }
  }
  newll.toString();
  return newll;
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
  zipList : zipList,
};

