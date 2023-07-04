'use strict';

const Node = require('./Node');

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(data) {
    let node = new Node(data);
    let current;

    // If empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.length++;
  }


  include(data) {
    let current = this.head;

    while (current) {
      if(current.value === data) return true;
      current = current.next;
    }

    return false;
  }

  toString(){
    if(this.length===0){
      return 'empty';
    }

    let current = this.head;
    let string= '';

    while (current) {
      string+='{'+current.value+'} -> ';
      current = current.next;
    }

    string+='null';
    return string;
  }

  insertBeforeValue(value, newValue) {
    let currentNode = this.head;
    let previousNode = null;

    while (currentNode !== null) {
      if (currentNode.value === newValue) {
        const newNode = new Node(value);

        if (previousNode === null) {
          this.head = newNode;
        } else {
          previousNode.next = newNode;
        }

        newNode.next = currentNode;

        return true;
      }

      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    return false;
  }

  insertAfterValue(value, newValue) {
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.value === newValue) {
        const newNode = new Node(value);

        newNode.next = currentNode.next;
        currentNode.next = newNode;

        return true;
      }

      currentNode = currentNode.next;
    }

    return false;
  }


  getLastValue() {
    let currentNode = this.head;

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    return currentNode.value;
  }


  kthfromend(k) {
    let currentNode = this.head;
    let count = 0;

    while (currentNode !== null) {
      count++;
      currentNode = currentNode.next;
    }

    if (k === 0) {
      return this.getLastValue();
    }

    if (k > count || k < 1) {
      return null;
    }

    currentNode = this.head;

    for (let i = 1; i < count - k; i++) {
      currentNode = currentNode.next;
    }

    return currentNode.value;
  }

  zip(ll1, ll2) {
    let current1 = ll1.head;
    let current2 = ll2.head;
    let list3 = new LinkedList();

    if(current1 === null && current2 === null){
      return 'both linked lists are empty';
    }

    while (current1 !== null && current2 !== null) {
      list3.append(current1.value);
      list3.append(current2.value);
      current1 = current1.next;
      current2 = current2.next;
    }

    while (current1 !== null) {
      list3.append(current1.value);
      current1 = current1.next;
    }

    while (current2 !== null) {
      list3.append(current2.value);
      current2 = current2.next;
    }

    return list3;
  }


}


const ll = new LinkedList();
ll.append('Andrew');
ll.append(2);
// ll.append(55);
// ll.append(6);
// ll.append('MGNT');


// console.log(ll);

ll.insertBeforeValue('Ben','Andrew');

// ll.insertAfterValue(555,55);

// console.log(ll.include(55));


console.log(ll.toString());

// console.log(ll.kthfromend(7));

let ll2 = new LinkedList();
ll2.append(5);
ll2.append(55);
ll2.append(555);
console.log(ll2.toString());

let zippedList = ll.zip(ll, ll2);

console.log(zippedList.toString());

module.exports = LinkedList;
