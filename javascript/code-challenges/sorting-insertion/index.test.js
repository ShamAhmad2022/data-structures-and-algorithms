'use strict';

const insertionSort = require('./index');

describe('Stack', () => {
  it('return a warning when the array is empty', () => {
    const array1 = [];
    expect(insertionSort(array1)).toBe('empty array!!');
  });

  it('return the sorted array', () => {
    const array2 = [8, 4, 23, 42, 16, 15];
    console.log(insertionSort(array2));
    expect(insertionSort(array2)).toStrictEqual([4, 8, 15, 16, 23, 42]);
  });
});
