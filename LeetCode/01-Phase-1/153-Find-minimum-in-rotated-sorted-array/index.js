// leetcode question: 153. Find Minimum in Rotated Sorted Array
// rotated sorted array: [4, 5, 6, 7, 0, 1, 2]

// This problem asks us to find the smallest element in an array that was originally sorted in ascending order and then rotated. The array has no duplicates.

// intuition: we will first identify the slope around middle
// because that will tell us which part is sorted/unsorted
// if slope is going up (l < mid), min is on the left
// if slope is going down (mid < r), min is on the right
// also check for mid, if mid < mid + 1, return mid
// change the search range accordingly
// also check for sorted array(regular) and single element

// approach: binary search
// l = 0, r = nums.length - 1
// while l <= r
// if l < r, already sorted, return l
// find mid, m = l + (r - l) / 2
// if m < m-1, that the pivot, return m
// if mid < l, rotating point is in the left, r = m - 1
// else rotating point is in the right, l = m + 1

// corner case:
// single element
// two elements rotated
// sorted array (regular)
// pivot, but the next searching space is sorted
// full rotation


function findMin(arr) {
  let l = 0
  let r = arr.length - 1

  while (l <= r) {
    // when searching space/whole array already sorted
    if (arr[l] <= arr[r]) {
      return arr[l]
    }

    let m = l + Math.floor((r - l) / 2)
    if (arr[m] < arr[m - 1]) {
      return arr[m]
    }

    // if left is non sorted
    if (arr[l] > arr[m]) {
      r = m - 1
    } else {
      l = m + 1
    }
  }
}

// time complexity: O(log n)
// space complexity: O(1)

