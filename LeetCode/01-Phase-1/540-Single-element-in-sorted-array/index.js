// leetcode problem: 540. Single Element in a Sorted Array
// https://leetcode.com/problems/single-element-in-a-sorted-array/

// Intuition:
// In a sorted array where every element appears twice except one
// the index pattern changes after the single element
// - Before the single element: pairs start at even indices
// - After the single element: pairs start at odd indices
// Using binary search, we check the middle element's pair:
//   - If mid is even, its pair should be at mid + 1
//   - If mid is odd, its pair should be at mid - 1
// If the pair is correct, the single element is to the right (l = mid + 1)
// else it's to the left (r = mid - 1)
// This ensures O(log n) search without scanning every element

// approach: binary search
// l = 0 and r = arr.length - 1
// while l < r:
// check if mid is even or odd
// if mid is even:
// if arr[mid] === arr[mid + 1], single is on the right, l = mid + 2
// else, single is on the left, r = mid
// if mid is odd:
// if arr[mid] === arr[mid - 1], single is on the right, l = mid + 1
// else, single is on the left, r = mid - 1
// loop will run til l == r, when loop ends, l will point to the single element
// return arr[l]

function singleNonDuplicate(nums) {
  let l = 0,
    r = nums.length - 1

  while (l < r) {
    let m = Math.floor((l + r) / 2)

    if (m % 2 === 1) m--

    if (nums[m] === nums[m + 1]) {
      l = m + 2
    } else {
      r = m
    }
  }

  return nums[l]
}

// time complexity: O(log n)
// space complexity: O(1)