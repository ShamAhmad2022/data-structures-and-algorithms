'use strict';

class PseudoQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  length() {
    return this.stack1.length;
  }

  enqueue(value) {
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }
    this.stack1.push(value);
    while (this.stack2.length > 0) {
      this.stack1.push(this.stack2.pop());
    }
  }

  dequeue() {
    if (this.stack1.length === 0) return 'Queue is empty';
    return this.stack1.pop();
  }

  isEmpty() {
    return this.stack1.length === 0;
  }

  peek() {
    if (this.stack1.length === 0) return null;
    return this.stack1[this.stack1.length - 1];
  }

}

const queue = new PseudoQueue();

console.log(queue.isEmpty()); // true

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.length()); // 3
console.log(queue.peek()); // 10

console.log(queue.dequeue()); // 10
console.log(queue.dequeue()); // 20

console.log(queue.length()); // 1
console.log(queue.isEmpty()); // false
console.log(queue.peek()); // 30

module.exports = PseudoQueue;
