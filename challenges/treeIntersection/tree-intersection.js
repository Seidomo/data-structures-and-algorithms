
'use strict';


class Node{

  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


class BinaryTree {

  constructor() {
    this.root = null;
  }
}



function findCommon(root1, root2) {


  let hash = {};

  const preOrder = (tree) => {
    let array = [];
    const preOrderHelper = (node) => {
      if(hash[node.value]){
        array.push(node.value);
      }else{
        hash[node.value] = node.value;
      }
      if (node.left) {
        preOrderHelper(node.left);
      }
      if (node.right) {
        preOrderHelper(node.right);
      }
    };
    let current = tree.root;
    preOrderHelper(current);
    return array;
  };
  preOrder(root1);
  return preOrder(root2);




}

module.exports = {
  Node,
  BinaryTree,
  findCommon
};



