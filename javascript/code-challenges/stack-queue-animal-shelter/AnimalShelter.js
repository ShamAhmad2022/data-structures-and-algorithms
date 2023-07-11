'use strict';

const Queue = require('./queue');
const Animal = require('./Animal');

class AnimalShelter {
  constructor() {
    this.dogQueue = new Queue();
    this.catQueue = new Queue();
  }

  enqueue(animal) {
    if (animal.species === 'dog') {
      this.dogQueue.enqueue(animal);
    } else if (animal.species === 'cat') {
      this.catQueue.enqueue(animal);
    }
  }

  dequeue(pref) {
    if (pref === 'dog') {
      if (!this.dogQueue.isEmpty()) {
        return this.dogQueue.dequeue();
      } else {
        return null;
      }
    } else if (pref === 'cat') {
      if (!this.catQueue.isEmpty()) {
        return this.catQueue.dequeue();
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
}

const shelter = new AnimalShelter();

const cat1 = new Animal('cat', 'sparkles');
const dog1 = new Animal('dog', 'jack');

shelter.enqueue(dog1);
shelter.enqueue(cat1);

console.log(shelter);

module.exports = AnimalShelter;
