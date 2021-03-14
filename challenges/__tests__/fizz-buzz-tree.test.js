'use strict';


const fizzBuzztree = require('../fizzBuzzTree/fizz-buzz-tree.js');


describe('functionality of the fizzbuzz tree', () =>{
  test('should change the value of the node', () => {

    let tree = new fizzBuzztree.BinaryTree();
    tree.root = new fizzBuzztree.Node(15);
    tree.root.left = new fizzBuzztree.Node(3);
    tree.root.right = new fizzBuzztree.Node(5);
    tree.root.right.left = new fizzBuzztree.Node(17);
    let newTree = fizzBuzztree.fizzBuzztree(tree);
    // let newValue = newTree();

    expect(newTree).toEqual('fizzbuzz', 'fizz', 'buzz');
  });
});
