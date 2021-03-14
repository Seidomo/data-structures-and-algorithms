'use strict';


class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree{
  constructor(val){
    this.root = null;
    this.val = val;
  }
}

function fizzBuzztree(tree){
  let newTree = new BinaryTree();
  newTree.root = fizzBuzzRecursion(tree.root);
  return newTree;
}

function fizzBuzzRecursion(root){
  let newNode;
  if(root.value % 15 === 0){
    newNode = new Node('fizzbuzz');

  }else if (root.value % 3 === 0){
    newNode = new Node('fizz');
  }else if(root.value % 5 === 0){
    newNode = new Node('buzz');
  }

  else{
    newNode = new Node(`${root.value}`);
  }

  if(root.left){
    newNode.left = fizzBuzzRecursion(root.left);
  }

  if(root.right){
    newNode.right = fizzBuzzRecursion(root.right);
  }

  return newNode;
}



module.exports = {
  fizzBuzztree: fizzBuzztree,
  Node: Node,
  BinaryTree: BinaryTree,

};
