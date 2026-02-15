// 75. Sort Colors
// https://leetcode.com/problems/sort-colors/

// given an array nums with n objects colored red, white, or blue,
// sort them in-place so that objects of the same color are adjacent,
// with the colors in the order red, white, and blue.
// we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
// you must solve this problem without using the library's sort function.

// example 1:
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// example 2:
// Input: nums = [2,0,1]
// Output: [0,1,2]

// two pointer approach (dutch national flag algorithm)
// intuition:
// the problem asks us to sort an array containing only 0, 1, and 2
// in-place and in one pass, representing colors red, white, and blue
// since there are only three distinct values, we can partition the array
// into three sections: all 0s, all 1s, and all 2s
// we maintain three pointers:
// - low → boundary for 0s
// - mid → current element under consideration
// - high → boundary for 2s
// the main idea is:
// - if nums[mid] is 0, swap it with nums[low] and move both pointers forward
// - if nums[mid] is 1, it's in correct position, just move mid forward
// - if nums[mid] is 2, swap it with nums[high] and move high backward
// this ensures that after one pass, all 0s are at the start, 2s at the end,
// and all 1s naturally stay in the middle
// it's a one-pass, constant-space solution

// approach:
// initialize low = 0, mid = 0, high = nums.length - 1
// while mid <= high:
//   if nums[mid] === 0:
//     swap nums[mid] and nums[low]
//     increment low and mid
//   else if nums[mid] === 1:
//     increment mid
//   else: // nums[mid] === 2
//     swap nums[mid] and nums[high]
//     decrement high
// after the loop ends, nums is sorted in-place

var sortColors = function (nums) {
  let low = 0
  let mid = 0
  let high = nums.length - 1

  while (mid <= high) {
    if (nums[mid] === 0) {
      let temp = nums[low]
      nums[low] = nums[mid]
      nums[mid] = temp
      low++
      mid++
    } else if (nums[mid] === 1) {
      mid++
    } else {
      let temp = nums[mid]
      nums[mid] = nums[high]
      nums[high] = temp
      high--
    }
  }
}

// time complexity: O(n) - we traverse the array once
// space complexity: O(1) - in-place sorting, no extra space used