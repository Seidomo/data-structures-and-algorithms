/* eslint-disable new-cap */
'use strict';


const trees = require('../treeIntersection/tree-intersection.js');

describe('testing finding common value in the tree ', () =>{

  let root1 = new trees.Tree();
  root1.root = new trees.Node(50);
  root1.root.left = new trees.Node(100);
  root1.root.left.left = new trees.Node(150);
  root1.root.left.right = new trees.Node(200);
  root1.root.left.right.left = new trees.Node(250);
  root1.root.left.right.right = new trees.Node(300);
  root1.root.right = new trees.Node(350);
  root1.root.right.left = new trees.Node(400);
  root1.root.right.right = new trees.Node(450);
  root1.root.right.right.left = new trees.Node(500);
  root1.root.right.right.right = new trees.Node(550);

  let root2 = new trees.Tree();
  root2.root = new trees.Node(50);
  root2.root.left = new trees.Node(100);
  root2.root.left.left = new trees.Node(120);
  root2.root.left.right = new trees.Node(180);
  root2.root.left.right.left = new trees.Node(200);
  root2.root.left.right.right = new trees.Node(300);
  root2.root.right = new trees.Node(330);
  root2.root.right.left = new trees.Node(400);
  root2.root.right.right = new trees.Node(410);
  root2.root.right.right.left = new trees.Node(490);
  root2.root.right.right.right = new trees.Node(500);


  test( 'should get an array of common values', () =>{

    let common = trees.findCommon(root1, root2);
    expect(common).toEqual([ 50, 100, 200, 300, 400, 500]);
  });


});
