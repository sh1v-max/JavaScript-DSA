// 350. Intersection of Two Arrays II
// https://leetcode.com/problems/intersection-of-two-arrays-ii/

// given two integer arrays nums1 and nums2, return an array of their intersection.
// Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.

// intuition: (hash map / frequency counting)
// - we need to find the intersection of two arrays
// - unlike the previous problem, here we need to consider the frequency of elements
// - an element should appear in the result as many times as it appears
//   in both arrays (minimum frequency)
// - to handle duplicates efficiently, we need to keep track of counts
// - a frequency map allows us to know how many times each number
//   is still available to be matched
// - for each number in the second array, we check if it exists in the map
//   and still has a positive count
// - if yes, we add it to the result and decrease its count

// approach:
// - create a hash map to store the frequency of each number in nums1
// - iterate through nums1 and increment the count for each number
// - create an empty array to store the result
// - iterate through nums2:
//   - if the current number exists in the map and its count is greater than 0:
//     - add the number to the result array
//     - decrement its count in the map
// - return the result array

var intersect = function (nums1, nums2) {
  const map = new Map()
  const res = []

  // freq map for nums1
  for (let i = 0; i < nums1.length; i++) {
    const num = nums1[i]
    map.set(num, (map.get(num) || 0) + 1)
  }

  for (let i = 0; i < nums2.length; i++) {
    const num = nums2[i]
    if (map.has(num) && map.get(num) > 0) {
      res.push(num)
      map.set(num, map.get(num) - 1)
    }
  }
  return res
}

// time complexity: O(n + m)
// space complexity: O(n)
