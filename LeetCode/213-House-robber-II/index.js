// 213. House Robber II
// https://leetcode.com/problems/house-robber-ii/

// you are a professional robber planning to rob a street of houses. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

// given an integer array nums representing the amount of money of each house return the maximum amount of money you can rob tonight without alerting the police.

// example 1:
// Input: nums = [2,3,2]
// Output: 3
// Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.

// example 2:
// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

// example 3:
// Input: nums = [1,2,3]
// Output: 3

// intuition:
// - houses are in a circle → house 0 and house n-1 are adjacent
// - you cannot rob both the first and the last house in the same plan
// - so every valid solution must fall into exactly one of two cases:
//      1) rob from houses 0..n-2  → skip last house
//      2) rob from houses 1..n-1  → skip first house
// - each case becomes a normal linear house robber dp
// - in a linear robber dp:
//      dp[i] = max money from houses in range start..i
//      choices at house i:
//          → skip: dp[i-1]
//          → rob:  nums[i] + dp[i-2]
// - solve both ranges separately and take the maximum
// - this bypasses the circular adjacency issue cleanly

// approach (bottom-up dp):
// - handle small cases: n = 0 or n = 1
// - define a helper(start, end):
//       dp[start] = nums[start]
//       dp[start+1] = max(nums[start], nums[start+1])
//       for each i from start+2 → end:
//           dp[i] = max(dp[i-1], dp[i-2] + nums[i])
//       return dp[end]
// - compute:
//       option1 = helper(0, n-2)   // exclude last house
//       option2 = helper(1, n-1)   // exclude first house
// - answer = max(option1, option2)

var rob = function (nums) {
  let n = nums.length
  if (n === 0) return 0
  if (n === 1) return nums[0]

  // this function calculates max rob from start to end
  var helper = function (start, end) {
    // dp[i] = max money from houses in the subarray start..i
    let dp = []
    dp[start] = nums[start]
    dp[start + 1] = Math.max(nums[start], nums[start + 1])
    // dp[i] is storing max amount that can be robbed from 0 to ith house

    for (let i = start + 2; i <= end; i++) {
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
      // either skip current house (dp[i-1]) or rob current house (+ nums[i]) and add to dp[i-2]
    }
    return dp[end]
  }

  // Case 1 → rob 0..n-2 (skip last house)
  let option1 = helper(0, n - 2)
  // Case 2 → rob 1..n-1 (skip first house)
  let option2 = helper(1, n - 1)
  return Math.max(option1, option2)
}

// time: o(n), two linear dp passes but still linear
// space: o(n), dp array for each range