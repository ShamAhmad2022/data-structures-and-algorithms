'use strict';

const Queue = require('../queue');

describe('Queue', () => {

  it('Can successfully enqueue into a queue', () => {
    const queue = new Queue();

    queue.enqueue(1);
    expect(queue.front.value).toEqual(1);

    expect(queue.length).toEqual(1);
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    const queue = new Queue();

    queue.enqueue(1);
    expect(queue.rear.value).toEqual(1);

    queue.enqueue(2);
    expect(queue.rear.value).toEqual(2);

    queue.enqueue(3);
    expect(queue.rear.value).toEqual(3);

    expect(queue.length).toEqual(3);
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();

    expect(queue.front.value).toEqual(2);
    expect(queue.length).toEqual(2);
  });

  it('Can successfully peek the next item on the stack', () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.peek()).toEqual(1);
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();

    expect(queue.front).toBeNull();
  });


  it('Can successfully instantiate an empty queue', () => {
    const queue = new Queue();

    expect(queue instanceof Queue).toBeTruthy();
  });


  it('Calling dequeue or peek on empty queue raises exception', () => {
    const queue = new Queue();

    expect(queue.peek()).toEqual(null);
  });

});
