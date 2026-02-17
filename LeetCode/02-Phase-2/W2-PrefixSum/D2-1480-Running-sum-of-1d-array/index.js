// 1480. Running Sum of 1D Array
// https://leetcode.com/problems/running-sum-of-1d-array/

// intuition:
// for each index i:
// runningSum[i] = sum of elements from index 0 to i
// instead of recalculating the sum from 0 to i every time (O(n^2)),
// we maintain a cumulative sum while iterating
// at each step, add current element to running sum
// store the updated sum in result

// approach:
// initialize sum = 0
// create result array of same length
// iterate from i = 0 to n - 1:
//   - sum += nums[i]
//   - result[i] = sum
// return result

var runningSum = function (nums) {
  let sum = 0
  let res = new Array(nums.length)

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    res[i] = sum
  }

  return res
}

// in place version
var runningSum = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1]
  }
  return nums
}

// time complexity: O(n)
// space complexity: O(1) for in-place version, O(n) for new array version
