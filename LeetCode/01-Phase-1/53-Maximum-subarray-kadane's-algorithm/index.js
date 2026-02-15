// 53. Maximum Subarray - Kadane's Algorithm
// https://leetcode.com/problems/maximum-subarray/

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Example 2:
// Input: nums = [1]
// Output: 1
// Explanation: [1] has the largest sum = 1.

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: [5,4,-1,7,8] has the largest sum = 23.

// kadane's algorithm, dynamic programming
// intuition:
// - we want the maximum sum of any contiguous subarray
// - brute force would check all subarrays → O(n²), too slow
// - while scanning the array, we keep track of:
//     1) the best subarray sum ending at the current index
//     2) the best subarray sum seen overall
// - at each index, we face a simple decision:
//     do we extend the previous subarray
//     OR
//     do we start a new subarray from the current element?
// - if the previous sum is negative, carrying it forward only hurts
// - so the optimal subarray ending at index i is:
//     max(nums[i], currSum + nums[i])
// - this works because a negative prefix can never improve a future sum
// - this is dynamic programming with constant space:
//     currSum = best answer ending at i
//     maxSum  = best answer seen so far

// approach:
// - initialize currSum and maxSum to nums[0]
//   (important to handle all-negative arrays correctly)
// - iterate from index 1 to n - 1
// - for each element nums[i]:
//    update currSum as the maximum of:
//      1) extending the previous subarray: currSum + nums[i]
//      2) starting a new subarray: nums[i]
//    update maxSum if currSum is greater than the current maxSum
// - after the loop, maxSum holds the maximum subarray sum
// - return maxSum

var maxSubArray = function (nums) {
  let currSum = nums[0]
  let maxSum = nums[0]

  for (let i = 1; i < nums.length; i++) {
    currSum = Math.max(currSum + nums[i], nums[i])
    maxSum = Math.max(maxSum, currSum)
  }
  return maxSum
}

// time: - O(n), we traverse the array exactly once
// space: - O(1), only two variables are used regardless of input size