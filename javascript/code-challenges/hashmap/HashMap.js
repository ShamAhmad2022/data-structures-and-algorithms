'use strict';

const LinkedList = require('./LinkedList');

class HashMap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) {
    let keyLetters = key.split('');

    let totalAsciiForEachLetter = keyLetters.reduce((acc, current) => {
      return acc + current.charCodeAt(0);
    },0);

    return totalAsciiForEachLetter * 599 % this.size;
  }

  set(key, value) {
    const hashedKey = this.hash(key);

    if(!this.map[hashedKey]) this.map[hashedKey] = new LinkedList();

    const entry = {[key] : value};
    this.map[hashedKey].add(entry);
  }

  has(key){
    return this.map.some(item => item.isKeyExist(key));
  }

  get(key) {
    let foundValue = 'key does not exist!!';

    this.map.forEach(item => {
      let current = item.head;
      while (current) {
        // eslint-disable-next-line no-prototype-builtins
        if (current.value.hasOwnProperty(key)) {
          foundValue = current.value[key];
          break;
        }
        current = current.next;
      }
    });

    return foundValue;
  }

  keys(){
    let array=[];
    this.map.map(item => {
      let current = item.head;
      while (current) {
        array.push(Object.keys(current.value));
        current = current.next;
      }
    });
    return array;
  }

}

const hashTable = new HashMap(5);
hashTable.set('Dante', 'devil dunter');
hashTable.set('Vergil', 'vilian');
hashTable.set('Nero', 'devil hunter');
hashTable.set('Niko', 'mechanic');
hashTable.set('Niko', 'mechanic');

hashTable.map.map((data, index) => {
  console.log(index, data && data.print());
});

// console.log('getttttttttttt',hashTable.get('Dante'));


console.log(hashTable.has('Niko'));

console.log(hashTable.get('Niko'));

console.log(hashTable.keys());

module.exports = HashMap;
