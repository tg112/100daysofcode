// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
          if (arr[j] > arr[j+1]) {
            const lesser = arr[j+1];
            arr[j+1] = arr[j];
            arr[j] = lesser;
          }
        }
      }
    
      // return the sorted array
      return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }

    if (indexOfMin !== i) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const midpoint = Math.floor(arr.length / 2);
  const left = arr.slice(0, midpoint);
  const right = arr.slice(midpoint);

  return merge(mergeSort(left), mergeSort(right));


}

function merge(left, right) {
  const reuslts = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      reuslts.push(left.shift());
    } else {
      reuslts.push(right.shift())
    }
  }

  return [...reuslts, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
