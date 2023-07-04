'use strict';

const LinkedList= require('../LinkedList');

describe('linked list test', () => { 
  it('return a warning if both linkedlist were empty', ()=>{
    const ll1 = new LinkedList();
    const ll2 = new LinkedList();
    let zippedList = ll1.zip(ll1, ll2);
    expect(zippedList).toEqual('both linked lists are empty');
  });

  it('if one of the linked lists is empty', ()=>{
    const ll1 = new LinkedList();
    ll1.append(1);
    ll1.append(2);
    ll1.append(3);
    const ll2 = new LinkedList();
    let zippedList = ll1.zip(ll1, ll2);
    expect(zippedList.length).toEqual(ll1.length);
  });

  it('if both linked lists are valid', ()=>{
    const ll1 = new LinkedList();
    ll1.append(1);
    ll1.append(2);
    ll1.append(3);
    const ll2 = new LinkedList();
    ll1.append(4);
    ll1.append(5);
    ll1.append(6);
    let zippedList = ll1.zip(ll1, ll2);
    expect(zippedList.length).toEqual(ll1.length+ll2.length);
  });

 
});
