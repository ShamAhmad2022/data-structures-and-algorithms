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

const tree = new BinaryTree(one);

console.log(tree);
console.log('--------------');
console.log(tree.preOrder());
console.log('--------------');
console.log(tree.inOrder());
console.log('--------------');
console.log(tree.postOrder());
console.log('==========================');


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

  findMax() {
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
