// Write a function that returns the number of negative numbers in an array.
// Input: arr = [2, -6, 4, 8, 1, -9]
// Output: 2
// Time Complexity: O(n) – where n is the number of elements in the array.
// Space Complexity: O(1) – only a counter variable is used.

function countNegativeNumbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}

let arr = [2, -6, 4, 8, 1, -9];
let result = countNegativeNumbers(arr);
console.log("Result:", result); // Output: 2