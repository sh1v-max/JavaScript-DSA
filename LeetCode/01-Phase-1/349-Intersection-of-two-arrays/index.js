// 349. Intersection of Two Arrays
// https://leetcode.com/problems/intersection-of-two-arrays/

// given two integer arrays nums1 and nums2, return an array of their intersection. each element in the result must be unique and you may return the result in any order.

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.

var intersection0 = function (nums1, nums2) {
  let set = new Set(nums1)
  // console.log(map)
  let resSet = new Set()

  for (let i = 0; i < nums2.length; i++) {
    let num = nums2[i]
    if (set.has(num)) {
      // console.log(num, "exist in nums1")
      resSet.add(num)
    }
  }
  return Array.from(resSet)
}

// intuition
// - the problem is to find common elements between two arrays
// - the key requirement is that the result must contain only unique values
// - checking membership repeatedly in an array is slow (o(n))
// - a set gives o(1) average time for lookup
// - to minimize work, we should iterate over the smaller array
// - for each element in the smaller array:
//     - if it exists in the set built from the larger array
//     - it belongs to the intersection
// - to avoid duplicates in the result:
//     - store the result in another set
// - finally, convert the result set to an array

// approach (set + iterate smaller array):
// - identify which of nums1 or nums2 is smaller
// - create a set from the larger array
// - create an empty set resSet to store unique intersection values
// - iterate over the smaller array:
//     - if the current value exists in the larger array set:
//         - add it to resSet
// - convert resSet to an array using Array.from()
// - return the resulting array

// optimized
var intersection = function (nums1, nums2) {
  // decide which array is smaller
  let small = nums1.length < nums2.length ? nums1 : nums2
  let large = nums1.length < nums2.length ? nums2 : nums1

  // store vals in set
  let set = new Set(large)
  let resSet = new Set()

  // iterate over smaller one for optimization
  for (let i = 0; i < small.length; i++) {
    let num = small[i]
    if (set.has(num)) {
      // set won't add duplicates
      resSet.add(num)
    }
  }
  return [...resSet]
}

// time complexity: o(m + n) where m and n are lengths of nums1 and nums2
// - creating set o(n), iterating smaller array o(min(m, n))
// - set.has() and set.add() are O(1) on average
// space: o(min(m, n)) for the sets used
