// 2799. Count Complete Subarrays in an Array
// https://leetcode.com/problems/count-complete-subarrays-in-an-array/

// arr = [1, 3, 1, 2, 2]
// total distinct elements = 3 [1, 2, 3]

// process:
// first find total number of distinct elements in the entire array
// a complete subarray must contain all those distinct elements
// we use sliding window to count all such subarrays efficiently

// brute force:
// for every starting index
// for every ending index
// count distinct elements in that subarray
// if distinct count === total distinct, increment answer
// this takes o(n^2)

// sliding window:

// intuition:
// instead of checking every subarray from scratch,
// we grow a window [left ... right]
// as we move right, we add elements and track their frequency
// if an element appears for the first time in the window,
// increase currentDistinct
// when currentDistinct === totalDistinct,
// the window becomes complete
// once complete, any subarray starting at left and ending at
// right or beyond will also be complete
// so we add (n - right) to the res
// then shrink from left to find new valid starting points

// approach:
// compute totalDistinct using a set
// initialize left = 0, res = 0
// maintain a frequency map and currentDistinct counter
// expand right pointer
// update frequency and distinct count
// while window is complete:
//   - add (n - right) to res
//   - remove nums[left] from window
//   - if its frequency becomes zero, decrease currentDistinct
//   - move left forward
// return res

var countCompleteSubarrays = function (nums) {
  const n = nums.length
  const totalDistinct = new Set(nums).size

  let left = 0
  let res = 0
  let freq = new Map()
  let currentDistinct = 0

  for (let right = 0; right < n; right++) {
    // add the number to the window
    freq.set(nums[right], (freq.get(nums[right]) || 0) + 1)

    // if it is appearing for the first time, increase distinct
    if (freq.get(nums[right]) === 1) {
      currentDistinct++
    }

    // if window is complete
    while (currentDistinct === totalDistinct) {
      // count all valid subarrays starting at left
      res += n - right

      // remove nums[left]
      freq.set(nums[left], freq.get(nums[left]) - 1)
      if (freq.get(nums[left]) === 0) {
        currentDistinct--
      }

      left++
    }
  }

  return res
}

// time complexity: O(n)
// space complexity: O(n)
