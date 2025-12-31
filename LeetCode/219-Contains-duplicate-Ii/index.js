// 219. Contains Duplicate II
// https://leetcode.com/problems/contains-duplicate-ii/

// given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// Example 1:
// Input: nums = [1,2,3,1], k = 3
// Output: true

// Example 2:
// Input: nums = [1,0,1,1], k = 1
// Output: true

// Example 3:
// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

// brute force approach
// it's to check every pair of (i, j) where i and j are indices of the array
// time complexity: O(n^2)
// space complexity: O(1)

// intuition: hash map / last seen index
// - the problem is about finding nearby duplicates, not all duplicates
// - for any value, only its most recent occurrence matters
// - when the same number appears again, the closest possible match
//   is its last seen index
// - if the distance between the current index and the last seen index
//   is <= k, we can immediately return true
// - if this closest distance is > k, any earlier occurrence
//   would be even farther
// - a hash map lets us track last seen indices in o(1) time

// approach (hash map / last seen index):
// - create a map to store each number and its last seen index
// - iterate through the array from left to right
// - for each index i:
//     - if the current number exists in the map:
//         - check the distance between i and the stored index
//         - if the distance is <= k, return true
//     - update the map with the current index as the last seen index
// - if no valid pair is found, return false

var containsNearbyDuplicate = function (nums, k) {
  // creating a map to store number and its last seen index
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    // check if we've seen this number before
    if (map.has(nums[i])) {
      // distance check
      if (i - map.get(nums[i]) <= k) {
        return true
      }
    }
    // update last seen index
    map.set(nums[i], i)
  }

  // not found valid pair
  return false
}

// time complexity: O(n)
// space complexity: O(n)