const PseudoQueue = require('../PseudoQueue');

describe('Queue testing', () => {
  it('Can successfully enqueue into a queue', () => {
    let queue = new PseudoQueue();

    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);

    expect(queue.length()).toBe(3);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.peek()).toBe(10);
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    let queue = new PseudoQueue();

    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);

    expect(queue.dequeue()).toBe(10);
    expect(queue.dequeue()).toBe(20);
    expect(queue.length()).toBe(1);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.peek()).toBe(30);
  });

  it('Calling dequeue or peek on empty queue raises exception', () => {
    let queue = new PseudoQueue();
    expect(queue.dequeue()).toBeNull;
  });

  it('Calling dequeue or peek on empty queue raises exception', () => {
    let queue = new PseudoQueue();
    expect(queue.peek()).toBeNull;
  });
});
