// 509. Fibonacci Number
// https://leetcode.com/problems/fibonacci-number/

// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

// using dynamic programming
// this is top down recursion approach with memoization

// intuition:
// - fibonacci has overlapping subproblems: fib(6) calls fib(5) + fib(4)
//   but fib(5) calls fib(4) + fib(3), and fib(4) is repeated again…
// - plain recursion is exponential because it recomputes the same values many times
// - memoization fixes this by *remembering* results
// - once we compute fib(k), we store it in dp[k] so future calls return instantly
// - this converts the recursion tree from exponential → linear
// - base case: fib(0) = 0, fib(1) = 1

// approach (Top-Down DP / Memoization):
// - use a dp object to store already computed fibonacci numbers
// - recursively compute fib(n) using the formula:
//        fib(n) = fib(n - 1) + fib(n - 2)
// - before computing, check if dp[n] already exists
//     → if yes: return saved value to avoid recomputation
// - if no: compute, save into dp, and return it
// - recursion bottoms out at n <= 1

let dp = {}
var fib = function (n) {
  if (n <= 1) return n

  if (!dp[n]) {
    dp[n] = fib(n - 1) + fib(n - 2)
  }
  return dp[n]
}

// time: O(n), each fib(n) is computed once, thanks to memoization
// space: O(n), recursion stack + dp storage

// bottom up approach
// using tabulation and iterative method
// we will use for loop to fill the dp array from 0 to n

// approach (Bottom-Up DP / Tabulation):
// - create an array dp to store fibonacci values
// - initialize dp[0] = 0 and dp[1] = 1
// - loop from i = 2 up to n
// - compute dp[i] as the sum of previous two values:
//        dp[i] = dp[i - 1] + dp[i - 2]
// - after the loop, dp[n] contains the answer

var fib = function (n) {
  let dpp = [0, 1]
  for (let i = 2; i <= n; i++) {
    dpp[i] = dpp[i - 1] + dpp[i - 2]
  }
  return dpp[n]
}

// time: O(n), single loop computing each fibonacci value exactly once
// space: O(n), dp array storing all values from 0…n