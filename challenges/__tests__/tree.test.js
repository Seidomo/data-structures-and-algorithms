'use strict';

const binarySearchTree = require('../tree/tree.js');

describe('testing methods on both trees', () => {

  let trees = new binarySearchTree.BinaryTree();
  let tree = new binarySearchTree.Tree();
  let nodeA = new binarySearchTree.Node(1);
  let nodeB = new binarySearchTree.Node(2);
  let nodeC = new binarySearchTree.Node(3);
  tree.root = new binarySearchTree.Node(4);
  tree.root.right = nodeC;
  tree.root.left = nodeB;
  tree.root.right.right = nodeA;

  test('should successfully instantiate an empty trees', () => {
    expect(trees.root).toEqual(null);
  });

  test('should successfully instantiate with a single root node', () => {
    trees.add(2);

    expect(trees.root.value).toEqual(2);
    expect(trees.root.left).toEqual(null);
    expect(trees.root.right).toEqual(null);
  });

  test('should successfully return a collection from a preOrder traversal', () => {
    expect(tree.preOrder()).toEqual([4, 2, 3, 1]);
  });

  test('should successfully return a collection from a postOrder traversal', () => {
    expect(tree.postOrder()).toEqual([2, 1, 3, 4]);
  });

  test('should successfully return a collection from a inOrder traversal', () => {
    expect(tree.inOrder()).toEqual([2, 4, 3, 1]);
  });

  test('should successfully determine with a boolean if a value is in a the Tree', () => {
    expect(trees.contains(5)).toEqual(false);
    expect(trees.contains(2)).toEqual(true);
  });

  test('should successfully find the maximum value in a Binary Tree', () => {
    expect(tree.maxValue()).toEqual(4);
  });
});

///////////////////////////////////////////////////////////////////////////////////
