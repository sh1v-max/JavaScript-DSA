// 2574. Left and Right Sum Differences
// https://leetcode.com/problems/left-and-right-sum-differences/

// intuition:
// we need to compute, for each index i:
// leftSum[i] = sum of all elements to the left of i
// rightSum[i] = sum of all elements to the right of i
// instead of recalculating these sums for each index (which would be O(n^2))
// we can compute them in a single pass using prefix sums
// first compute total sum of array
// maintain a running leftSum
// rightSum can be computed as: totalSum - leftSum - nums[i]
// then compute absolute difference

// approach:
// compute totalSum of nums
// initialize leftSum = 0
// iterate i from 0 to n - 1:
// - rightSum = totalSum - leftSum - nums[i]
// - result[i] = Math.abs(leftSum - rightSum)
// - leftSum += nums[i]
// return result

var leftRightDifference = function (nums) {
  let totalSum = 0

  // finding total sum of nums
  for (let num of nums) {
    totalSum += num
  }

  let leftSum = 0
  let res = new Array(nums.length)

  for (let i = 0; i < nums.length; i++) {
    let rightSum = totalSum - leftSum - nums[i]
    res[i] = Math.abs(leftSun - rightSum)
    leftSum += nums[i]
  }

  return res
}

// time complexity: O(n)
// space complexity: O(n)