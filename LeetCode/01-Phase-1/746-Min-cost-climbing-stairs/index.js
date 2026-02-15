// 746. Min cost climbing stairs
// https://leetcode.com/problems/min-cost-climbing-stairs/

// you are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps

// you can either start from the step with index 0, or the step with index 1.

// return the minimum cost to reach the top of the floor.

// example 1:
// Input: cost = [10,15,20]
// Output: 15
// Explanation: You will start at index 1.
// - Pay 15 and climb two steps to reach the top.
// The total cost is 15.

// example 2:
// Input: cost = [1,100,1,1,1,100,1,1,100,1]
// Output: 6
// Explanation: You will start at index 0.
// - Pay 1 and climb two steps to reach index 2.
// - Pay 1 and climb two steps to reach index 4.
// - Pay 1 and climb two steps to reach index 6.
// - Pay 1 and climb one step to reach index 7.
// - Pay 1 and climb two steps to reach index 9.

// bottom-up approach
// intuition:
// - each step i has a cost: cost[i]
// - to reach step i, you can come from step i-1 or step i-2
// - total cost to reach step i = min(
//        cost to reach i-1 + cost[i-1],
//        cost to reach i-2 + cost[i-2]
//   )
// - we can start from step 0 or step 1, so the cost to reach step 0 or 1 is 0
// - the "top of floor" is after the last index (i = n), so we compute dp[n]
// - this is very similar to climbing stairs, but instead of counting ways, we accumulate minimum cost
//
// approach (bottom-up dp):
// - initialize dp array of size n+1
//     dp[0] = 0, dp[1] = 0   // base cases
// - for i = 2 → n:
//       dp[i] = min(dp[i-1] + cost[i-1], dp[i-2] + cost[i-2])
// - dp[i] stores minimum cost to reach step i
// - return dp[n]   // minimum cost to reach the top

var minCostClimbingStairs = function (cost) {
  let dp = [0, 0]
  // dp is storing min cost to reach ith step
  // base case is [0,0] because we can start from step 0 or step 1 without any cost
  let n = cost.length

  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
  }

  return dp[n]
}

// time complexity: O(n), single loop through steps
// space complexity: O(n), dp array of size n+1
