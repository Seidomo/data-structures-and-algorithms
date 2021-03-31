/* eslint-disable new-cap */
'use strict';


const trees = require('../treeIntersection/tree-intersection.js');

describe('testing tree intersection function', () =>{

  let root1 = trees.Tree();
  root1.root = trees.Node(50);
  root1.root.left = trees.Node(100);
  root1.root.left.left = trees.Node(150);
  root1.root.left.right = trees.Node(200);
  root1.root.left.right.left = trees.Node(250);
  root1.root.left.right.right = trees.Node(300);
  root1.root.right = trees.Node(350);
  root1.root.right.left = trees.Node(400);
  root1.root.right.right = trees.Node(450);
  root1.root.right.right.left = trees.Node(500);
  root1.root.right.right.right = trees.Node(550);

  let root2 = trees.Tree();
  root2.root = trees.Node(50);
  root2.root.left = trees.Node(100);
  root2.root.left.left = trees.Node(120);
  root2.root.left.right = trees.Node(180);
  root2.root.left.right.left = trees.Node(200);
  root2.root.left.right.right = trees.Node(300);
  root2.root.right = trees.Node(330);
  root2.root.right.left = trees.Node(400);
  root2.root.right.right = trees.Node(410);
  root2.root.right.right.left = trees.Node(490);
  root2.root.right.right.right = trees.Node(500);


  test( 'should get an array of common values', () =>{

    let common = trees.findCommon(root1, root2);
    expect(common).toEqual([ 50, 100, 200, 300, 400, 500]);
  });


});
