// 1984. minimum difference between highest and lowest of k scores
// https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/

// intuition:
// we need to pick k scores such that (min - max) is minimum
// scores that are close to each other will have min diff
// so we will sort the array, it will bring close scores together
// after sorting, the best group of k students must be a contiguous subarray of length k
// for each subarray, diff is nums[i + k - 1] - nums[i]

// approach (sliding window):
// sort the array
// initialize minDiff to a large val
// slide a window of size k
// for each window, calculate diff between last and first elem
// update minDiff if current diff is smaller
// return minDiff

var minimumDifference = function (nums, k) {
  if (k <= 1) return 0

  nums.sort((a, b) => a - b)
  let minDiff = Infinity

  for (let i = 0; i <= nums.length - k; i++) {
    const diff = nums[i + k - 1] - nums[i]
    minDiff = Math.min(minDiff, diff)
  }

  return minDiff
}

// time complexity: O(n log n) due to sorting
// space complexity: O(1)
