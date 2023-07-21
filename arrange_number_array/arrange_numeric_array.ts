/**
 * 
 * @param arr must be an array of integers.
 * in this function we will organize the numbers from highest to lowest
 */
function organize(array:number[]) {
  // we are cloning the array, now we will have an array that will not affect the input one.
  const arr = Array.from(array);
  // It will help us to repeat the code below for each element
  for (let n = 0; n < arr.length; n++) {
    // with this for we will move each element to its proper position
    for (let i = 0; i < arr.length; i++) {
      // current number
      let current = arr[i];
      // next number on the list
      let following = arr[i + 1];
      /**
       * If the current value is greater than 
       * the next one then we will substitute 
       * the position of both for the other.
       * Example:
       *      [2,1,3]
       * 2 > 1 -> this is true, so the array will look like this:
       *      [1,2,3]
       */
      if (current > following) {
        arr[i + 1] = current;
        arr[i] = following;
      }
    }
  }
  // we will return a new and organized array
  return arr
}

// array of integers...
let array = [99, 9999, 1, 777, 22, 4, 67, 25, 5, 24, 5];

console.log(organize(array)); // -> [1, 4, 5, 5, 22, 24, 25, 67, 99, 777, 9999] 