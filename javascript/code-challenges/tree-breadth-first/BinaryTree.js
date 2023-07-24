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

  findMax() {
    if (this.root === null) return null;

    let max = this.root.value;

    const findMaxValue = (node) => {
      if (node === null) return;

      if (node.value > max) max = node.value;

      findMaxValue(node.left);
      findMaxValue(node.right);
    };

    findMaxValue(this.root);
    return max;
  }

}


function breadthFirst(tree){

  const root= tree.root;

  const arr = [];
  const arr2 = [root];

  while (arr2.length) {
    const node = arr2.shift();

    arr.push(node.value);
    if (node.left) arr2.push(node.left);
    if (node.right) arr2.push(node.right);
  }

  return arr;

}


const two = new Node(2);
const seven = new Node(7);
const five = new Node(5);
const two2 = new Node(2);
const six = new Node(6);
const nine = new Node(9);
const five2 = new Node(5);
const eleven = new Node(11);
const four = new Node(4);

two.left = seven;
two.right = five;

seven.left = two2;
seven.right = six;

five.right = nine;

six.left = five2;
six.right = eleven;

nine.left = four;


const tree = new BinaryTree(two);

console.log(tree);
// console.log('--------------');
// console.log(tree.preOrder());
// console.log('--------------');
// console.log(tree.inOrder());
// console.log('--------------');
// console.log(tree.postOrder());
console.log('--------------');
console.log(tree.findMax());
console.log('--------------');
console.log(breadthFirst(tree));
console.log('==========================');

//Binary Search Tree
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

  findMaxBST() {
    let currentNode = this.root;

    if(currentNode === null) return null;

    let max=this.root.value;

    while (currentNode) {
      if (currentNode.value > max) max=currentNode.value ;
      currentNode = currentNode.right;
    }
    return max;
  }

}

const tree2 = new BinarySearchTree();
tree2.add(1);
tree2.add(2);
tree2.add(16);
tree2.add(0);
tree2.add(23);
tree2.add(22);
tree2.add(7);
// tree2.add(4);
// tree2.add(5);

console.log(tree2);
console.log('------------------');
console.log(tree2.contains(2));
console.log('------------------');
console.log(tree2.findMax());


module.exports = BinaryTree;
module.exports = BinarySearchTree;
