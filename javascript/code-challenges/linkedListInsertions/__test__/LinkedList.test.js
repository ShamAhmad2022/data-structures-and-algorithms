'use strict';

const LinkedList= require('../LinkedList');

describe('linked list test', () => { 
  it('Can successfully add a node to the end of the linked list', ()=>{
    const ll = new LinkedList();
    ll.append(1);
    expect(ll.head).not.toBeNull();
    expect(ll.head.next).toBeNull();
  });

  it('Can successfully add multiple nodes to the end of a linked list', ()=>{
    const ll = new LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    expect(ll.head.next.next.value).toEqual(3);
  });

  it('Can successfully insert a node before a node located i the middle of a linked list', ()=>{
    const ll = new LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(4);
    ll.insertBeforeValue(3,4);
    expect(ll.head.next.next.value).toEqual(3);
    expect(ll.head.next.next.next.value).toEqual(4);
  });
  
  it('Can successfully insert a node before the first node of a linked list', ()=>{
    const ll = new LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.insertBeforeValue(0,1);
    expect(ll.head.value).toEqual(0);
    expect(ll.head.next.value).toEqual(1);
  });

  it('Can successfully insert after a node in the middle of the linked list', ()=>{
    const ll = new LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(4);
    ll.insertAfterValue(3,2);
    expect(ll.head.next.value).toEqual(2);
    expect(ll.head.next.next.value).toEqual(3);
  });

  it('Can successfully insert a node after the last node of the linked list', ()=>{
    const ll = new LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.insertAfterValue(4,3);
    expect(ll.head.next.next.value).toEqual(3);
    expect(ll.head.next.next.next.value).toEqual(4);
  });

});
