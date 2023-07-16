'use strict';

const Node = require('./node');

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if(this.isEmpty()) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }

    this.length++;
  }

  pop() {
    if(this.isEmpty()) throw new Error('Stack is Empty');

    const temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.length--;

    return temp.value;
  }

  peek() {
    if(this.isEmpty()) return null;
    return this.top.value;
  }

  isEmpty() {
    if(this.top) return false;
    return true;
  }
}

function validateBrackets(str) {

  const stack = new Stack();

  const openingBrackets = ['(', '[', '{'];
  const closingBrackets = [')', ']', '}'];
  const allBrackets = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (let i = 0; i < str.length; i++) {

    const eachBrackit = str[i];

    if (openingBrackets.includes(eachBrackit)) stack.push(eachBrackit);
    else if (closingBrackets.includes(eachBrackit)) {
      const topBracket = stack.pop();

      if (topBracket !== allBrackets[eachBrackit]) return false;
    }
  }

  return stack.isEmpty();
}


const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack);
console.log('--------------');


console.log(validateBrackets('{)}'));

module.exports = Stack;
module.exports = validateBrackets;
