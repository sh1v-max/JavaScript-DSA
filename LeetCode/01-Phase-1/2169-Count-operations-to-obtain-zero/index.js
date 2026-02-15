// 2169. Count Operations to Obtain Zero
// https://leetcode.com/problems/count-operations-to-obtain-zero/

// You are given two non-negative integers num1 and num2.

// In one operation, if num1 >= num2, you must subtract num2 from num1,
// otherwise subtract num1 from num2.

// For example, if num1 = 5 and num2 = 4, subtract num2 from num1, thus obtaining num1 = 1 and num2 = 4.
// Return the number of operations required to make either num1 or num2 equal to 0.

// Example 1:
// Input: num1 = 2, num2 = 3
// Output: 3
// Explanation:
// - Operation 1: num1 = 2, num2 = 3. Since num1 < num2, we subtract num1 from num2 and get num1 = 2, num2 = 3 - 2 = 1.
// - Operation 2: num1 = 2, num2 = 1. Since num1 > num2, we subtract num2 from num1.
// - Operation 3: num1 = 1, num2 = 1. Since num1 == num2, we subtract num2 from num1.
// Now num1 = 0 and num2 = 1. Since num1 == 0, we do not need to perform any further operations.
// So the total number of operations required is 3.

// example 2:
// Input: num1 = 10, num2 = 10
// Output: 1
// Explanation:
// - Operation 1: num1 = 10, num2 = 10. Since num1 == num2, we subtract num2 from num1 and get num1 = 10 - 10 = 0.
// Now num1 = 0 and num2 = 10. Since num1 == 0, we are done.
// So the total number of operations required is 1.

// optimized subtraction using division
// intuition:
// the problem asks to count the number of operations to reduce either num1 or num2 to zero
// an operation subtracts the smaller number from the larger number
// repeatedly subtracting one number from the other is similar to the Euclidean algorithm for GCD
// instead of subtracting one at a time, we can subtract multiple times in one step using division
// - if num1 >= num2, the number of subtractions needed is Math.floor(num1 / num2)
// - then we update num1 = num1 % num2
// - repeat this process until one number becomes zero
// this reduces the number of iterations drastically, especially when the numbers are large

// approach:
// initialize count = 0
// while both num1 and num2 are non-zero:
//   if num1 >= num2:
//     add Math.floor(num1 / num2) to count
//     update num1 = num1 % num2
//   else:
//     add Math.floor(num2 / num1) to count
//     update num2 = num2 % num1
// when either num1 or num2 becomes zero, return count
// this approach works because each step mimics multiple subtractions in one go, maintaining the same result as repeated subtraction

let countOperations = function (num1, num2) {
  let count = 0

  while (num1 && num2) {
    let res

    if (num1 >= num2) {
      count += Math.floor(num1 / num2)
      num1 %= num2
    } else {
      count += Math.floor(num2 / num1)
      num2 %= num1
    }
  }

  return count
}

// time complexity: O(log(max(num1, num2)))
// Each iteration reduces the larger number roughly by a factor of the smaller number (num1 %= num2 or num2 %= num1).
// space complexity: O(1)
