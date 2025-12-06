// 322. Coin Change
// Medium  https://leetcode.com/problems/coin-change/

// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

// Example 1:
// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1

// Example 2:
// Input: coins = [2], amount = 3
// Output: -1

// Example 3:
// Input: coins = [1], amount = 0
// Output: 0

// recursive solution
// this is a brute force recursive solution
// we're trying all combinations of coins and finding the minimum number of coins needed
var coinChange0 = function (coins, amount) {
  let n = coins.length

  let fn = (remAmount) => {
    // base case
    if (remAmount === 0) return 0
    if (remAmount < 0) return -1
    let minCoins = Infinity

    for (let i = 0; i < n; i++) {
      // forming a subproblem by choosing coin coins[i]
      let res = fn(remAmount - coins[i])
      if (res != -1) {
        // only consider valid solutions
        minCoins = Math.min(minCoins, 1 + res)
      }
    }
    // if after exploring all coins, and min coins is still infinity, means no solution found
    return minCoins === Infinity ? -1 : minCoins
  }

  return fn(amount)
}

// time complexity: O(n^amount) where n is number of coins
// space complexity: O(amount) for the recursion stack

// dp solution
// intuition:
// - for any remaining amount (remAmount), you always have the same question:
//       “If I choose coin X now, can I solve the smaller subproblem
//        (remAmount - X), and what is the minimum coins needed?”
// - this creates a natural recurrence: try every coin and pick the option
//   that leads to the fewest total coins
// - but brute-force recursion would explode, because many remAmount values
//   repeat across different paths
// - memoization fixes this: once we compute the answer for a remAmount,
//   we store it in dp so we never recompute it again
// - if remAmount becomes 0, we used the exact amount, return 0 coins
// - if remAmount becomes negative, invalid path, return -1
// - for a valid remAmount, we try all coins:
//       res = fn(remAmount - coins[i])
//       if res is not -1, update minCoins = min(minCoins, 1 + res)
// - after trying all coins:
//       if minCoins is still Infinity, no combination makes this amount
//       else store the minimum in dp and return it
// - top-down recursion + memoization ensures every remAmount is solved once,
//   reducing complexity drastically

// approach (top-down dp + memoization):
// - create dp = {} to memoize results for each remAmount
// - define a recursive fn(remAmount):
//       - if remAmount === 0, return 0
//       - if remAmount < 0, return -1
//       - if remAmount is already in dp, return dp[remAmount]
//       - set minCoins = Infinity
//       - for each coin in coins:
//              res = fn(remAmount - coin)
//              if res != -1, update minCoins = min(minCoins, 1 + res)
//       - store dp[remAmount] = (minCoins === Infinity ? -1 : minCoins)
//          and return it
// - final answer is fn(amount)

// dp solution
var coinChange = function (coins, amount) {
  let n = coins.length
  // creating a map for memoization
  let dp = {}

  let fn = (remAmount) => {
    // base case
    if (remAmount === 0) return 0
    if (remAmount < 0) return -1
    // check if result is already calculated
    if (remAmount in dp) return dp[remAmount]
    let minCoins = Infinity

    for (let i = 0; i < n; i++) {
      // forming a subproblem by choosing coin coins[i]
      let res = fn(remAmount - coins[i])
      if (res != -1) {
        // only consider valid solutions
        minCoins = Math.min(minCoins, 1 + res)
      }
    }
    // store the result in dp map
    dp[remAmount] = minCoins === Infinity ? -1 : minCoins
    return dp[remAmount]
  }

  return fn(amount)
}

// time: o(amount * n), where n = number of coins
// memoization ensures each remAmount (0..amount) is computed once,
// and each computation loops through all coins
// space: o(amount) for the dp object + recursion stack