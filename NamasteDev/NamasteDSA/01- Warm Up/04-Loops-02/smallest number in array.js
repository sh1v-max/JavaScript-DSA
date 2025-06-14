//  Write a function that returns the smallest number in an array.
// Input: arr = [2, -6, 4, 8, 1, -9]
// Output: -9
// Time Complexity: O(n) – where n is the number of elements in the array.
// Space Complexity: O(1) – only one variable is used.

function findSmallest(arr) {
  let smallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

let arr = [2, -6, 4, 8, 1, -9];
let result = findSmallest(arr);
console.log("Result:", result); // Output: -9