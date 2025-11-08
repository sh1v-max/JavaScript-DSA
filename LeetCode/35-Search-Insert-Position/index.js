// 32. Search Insert Position
// https://leetcode.com/problems/search-insert-position/

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Input: nums = [1,3,5,6], target = 5
// Output: 2

// binary search
// intuition:
// the problem asks to find the index of a target in a sorted array,
// or the position where it would be inserted if it does not exist
// since the array is sorted, we can use binary search to achieve O(log n) time
// the main idea is:
// - maintain two pointers, left and right, representing the current search range
// - find the middle element of the range
// - if middle element equals target, return its index
// - if middle element is greater than target, move the right pointer to mid - 1
// - if middle element is less than target, move the left pointer to mid + 1
// - repeat until left pointer surpasses right pointer
// at the end, left points to the index where the target should be inserted

// approach:
// initialize left = 0, right = nums.length - 1
// while left <= right:
//   calculate mid = Math.floor((left + right) / 2)
//   if nums[mid] === target, return mid
//   if nums[mid] > target, set right = mid - 1
//   else set left = mid + 1
// after the loop, left is the insertion index for the target
// return left

var searchInsert = function (nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)

    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return left
}

// time complexity: O(log n)
// space complexity: O(1)