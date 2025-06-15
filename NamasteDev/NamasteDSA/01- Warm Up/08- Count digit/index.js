// Write a function countDigits(n) that takes an integer n and returns how many digits it contains.
// Time Complexity: O(log₁₀(n)) — Each division reduces one digit.
// Space Complexity: O(1) — Only a few variables are used.

// Input: 259
// Output: 3

// Input: -1035
// Output: 4

// Input: 0
// Output: 1

// Approach
// Handle Zero: If n == 0, return 1 directly.
// Convert to Positive: Use abs(n) to ignore sign.
// Initialize a counter: Set count = 0.
// Loop: While n > 0:
// Divide n by 10 using integer division.
// Increment count.
// Return: The count after the loop finishes.

function countDigits(n) {
  if(n === 0) {
    return 1
  }
  n = Math.abs(n);
  let count = 0;
  while(n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count
}

console.log(countDigits(259));
console.log(countDigits(-1035));
console.log(countDigits(0));