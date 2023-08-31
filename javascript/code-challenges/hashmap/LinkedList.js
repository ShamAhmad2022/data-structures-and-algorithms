'use strict';

const Node = require('./Node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new Node(value);
    if(!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while(current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  print() {
    let values = [];

    let current = this.head;
    while(current) {
      values.push(current.value);
      current = current.next;
    }

    return values;
  }

  isKeyExist(key){
    if (this.head === null) return false;

    let current = this.head;
    while (current) {
      // eslint-disable-next-line no-prototype-builtins
      if (current.value.hasOwnProperty(key)) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
}

let ll = new LinkedList();

ll.add({'name' : 'liam'});
ll.add({'age' : '33'});

// console.log(ll.isKeyExist('age'));

module.exports = LinkedList;
