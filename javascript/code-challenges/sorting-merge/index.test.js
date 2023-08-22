'use strict';

const mergeSort = require('./index');

describe('Stack', () => {
  it('return a warning when the array is empty', () => {
    const array1 = [];
    expect(mergeSort(array1)).toBe('empty array!!');
  });

  it('return the sorted array', () => {
    const array2 = [8, 4, 23, 42, 16, 15];
    mergeSort(array2);
    expect(array2).toStrictEqual([4, 8, 15, 16, 23, 42]);
  });
});
