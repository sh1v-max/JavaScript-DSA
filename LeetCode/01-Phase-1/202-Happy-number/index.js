// 202. Happy Number
// https://leetcode.com/problems/happy-number/

// write an algorithm to determine if a number n is happy.
// A happy number is defined by the following process:
// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle that does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

// example:
// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

// Input: n = 2
// Output: false

// intuition:
// - each number is transformed into the sum of the squares of its digits
// - from any number, there is exactly ONE next number
// - this creates a single chain of numbers (no branching)
// - the process can end in only two ways:
//     1. we reach 1 → the number is happy
//     2. we repeat a number → we are stuck in a cycle
// - if a number repeats, the sequence will loop forever
// - therefore, the core problem is detecting a cycle
// - using a Set allows us to quickly check if we have seen a number before

// approach (hashset / cycle detection):
// - create a Set to store all numbers encountered so far
// - repeatedly replace the number with the sum of squares of its digits
// - at each step:
//     - if the number is already in the Set, a cycle is detected → return false
//     - otherwise, add the number to the Set and continue
// - if the number becomes 1, the process stops → return true
// - this works because the sequence must either reach 1 or repeat a number

var isHappy = function (n) {
  // we will use set to store number and check if we've seen it before
  const seen = new Set()

  // loop until we find happy number or see a cycle
  while (n !== 1) {
    // if we've seen this number before, it's a cycle
    if (seen.has(n)) return false

    // add the num to seen set
    seen.add(n)

    // replace n with the sum of squares of its digits
    n = sumOfSquares(n)
  }
  return true
}

// helper function to calculate sum of squares of digits
function sumOfSquares(n) {
  let sum = 0
  while (n > 0) {
    let digit = n % 10
    sum += digit * digit
    n = Math.floor(n / 10)
  }
  return sum
}

// time complexity: O(log n)
// space complexity: O(1)
// n is the value, not the size of input