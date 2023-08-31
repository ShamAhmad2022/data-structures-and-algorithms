function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let i = 0;
  let j = 0;
  let mergedArr = [];

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      mergedArr.push(left[i]);
      i++;
    } else {
      mergedArr.push(right[j]);
      j++;
    }
  }

  return mergedArr.concat(left.slice(i)).concat(right.slice(j));
}

const unsortedArray = [8, 4, 23, 42, 16, 15];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);
