// 2348. Number of Zero-Filled Subarrays
// https://leetcode.com/problems/number-of-zero-filled-subarrays/

// Given an integer array nums, return the number of subarrays filled with 0.
// A subarray is a contiguous subsequence of the array.

// Example 1:
// Input: nums = [1,3,0,0,2,0,0,4]
// Output: 6
// Explanation: There are 4 occurrences of [0] as a subarray.
// There are 2 occurrences of [0,0] as a subarray.
// There is no occurrence of a subarray with 3 zeros together.

// Example 2:
// Input: nums = [0,0,0,2,0,0]
// Output: 9
// Explanation: There are 5 occurrences of [0] as a subarray.
// There are 3 occurrences of [0,0] as a subarray.
// There is 1 occurrence of [0,0,0] as a subarray.

// intuition:
// we know that, if there are k zeros, then there are k*(k+1)/2 subarrays with k zeros together
// 1 + 2 + 3 + ... + k = k*(k+1)/2
// accumulating all zeros on the go, counting all the subarray ending at the zero

// approach:
// initialize count = 0 (number of consecutive zeros) and res = 0
// loop through array, if nums[i] = 0, count++
// add count to result (counts all subarrays ending at this zero)
// else, count = 0
// after the loop, result holds the total number of zero-filled subarrays

function zeroFilledSubarray(nums) {
  let res = 0
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count++
      res += count
    } else {
      count = 0
    }
  }
  return res
}

// another solution

// intuition:
// we know that, if there are k zeros, then there are k*(k+1)/2 subarrays with k zeros together
// 1 + 2 + 3 + ... + k = k*(k+1)/2

// but in this approach, we're calculating the count, and applying the k formula

function zeroFilledSubarray(nums) {
  let count = 0,
    res = 0

  for (let num of nums) {
    if (num === 0) {
      count++
    } else {
      res += (count * (count + 1)) / 2
      count = 0
    }
  }

  res += (count * (count + 1)) / 2
  return res
}

// time complexity: O(n)
// space complexity: O(1)