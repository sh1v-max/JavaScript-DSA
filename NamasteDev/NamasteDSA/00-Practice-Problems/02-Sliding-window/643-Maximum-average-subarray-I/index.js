// 643. Maximum Average Subarray I
// https://leetcode.com/problems/maximum-average-subarray-i/

// intuition:
// we are required to find a contiguous subarray of fixed length k
// that has the maximum average
// since k is fixed, maximizing average is equivalent to maximizing sum
// instead of recalculating sum for every subarray (which would take O(n * k)),
// we use a sliding window of size k
// we compute the first window sum
// then slide the window forward by:
// adding the new incoming element
// subtracting the outgoing element
// this allows us to update the sum in O(1) time per step

// approach:
// compute sum of first k elements -> windowSum
// initialize maxSum = windowSum
// iterate from index k to n - 1:
//   windowSum += nums[i] - nums[i - k]
//   update maxSum
// return maxSum / k

var findMaxAverage = function (nums, k) {
  let windowSum = 0

  // first window
  for (let i = 0; i < k; i++) {
    windowSum += nums[i]
  }

  let maxSum = windowSum

  // slide window
  for (let i = k; i < nums.length; i++) {
    windowSum += nums[i] - nums[i - k]
    maxSum = Math.max(maxSum, windowSum)
  }

  return maxSum / k
}

// time complexity: O(n)
// space complexity: O(1)
