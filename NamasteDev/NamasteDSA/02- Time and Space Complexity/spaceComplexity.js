//  WHAT IS SPACE COMPLEXITY?
// Space Complexity tells us how much memory is used as the input size increases.

// === O(1) Space Complexity ===
function sumOfArray(arr) {
  let sum = 0; // Only one variable
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
} // Extra space is constant

// === O(n) Space Complexity ===
function doubleArray(arr) {
  let result = []; // New array of same size
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  return result;
} // Extra space grows with input

// === O(n) Space (Recursion Call Stack) ===
function recursiveSum(n) {
  if (n === 0) return 0;
  return n + recursiveSum(n - 1); // Each call stays in memory
}

// === RULES OF SPACE COMPLEXITY ===
// - Use of variables → O(1)
// - Use of arrays or objects that grow with input → O(n)
// - Recursion depth → adds to space

// === PRACTICE EXAMPLES ===

// O(1): Find max in array
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

// O(n): Copy an array
function copyArray(arr) {
  let copy = [];
  for (let i = 0; i < arr.length; i++) {
    copy.push(arr[i]);
  }
  return copy;
}

console.log("✅ Space Complexity Explained!");
