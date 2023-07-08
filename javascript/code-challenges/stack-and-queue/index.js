'use strict';

const Stack = require("./stack");

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack);

stack.pop();

console.log(stack);

console.log(stack.peek());

//queue

const Queue = require('./queue');

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue);

queue.dequeue();

console.log(queue);
