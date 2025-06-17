// index.js

//  WHAT IS TIME COMPLEXITY?
// Time Complexity tells us how the runtime of a function increases as the input size increases.

//  WHAT IS SPACE COMPLEXITY?
// Space Complexity tells us how much memory is used as the input size increases.

// === CONSTANT TIME: O(1) ===
function printFirstElement(arr) {
  console.log(arr[0]); // Always takes 1 step
}
printFirstElement([5, 10, 15]); // O(1)

// === LINEAR TIME: O(n) ===
function printAllElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // Runs n times
  }
}
printAllElements([1, 2, 3, 4, 5]); // O(n)

// === QUADRATIC TIME: O(n^2) ===
function printAllPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}
printAllPairs([1, 2, 3]); // O(n^2) - nested loop

// === LOGARITHMIC TIME: O(log n) ===
// Binary Search example
function binarySearch(arr, target) {
  let start = 0, end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
  return -1;
}
console.log(binarySearch([1, 3, 5, 7, 9], 5)); // O(log n) - efficient for sorted arrays

// === FACTORIAL TIME: O(n!) ===
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1); // Recursive call
}
console.log(factorial(5)); // O(n) for recursion depth

// === SPACE COMPLEXITY EXAMPLES ===

// O(1) Space - no extra memory used
function sumOfArray(arr) {
  let sum = 0; // Only one variable
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// O(n) Space - new array used
function doubleArray(arr) {
  let result = []; // New array
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  return result;
}

// O(n) Space - recursion uses call stack
function recursiveSum(n) {
  if (n === 0) return 0;
  return n + recursiveSum(n - 1); // Each call stays in memory
}

//  RULES TO ANALYZE
// - Loops → Linear (O(n))
// - Nested loops → Quadratic (O(n^2))
// - Divide and conquer → Logarithmic (O(log n))
// - Recursion → watch out for both time and space

// === PRACTICE EXAMPLES ===

// Q1: Find if a number exists in an array (Linear search) ➝ O(n)
function contains(arr, target) {
  for (let num of arr) {
    if (num === target) return true;
  }
  return false;
}

// Q2: Print all elements in reverse ➝ O(n)
function printReverse(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

// Q3: Find sum of first n natural numbers ➝ O(1)
function sumFormula(n) {
  return (n * (n + 1)) / 2;
}

// === CHEAT SHEET ===
// O(1) → Constant time (best)
// O(log n) → Binary search, divide & conquer
// O(n) → Looping once
// O(n^2) → Nested loops
// O(2^n) / O(n!) → Exponential / factorial (avoid if possible)

console.log("✅ Time and Space Complexity Explained!");
