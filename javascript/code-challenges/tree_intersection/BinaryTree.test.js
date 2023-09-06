'use strict';

const Node = require('./Node');
const {BinaryTree} = require('./BinaryTree');
const {tree_intersection} = require('./BinaryTree');

let tree1 = null;
let tree2 = null;

describe('tree intersection function test', () => {
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

    tree1 = new BinaryTree(one);

    const thirtyThree = new Node(33);
    const seventyOne = new Node(71);
    const threeT2 = new Node(3);
    const ten = new Node(10);
    const fiveT2 = new Node(5);
    const nineteen = new Node(19);

    thirtyThree.left = seventyOne;
    thirtyThree.right = threeT2;

    seventyOne.left = ten;
    seventyOne.right = fiveT2;

    threeT2.left = nineteen;

    tree2 = new BinaryTree(thirtyThree);

  });

  it('the function work properly', () => {
    expect(tree_intersection(tree1, tree2)).toEqual([5,3]);
  });

  it('return empty array when there is none', () => {
    const tree3 = new BinaryTree();
    const tree4 = new BinaryTree();
    expect(tree_intersection(tree3, tree4)).toEqual([]);
  });

});
