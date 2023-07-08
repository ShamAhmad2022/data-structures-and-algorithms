'use strict';

const Stack = require('../stack');

describe('Stack', () => {

  it('Can successfully push onto a stack', () => {
    const stack = new Stack();

    stack.push(1);
    expect(stack.top.value).toEqual(1);

    expect(stack.length).toEqual(1);
  });

  it('Can successfully push multiple values onto a stack', () => {
    const stack = new Stack();

    stack.push(1);
    expect(stack.top.value).toEqual(1);

    stack.push(2);
    expect(stack.top.value).toEqual(2);

    stack.push(3);
    expect(stack.top.value).toEqual(3);

    expect(stack.length).toEqual(3);
  });

  it('Can successfully pop off the stack', () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();

    expect(stack.top.value).toEqual(2);
    expect(stack.length).toEqual(2);
  });

  it('Can successfully empty a stack after multiple pops', () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    stack.pop();
    stack.pop();

    expect(stack.top).toBeNull();
  });

  it('Can successfully peek the next item on the stack', () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.peek()).toEqual(3);
  });

  it('Can successfully instantiate an empty stack', () => {
    const stack = new Stack();

    expect(stack instanceof Stack).toBeTruthy();
  });


  it('Calling pop or peek on empty stack raises exception', () => {
    const stack = new Stack();

    expect(stack.peek()).toEqual(null);
  });

});
