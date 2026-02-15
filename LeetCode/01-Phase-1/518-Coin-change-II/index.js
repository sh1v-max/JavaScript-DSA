// 518. Coin Change 2
// Medium  https://leetcode.com/problems/coin-change-2/

// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
// Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.
// You may assume that you have an infinite number of each kind of coin.
// The answer is guaranteed to fit into a signed 32-bit integer.

// Example 1:
// Input: amount = 5, coins = [1,2,5]
// Output: 4
// Explanation: there are four ways to make up the amount:
// 5=5
// 5=2+2+1
// 5=2+1+1+1
// 5=1+1+1+1+1

// Example 2:
// Input: amount = 3, coins = [2]
// Output: 0
// Explanation: the amount of 3 cannot be made up just with coins of 2.

// Example 3:
// Input: amount = 10, coins = [10]
// Output: 1

// simple recursion
var change0 = function (amount, coins) {
  let n = coins.length
  let fn = (remS, start) => {
    // tracking start to avoid counting same combinations in different orders
    // base case
    if (remS === 0) return 1
    if (remS < 0) return 0
    let combinations = 0
    for (let i = start; i < n; i++) {
      combinations = combinations + fn(remS - coins[i], i)
    }
    return combinations
  }
  return fn(amount, 0)
}

// recursion + memoization (dp)
// in this case, we'll have to memoize based on both remS and start because
// same remS with different start can have different combinations

// intuition:
// - we are allowed to pick any number of coins of each denomination
// - order of coins does not matter (combinations, not permutations)
// - for each coin, we have two choices:
//     1. pick the coin (stay on the same coin, since unlimited supply)
//     2. skip the coin (move to next coin)
// - if remaining amount becomes 0, we found a valid combination
// - if remaining amount < 0, this path is invalid
// - since the same (remainingAmount, startIndex) can be reached
//   in multiple ways, we use memoization to avoid recomputation

// dp state definition:
// dp[remS][start] = number of combinations to make remS using coins[start..n-1]
// - remS = remaining amount we need to form
// - start = index of coin we can start picking from
// - dp answers: "how many ways can we form remS using coins from start onward?"

// base cases:
// - if remS === 0, return 1 (successfully formed a combination)
// - if remS < 0, return 0 (invalid path)
// - if dp[remS][start] !== -1, return dp[remS][start] (already computed)

// recurrence relation:
// for a given (remS, start):
//   combinations = 0
//   for i = start to n-1:
//       combinations += fn(remS - coins[i], i)
//   dp[remS][start] = combinations
//   return combinations

// approach (top-down dp / memoization):
// - create a 2d dp array of size (amount + 1) x n, fill with -1
// - start recursion with fn(amount, 0)
// - recursion explores all combinations while memoization
//   prevents exponential recomputation
// - time complexity: O(amount * n) 
//   (each state remS, start computed once, at most (amount + 1) * n states)
// - space complexity: O(amount * n) for dp + O(amount + n) for recursion stack

var change = function (amount, coins) {
  let n = coins.length
  // creating 2D dp array
  let dp = Array.from({ length: amount + 1 }, () => Array(n).fill(-1))
  // map is slower than array
  // let dp = new Map()
  let fn = (remS, start) => {
    // tracking start to avoid counting same combinations in different orders
    // base case
    if (remS === 0) return 1
    if (remS < 0) return 0

    // let key = start + '-' + remS
    // if (key in dp) return dp[key]
    if (dp[remS][start] !== -1) return dp[remS][start]

    let combinations = 0
    for (let i = start; i < n; i++) {
      combinations = combinations + fn(remS - coins[i], i)
    }
    return (dp[remS][start] = combinations)
  }
  return fn(amount, 0)
}

// time complexity: O(amount * n)
// space complexity: O(amount * n)