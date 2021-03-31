
'use strict';


class Node{

  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


class Tree {

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

let root1 = new Tree();
root1.root = new Node(50);
root1.root.left = new Node(100);
root1.root.left.left = new Node(150);
root1.root.left.right = new Node(200);
root1.root.left.right.left = new Node(250);
root1.root.left.right.right = new Node(300);
root1.root.right = new Node(350);
root1.root.right.left = new Node(400);
root1.root.right.right = new Node(450);
root1.root.right.right.left = new Node(500);
root1.root.right.right.right = new Node(550);

let root2 = new Tree();
root2.root = new Node(50);
root2.root.left = new Node(100);
root2.root.left.left = new Node(120);
root2.root.left.right = new Node(180);
root2.root.left.right.left = new Node(200);
root2.root.left.right.right = new Node(300);
root2.root.right = new Node(330);
root2.root.right.left = new Node(400);
root2.root.right.right = new Node(410);
root2.root.right.right.left = new Node(490);
root2.root.right.right.right = new Node(500);

console.log(findCommon(root1, root2));

module.exports = {
  Node,
  Tree,
  findCommon
};



