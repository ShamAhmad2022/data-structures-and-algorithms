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
      return 'empty array';
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

}


const ll = new LinkedList();
ll.append('Andrew');
ll.append(2);
ll.append(55);
ll.append(6);
ll.append('MGNT');


// console.log(ll);

ll.insertBeforeValue('Ben','Andrew');

ll.insertAfterValue(555,55);

// console.log(ll.include(55));


console.log(ll.toString());

console.log(ll.kthfromend(7));


module.exports = LinkedList;
