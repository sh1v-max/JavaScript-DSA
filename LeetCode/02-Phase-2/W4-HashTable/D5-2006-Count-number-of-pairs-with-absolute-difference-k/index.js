// 2006-Count-Number-of-Pairs-With-Absolute-Difference-K
// https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/

// intuition:
// we need pairs (i, j) such that |nums[i] - nums[j]| == k
// instead of checking all pairs (O(n^2)),
// we can use the idea:
// for each number x, we look for (x + k) and (x - k)
// we use a frequency map to store counts of numbers
// while iterating, we check how many valid partners already exist

// approach:
// create a frequency map
// initialize count = 0
// iterate through nums:
//  - for current number x:
//    - if (x - k) exists in map, add its frequency to count
//    - if (x + k) exists in map, add its frequency to count
//  - then update frequency of x
// return count
var countKDifference = function (nums, k) {
  let freq = {}
  let count = 0

  for (let num of nums) {
    if (freq[num - k]) {
      count += freq[num - k]
    }
    if (freq[num + k]) {
      count += freq[num + k]
    }
    freq[num] = (freq[num] || 0) + 1
  }
  return count
}

// time complexity: O(n)
// space complexity: O(n)
