'use strict';

const Node = require('./Node');
const BinaryTree = require('./BinaryTree');
const BinarySearchTree = require('./BinaryTree');

let tree = null;

describe('binary search tree tests', () => {
  beforeAll(() => {

    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const six = new Node(6);

    one.left = two;
    one.right = three;

    two.left = four;
    two.right = five;

    three.left = six;


    tree = new BinaryTree(one);

  });

  it('Can successfully instantiate an empty tree', () => {
    const tree = new BinaryTree();
    expect(tree.root).toBeNull();
  });


  it('Can successfully instantiate a tree with a single root node', () => {
    const tree = new BinarySearchTree();
    tree.add(1);
    expect(tree.root.value).toEqual(1);
  });

  it('For a Binary Search Tree, can successfully add a left child and right child properly to a node', () => {
    const tree = new BinarySearchTree();
    tree.add(5);
    tree.add(6);
    tree.add(4);
    expect(tree.root.left.value).toEqual(4);
    expect(tree.root.right.value).toEqual(6);
  });

  it('Can successfully return a collection from a pre-order traversal', () => {
    const expectedResult = [ 1, 2, 4, 5, 3, 6 ];
    expect(tree.preOrder()).toEqual(expectedResult);
  });

  it('Can successfully return a collection from an in-order traversal', () => {
    const expectedResult = [ 4, 2, 5, 1, 6, 3 ];
    expect(tree.inOrder()).toEqual(expectedResult);
  });

  it('Can successfully return a collection from a post-order traversal', () => {
    const expectedResult = [ 4, 5, 2, 6, 3, 1 ];
    expect(tree.postOrder()).toEqual(expectedResult);
  });

  it('Returns true	false for the contains method, given an existing or non-existing node value', () => {
    const tree = new BinarySearchTree();
    tree.add(5);
    tree.add(6);
    tree.add(4);
    expect(tree.contains(5)).toEqual(true);
    expect(tree.contains(8)).toEqual(false);
  });

});
