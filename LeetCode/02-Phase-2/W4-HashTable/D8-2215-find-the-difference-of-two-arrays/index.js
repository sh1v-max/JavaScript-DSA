// 2215-Find-the-Difference-of-Two-Arrays
// https://leetcode.com/problems/find-the-difference-of-two-arrays/

// intuition:
// we need to find:
// 1. elements in nums1 but not in nums2
// 2. elements in nums2 but not in nums1
// also, result should contain only distinct values
// using Set helps:
// - removes duplicates automatically
// - allows O(1) lookup

// approach:
// convert nums1 and nums2 into sets
// for each element in set1:
// - if not present in set2 → add to result[0]
// for each element in set2:
// - if not present in set1 → add to result[1]
// return [result1, result2]

var findDifference = function (nums1, nums2) {
  // build sets, removing duplicates
  let set1 = new Set(nums1)
  let set2 = new Set(nums2)

  let res1 = []
  let res2 = []

  // check for elem in nums1, but not in nums2
  for (let num of set1) {
    if (!set2.has(num)) {
      res1.push(num)
    }
  }

  // check for elem in nums2, but not in nums1
  for (let num of set2) {
    if (!set1.has(num)) {
      res2.push(num)
    }
  }

  return [res1, res2]
}

// time complexity: O(n + m)
// space complexity: O(n + m)
