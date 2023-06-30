'use strict';

const binarySearch = require('./binarySearch');

describe('binarySearch ', () => {
  it('seaching a sorted array of integers', () => {
    expect(binarySearch([1,2,3,4],3)).toEqual(2);
  });

  it('seaching a sorted array of float numbers', () => {
    expect(binarySearch([5.2,20.34,37.99,40],40)).toEqual(3);
  });

  it('seaching unexistent target', () => {
    expect(binarySearch([1,2,3,4],6)).toEqual(-1);
  });

  it('seaching through an empty array', () => {
    expect(binarySearch([],6)).toEqual(-1);
  });

  it('seaching through unsorted array', () => {
    expect(binarySearch([4,6,3,88,-5],6)).toEqual(-1);
  });
});

