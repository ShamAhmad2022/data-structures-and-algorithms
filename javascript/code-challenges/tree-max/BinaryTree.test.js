'use strict';

const BinarySearchTree = require('./BinaryTree');

let tree = null;

describe('binary search tree findMax method tests', () => {
  beforeAll(() => {

    tree = new BinarySearchTree();
    tree.add(1);
    tree.add(2);
    tree.add(16);
    tree.add(0);
    tree.add(23);
    tree.add(22);
    tree.add(7);

  });

  it('check if the findMax method works properly, return the right value', () => {
    expect(tree.findMax()).toEqual(23);
  });

  it('findMax return the only value when there\'s no other value', () => {
    let tree = new BinarySearchTree();
    tree.add(1);
    expect(tree.findMax()).toEqual(1);
  });

  it('findMax method return null when the tree is empty', () => {
    let tree = new BinarySearchTree();
    expect(tree.findMax()).toBeNull();
  });

});
