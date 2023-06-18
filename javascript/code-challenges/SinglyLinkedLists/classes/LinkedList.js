'use strict';

const Node = require('./Node');

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertAtEnd(data) {
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


  insertAtFirst(data) {
    this.head = new Node(data, this.head);
    this.length++;
  }

}


const ll = new LinkedList();
// ll.insertAtFirst(2);
// ll.insertAtFirst(1);
// ll.insertAtEnd('Andrew');
// ll.insertAtEnd(2);
// ll.insertAtEnd(55);
// ll.insertAtEnd(6);
// ll.insertAtEnd('MGNT');


console.log(ll);

// console.log(ll.include(55));

console.log(ll.toString());



module.exports = LinkedList;
