// 198. House Robber
// https://leetcode.com/problems/house-robber/

// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

// Example 2:
// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.

// it's dp problem
// why not greedy? because robbing the house with maximum money may prevent robbing more houses later
// e.g., [2,1,1,2] -> robbing first house (2) prevents robbing last house (2), total 4
// but robbing second (1) and last house (2) gives total 3

// intuition:
// - you can't rob two adjacent houses → if you take house i, you must skip i-1
// - so for every index i, you have exactly two choices:
//      1) don't rob house i  → total stays dp[i-1]
//      2) rob house i        → total becomes nums[i] + dp[i-2]
// - dp[i] therefore stores: maximum money you can rob from houses 0..i
// - this is a classic "pick or skip" DP with the adjacency restriction
// - base:
//      dp[0] = nums[0]
//      dp[1] = max(nums[0], nums[1])
// - build dp forward and take dp[n-1] as answer

// approach (bottom-up dp):
// - handle small cases: 0, 1, 2 houses
// - create dp array where dp[i] = max money up to house i
// - for each house from index 2 → n-1:
//   - dp[i] = max(dp[i-1], dp[i-2] + nums[i])
//   - dp[i-1] = skip current house
//   - dp[i-2] + nums[i] = rob current house
// - return dp[n-1] as final result

var rob = function (nums) {
  let n = nums.length
  if (n === 0) return 0
  if (n === 1) return nums[0]
  if (n === 2) return Math.max(nums[0], nums[1])
  let dp = [nums[0], Math.max(nums[0], nums[1])]
  // dp[i] is storing max amount that can be robbed from 0 to ith house

  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
    // either skip current house (dp[i-1]) or rob current house (+ nums[i]) and add to dp[i-2]
  }
  return dp[n - 1]
}

// time complexity: O(n), single loop through houses
// space complexity: O(n), dp array of size n