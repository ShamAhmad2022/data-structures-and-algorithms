'use strict';

const Animal = require('../Animal');
const AnimalShelter = require('../AnimalShelter');


describe('Queue testing', () => {
  it('Can successfully enqueue into a queue', () => {
    let shelter = new AnimalShelter();

    const cat = new Animal('cat', 'sparkles');
    const dog = new Animal('dog', 'jack');

    shelter.enqueue(cat);
    shelter.enqueue(dog);

    expect(shelter.catQueue.length).toBe(1);
    expect(shelter.dogQueue.length).toBe(1);

  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    let shelter = new AnimalShelter();

    const dog1 = new Animal('dog', 'toby');
    const dog2 = new Animal('dog', 'jack');
    const cat1 = new Animal('cat', 'sparkles');

    shelter.enqueue(dog1);
    shelter.enqueue(cat1);
    shelter.enqueue(dog2);

    expect(shelter.dequeue('cat')).toBe(cat1);
    expect(shelter.dequeue('dog')).toBe(dog1);
    expect(shelter.dequeue('dog')).toBe(dog2);
    expect(shelter.dequeue('cat')).toBeNull();
    expect(shelter.dequeue('bird')).toBeNull();
  });

});
