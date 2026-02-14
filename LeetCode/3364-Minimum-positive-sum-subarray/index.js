// 3364. Minimum Positive Sum Subarray
// https://leetcode.com/problems/minimum-positive-sum-subarray/

// intuition:
// we are required to find a contiguous subarray
// whose length is between l and r (inclusive)
// and sum is strictly greaten than 0
// since l and r define a range of window sizes, we need to check all possible window size from l to r
// we are not looking for max or a monotonic condition
// so we cannot use the classical shrink-expand sliding window pattern
// instead, for each possible window size
// we can use a fixed-size sliding window to compute sum efficiently
// for a fixed window size k:
// - compute the first window sum
// - then slide the window forward by subtracting the outgoing element
//   and adding the incoming element
// - if sum > 0, update the minimum
// if no valid positive sum is found, return -1

// approach:
// initialize minSum = Infinity
// iterate size from l to r:
//   if size > nums.length, break
//   compute first window sum of length 'size'
//   if sum > 0, update minSum
//   slide window from left to right:
//       sum += nums[i] - nums[i - size]
//       if sum > 0, update minSum
// after checking all sizes,
// if minSum is still Infinity, return -1
// otherwise return minSum

var minimumPositiveSum = function (nums, l, r) {
  let n = nums.length
  let minSum = Infinity

  for (let size = l; size <= r; size++) {
    if (size > n) break

    let sum = 0

    // compute first window of this size
    for (let i = 0; i < size; i++) {
      sum += nums[i]
    }

    if (sum > 0) {
      minSum = Math.min(minSum, sum)
    }

    // slide the window
    for (let i = size; i < n; i++) {
      sum += nums[i] - nums[i - size]

      if (sum > 0) {
        minSum = Math.min(minSum, sum)
      }
    }
  }

  return minSum === Infinity ? -1 : minSum
}

// time complexity: O(n * (r - l + 1)), worst case (where r = n): o(n^2)
// space complexity: O(1)
