// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const ans = [];
  let tempArr = [];
  for (let val of array) {
    tempArr.push(val);
    if(tempArr.length === size) {
      ans.push(tempArr);
      tempArr = [];
    }
  }
  if(tempArr.length > 0) ans.push(tempArr);
  return ans;
}

function chunk2(array, size) {
    const chunked = [];
    for (let element of array) {
        const last = chunked[chunked.length - 1];
        console.log(last)

        if(!last || last.length === size) {
            chunked.push([element]);
        } else {
            last.push(element);
        }
    }
    return chunked;
}

function chunk3(array, size) {
    const chunked = [];
    let index = 0;
    while (index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }
    return chunked;
}

module.exports = chunk;
