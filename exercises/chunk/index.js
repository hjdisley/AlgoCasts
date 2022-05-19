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
  //Initialise the final array
  const finalArr = [];
  // Loop through the array and increment by size
  for (let i = 0; i < array.length; i += size) {
    // Slice from the current index size times
    const arrayChunk = array.slice(i, i + size);
    // Push the chunk into the finalArr
    finalArr.push(arrayChunk);
  }
  return finalArr;
}

module.exports = chunk;
