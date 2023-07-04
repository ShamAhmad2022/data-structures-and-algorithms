'use strict';

const LinkedList= require('../LinkedList');

describe('linked list test', () => { 
  it('k is greater than the length of the linked list', ()=>{
    const ll = new LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.append(4);
    expect(ll.kthfromend(9)).toBeNull();
  });

  it('k and the length of the list are the same', ()=>{
    const ll = new LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.append(4);
    expect(ll.kthfromend(4)).toEqual(ll.head.value);
  });

  it('k is not a positive integer', ()=>{
    const ll = new LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.append(4);
    expect(ll.kthfromend(-2)).toBeNull();
  });

  it('the linked list is of a size 1', ()=>{
    const ll = new LinkedList();
    ll.append(1);
    expect(ll.kthfromend(1)).toEqual(ll.head.value);
  });

  it('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', ()=>{
    const ll = new LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.append(4);
    expect(ll.kthfromend(2)).toEqual(ll.head.next.value);
  });

});
