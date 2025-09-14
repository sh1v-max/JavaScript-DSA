// 162. find any peak element
// peak element is the element which is greater than its neighbors
// the array is unsorted but there's at least one peak element
// return the index of the peak element
// if array contains multiple peak elements, return any index
// You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.
// sort of:
// -infinity [3, 2, 3, 2, 5] -infinity
// so 1st and last will always be peak
// algorithm must be 0(log n)

// intuition:
// there will always be a peak
// check for the middle element
// slope is going up → peak must be on the right
// slope is going down → peak is at mid or on the left

// approach: binary search
// l = 0, r = nums.length - 1
// while l < r
// find m = l + (r - l) / 2
// if nums[m] < nums[m + 1], peak is on the right, l = m + 1
// else, peak is on the left, r = m
// loop ends when l == r
//  return l


function findPeakElement(nums) {
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    let mid = Math.floor((left + right) / 2)

    if (nums[mid] < nums[mid + 1]) {
      // slope is going up → peak must be on the right
      left = mid + 1
    } else {
      // slope is going down → peak is at mid or on the left
      right = mid
    }
  }

  // left == right → peak index
  return left
}

// time complexity: O(log n)
// space complexity: O(1)