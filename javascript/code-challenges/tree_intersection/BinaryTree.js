'use stict';

const Node = require('./Node');

class BinaryTree{
  constructor(root=null){
    this.root=root;
  }

  //root, left, right
  preOrder(){
    const arr=[];

    const traversal = (node) =>{
      arr.push(node.value);
      if(node.left) traversal(node.left);
      if(node.right) traversal(node.right);
    };

    traversal(this.root);
    return arr;
  }

  //left, root, right
  inOrder(){
    const arr=[];

    const traversal = (node) =>{
      if(node.left) traversal(node.left);
      arr.push(node.value);
      if(node.right) traversal(node.right);
    };

    traversal(this.root);
    return arr;
  }

  //left, right, root
  postOrder(){
    const arr=[];

    const traversal = (node) =>{
      if(node.left) traversal(node.left);
      if(node.right) traversal(node.right);
      arr.push(node.value);
    };

    traversal(this.root);
    return arr;
  }

  add(value) {
    const newNode = new Node(value);

    if (this.root === null) this.root = newNode;

    const insertNode = (currentNode, newNode) => {
      if (newNode.value < currentNode.value) { //add to the left
        if (currentNode.left === null) currentNode.left = newNode;
        else insertNode(currentNode.left, newNode);
      } else { //add to the right
        if (currentNode.right === null) currentNode.right = newNode;
        else insertNode(currentNode.right, newNode);
      }

    };

    insertNode(this.root, newNode);
  }

}

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

const treetree1 = new BinaryTree(one);

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

const treetree2 = new BinaryTree(thirtyThree);

console.log('!!!!!!!! treetree1 !!!!!!!!');
console.log(treetree1);
console.log('--------------');
console.log(treetree1.preOrder());
console.log('--------------');
console.log(treetree1.inOrder());
console.log('--------------');
console.log(treetree1.postOrder());
console.log('==========================');

console.log('!!!!!!!! treetree2 !!!!!!!!');
console.log(treetree2);
console.log('--------------');
console.log(treetree2.preOrder());
console.log('--------------');
console.log(treetree2.inOrder());
console.log('--------------');
console.log(treetree2.postOrder());
console.log('==========================');

function tree_intersection(tree1, tree2) {
  const result = [];
  const traversal = (node1, node2) => {
    if (!node1 || !node2) return 'tree is empty';
    if (node1.value === node2.value) result.push(node1.value);
    traversal(node1.left, node2.left);
    traversal(node1.right, node2.right);
  };
  traversal(tree1.root, tree2.root);
  return result;
}

console.log(tree_intersection(treetree1, treetree2), '!!!!!!!!!!!!!!!!!');

class BinarySearchTree extends BinaryTree {
  constructor(root=null){
    super(root);
  }

  add(value) {
    const newNode = new Node(value);

    if (this.root === null) this.root = newNode;

    let currentNode = this.root;
    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          break;
        } else currentNode = currentNode.left;
      }
      else if (value > currentNode.value) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          break;
        } else currentNode = currentNode.right;
      }
      else break;
    }
  }


  contains(value) {
    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) return true;
      else if (value < currentNode.value) currentNode = currentNode.left;
      else currentNode = currentNode.right;
    }
    return false;
  }

}

const tree2 = new BinarySearchTree();
tree2.add(1);
tree2.add(2);
tree2.add(3);
// tree2.add(4);
// tree2.add(5);

console.log(tree2);
console.log('------------------');
console.log(tree2.contains(2));


module.exports = {BinaryTree, tree_intersection};
