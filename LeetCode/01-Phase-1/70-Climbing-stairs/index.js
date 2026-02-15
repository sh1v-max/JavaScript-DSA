// 70. Climbing Stairs
// https://leetcode.com/problems/climbing-stairs/

// you are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// intuition:
// - to reach step n, you can only come from:
//        (n - 1)th step by taking 1 step
//        (n - 2)th step by taking 2 steps
// - so total ways to reach n = ways(n - 1) + ways(n - 2)
// - this is literally the Fibonacci pattern
// - base:
//      n = 1 → 1 way
//      n = 2 → 2 ways
// - build upwards from these base cases using DP instead of recursion

// approach (Bottom-Up DP):
// - create dp array where dp[i] = number of ways to reach step i
// - initialize dp[1] = 1 and dp[2] = 2
// - for every step from 3 → n:
//        dp[i] = dp[i - 1] + dp[i - 2]
// - dp[n] will contain the final count of ways to climb n stairs

var climbStairs = function (n) {
  let dp = [0, 1, 2] // base case

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}

// time complexity: O(n)
// space complexity: O(n)

// intuition:
// - climbing stairs follows Fibonacci logic:
//        ways(n) = ways(n - 1) + ways(n - 2)
// - in the DP array version, we stored all results up to n
// - but notice: to compute the next value, we only ever use the last 2 values
// - so instead of keeping a whole dp array, we can keep just two variables:
//        prev1 = ways(n - 1)
//        prev2 = ways(n - 2)
// - update them iteratively and save space

// approach (Bottom-Up, O(1) space):
// - handle small n directly:
//        n = 1 → 1 way
//        n = 2 → 2 ways
// - set:
//        prev2 = 1  (ways to reach step 1)
//        prev1 = 2  (ways to reach step 2)
// - for every i from 3 → n:
//        current = prev1 + prev2
//        shift values:
//            prev2 = prev1
//            prev1 = current
// - at the end, prev1 holds ways(n)

let store = {}
var climbStairs = function (n) {
  if (n in store) return store[n]
  if (n <= 2) return n
  store[n] = climbStairs(n - 1, store) + climbStairs(n - 2, store)
  return store[n]
}

// time complexity: O(n)
// space complexity: O(n)
