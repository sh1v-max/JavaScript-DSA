// leetcode question: 33. Search in Rotated Sorted Array
// find the target value in rotated sorted array nums, O(log n)
// that is using binary search

// we will determine which half of the array is sorted in each iteration and
// narrow the search range accordingly

// approach: binary search
// two pointer l = 0 and r = nums.length - 1
// run binary search (modified)
// While l ≤ r:
// find mid and check if nums[m] === target, return m
// also check which side is sorted:
// if nums[l] ≤ nums[m], left side is sorted...
// - if target ∈ [nums[l], nums[m]), move left: r = m - 1
// - else, move right: l = m + 1
// else, right side is sorted...
// - if target ∈ (nums[m], nums[r]], move right: l = m + 1
// - else, move left: r = m - 1
// if not found, return -1

function search(nums, target) {
  let l = 0
  let r = nums.length - 1

  // binary search
  while (l <= r) {
    let m = l + Math.floor((r - l) / 2)

    if (target === nums[m]) {
      return m
    }

    // left half is sorted
    if (nums[l] <= nums[m]) {
      // target is in left half
      if (target >= nums[l] && target < nums[m]) {
        r = m - 1
      } else {
        l = m + 1
      }
    } else {
      // right half is sorted
      // target is in right half
      if (target > nums[m] && target <= nums[r]) {
        l = m + 1
      } else {
        r = m - 1
      }
    }
  }
  return -1
}

// time complexity: O(log n) - binary search
// space complexity: O(1)