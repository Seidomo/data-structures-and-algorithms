'use strict';

/**
 * Kary Tree stuff
 */

// class KaryNode {
//   constructor(value, size) {
//     this.value = value;
//     this.children = new Array(size);
//   }
// }

// class KaryTree {
//   constructor(k) {
//     this.root = null;
//     this.k = k;
//   }

//   breadth() {

//     let current = null;
//     let queue = [];

//     queue.unshift(this.root);

//     while (queue.length) {

//       current = queue.pop();
//       console.log(current.value);

//       for (let i = 0; i < current.children.length; i++) {
//         if (current.children[i]) {
//           queue.unshift(current.children[i]);
//         }
//       }
//     }

//   }
// }


/**
 * Normal Tree stuff!
 */
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }


  preOrder() {

    let current = this.root;
    const arr = [];
    const preOrder = (node) => {
      arr[arr.length] = node.value;
      if (node.left) { preOrder(node.left); }
      if (node.right) { preOrder(node.right); }
    };

    preOrder(current);
    return arr;


  }

  postOrder() {

    let current = this.root;
    const arr = [];
    const postOrder = (node) => {
      if (node.left) { postOrder(node.left); }
      if (node.right) { postOrder(node.right); }
      arr[arr.length] = node.value;
    };

    postOrder(current);
    return arr;


  }


  inOrder() {

    let current = this.root;
    const arr = [];
    const inOrder = (node) => {
      if (node.left) { inOrder(node.left); }
      arr[arr.length] = node.value;
      if (node.right) { inOrder(node.right); }
    };

    inOrder(current);
    return arr;


  }


  maxValue() {
    let current = this.root;
    if (!current) { throw 'error'; }

    const findMax = (node) => {
      if (!node) { return; }
      let value = node.value;
      let leftValue = findMax(node.left);
      let rightValue = findMax(node.right);
      if (leftValue > value) { value = leftValue; }
      if (rightValue > value) { value = rightValue; }
      return value;
    };
    return findMax(current);
  }


}



class BinaryTree{
  constructor(){
    this.root = null;
  }


  add(value) {
    let current = this.root;
    let newNode = new Node(value);

    if (!current) { return this.root = newNode; }

    const insertNode = (node, newNode) => {
      if (newNode.value < node.value) {
        if (!node.left) { node.left = newNode; }
        else { insertNode(node.left, newNode); }
      } else {
        if (!node.right) { node.right = newNode; }
        else { insertNode(node.right, newNode); }
      }
    };

    insertNode(current, newNode);
  }

  inOrder() {
    let current = this.root;
    const arr = [];
    const inOrder = (node) => {
      if (node.left) { inOrder(node.left); }
      arr[arr.length] = node.value;
      if (node.right) { inOrder(node.right); }
    };

    inOrder(current);
    return arr;
  }

  contains(value) {
    let current = this.root;
    const map = {};
    const inOrder = (node) => {
      if (node.left) { inOrder(node.left); }
      map[node.value] = node.value;
      if (node.right) { inOrder(node.right); }
    };
    inOrder(current);
    return !!(map[value]);
  }


}

// const trees = new BinaryTree();
// const tree = new Tree();

// tree.root = new Node(1);
// tree.root.left = new Node(2);
// tree.root.left.left = new Node(3);
// tree.root.left.right = new Node(4);
// tree.root.right = new Node(5);
// tree.root.right.right = new Node(6);

// trees.add(1);
// trees.add(2);
// trees.add(3);
// trees.add(4);

// console.log(tree.preOrder());
// console.log(tree.postOrder());
// console.log(tree.inOrder());
// console.log(trees.inOrder());
// console.log(trees.contains(3));


// tree.traverse();
// tree.traverseWithStack();
// tree.breadth();

// const karyTree = new KaryTree(3);

// karyTree.root = new KaryNode(0, karyTree.k);
// karyTree.root.children[0] = new KaryNode(1, karyTree.k);
// karyTree.root.children[1] = new KaryNode(2, karyTree.k);
// karyTree.root.children[2] = new KaryNode(3, karyTree.k);
// karyTree.root.children[0].children[0] = new KaryNode(5, karyTree.k);

// karyTree.breadth();
module.exports = {
  Node,
  Tree,
  BinaryTree
};
