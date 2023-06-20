'use strict';

const LinkedList= require('../Singly-LinkedList/LinkedList');

describe('successfully instantiate an empty linked list', () => { 
  it('create a linked list', ()=>{
    const ll = new LinkedList();
    expect(ll.head).toBeNull();
  });

  it('properly insert into the linked list at the end', ()=>{
    const ll = new LinkedList();
    ll.insertAtEnd(1);
    expect(ll.head).not.toBeNull();
  });

  it('properly insert into the linked list at the insert At the First', ()=>{
    const ll = new LinkedList();
    ll.insertAtFirst('code');
    expect(ll.head).not.toBeNull();
  });

  it('The head property will properly point to the first node in the linked list', ()=>{
    const ll = new LinkedList();
    ll.insertAtEnd(1);
    ll.insertAtEnd(2);
    ll.insertAtEnd(3);
    expect(ll.head.value).toEqual(1);
  });

  it('properly insert multiple nodes into the linked list', ()=>{
    const ll = new LinkedList();
    ll.insertAtEnd(100);
    ll.insertAtEnd('Andrew');
    ll.insertAtEnd(true);
    expect(ll.head.value).toEqual(100);
    expect(ll.head.next.value).toEqual('Andrew');
    expect(ll.head.next.next.value).toEqual(true);
  });

  it('return true when finding a value within the linked list that exists', ()=>{
    const ll = new LinkedList();
    ll.insertAtEnd(100);
    ll.insertAtEnd('Andrew');
    ll.insertAtEnd(true);
    expect(ll.include('Andrew')).toEqual(true);
  });

  it('return false when searching for a value in the linked list that does not exist', ()=>{
    const ll = new LinkedList();
    ll.insertAtEnd(100);
    ll.insertAtEnd('Andrew');
    ll.insertAtEnd(true);
    expect(ll.include(401)).toEqual(false);
  });

  it('properly return a collection of all the values that exist in the linked list', ()=>{
    const ll = new LinkedList();
    ll.insertAtEnd(100);
    ll.insertAtEnd('Andrew');
    ll.insertAtEnd(true);
    expect(ll.toString()).toEqual('{100} -> {Andrew} -> {true} -> null');
  });

});
