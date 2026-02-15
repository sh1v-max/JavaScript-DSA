// 300. Longest Increasing Subsequence
// https://leetcode.com/problems/longest-increasing-subsequence/

// given an integer array nums, return the length of the longest strictly increasing subsequence

// A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements

// Example 1:
// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

// Example 2:
// Input: nums = [0,1,0,3,2,3]
// Output: 4

// Example 3:
// Input: nums = [7,7,7,7,7,7,7]
// Output: 1


// intuition:
// - we are NOT looking for a contiguous subarray
// - a subsequence allows us to skip elements while
//   keeping the relative order
// - for every element nums[i], we ask:
//     "what is the longest increasing subsequence
//      that ENDS exactly at index i?"
// - if nums[i] is greater than some previous nums[j],
//   then nums[i] can be appended to the subsequence
//   ending at j
// - so the LIS ending at i depends on LIS endings
//   of all smaller elements before i
// - this naturally leads to a DP solution where
//   each position builds on previous positions

// dp state definition:
// dp[i] = length of the longest increasing subsequence
//         that ENDS at index i
// important:
// - the subsequence MUST include nums[i]
// - dp[i] does NOT represent the global LIS
// - the final answer is max(dp[i]) over all i

// base case:
// - any single element is an increasing subsequence.
// - so initially, dp[i] = 1 for all i

// recurrence relation:
// for each index i:
//   dp[i] = max(dp[j] + 1)
//    for all j < i
//    where nums[j] < nums[i]
// if no such j exists:
//   dp[i] remains 1

// approach (bottom-up):
// initialize dp array with all 1s
// iterate i from 1 to n-1
// for each i, check all j from 0 to i-1
// if nums[j] < nums[i]:
//     dp[i] = max(dp[i], dp[j] + 1)
// track the maximum value seen in dp
// return that maximum


var lengthOfLIS = function (nums) {
  let n = nums.length
  // dp[i] represents the length of longest increasing subsequence ending at index i
  let dp = Array(n).fill(1)
  // base case, it's always 1, because a single element is also a subsequence
  dp[0] = 1

  let lisLength = 1
  // for loop starts from 1 because dp[0] is already initialized
  for (let i = 1; i < n; i++) {
    // find all the smaller elements before nums[i]
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        // if nums[j] is smaller than nums[i], then we can extend the increasing subsequence ending at j to i
        dp[i] = Math.max(dp[i], dp[j] + 1)
        lisLength = Math.max(lisLength, dp[i])
      }
    }
  }
  return lisLength
}

// time complexity: O(n^2)
// space complexity: O(n)