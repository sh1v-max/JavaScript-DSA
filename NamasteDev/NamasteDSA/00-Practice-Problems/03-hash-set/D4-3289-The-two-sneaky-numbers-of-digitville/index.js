// 3289-The-Two-Sneaky-Numbers-of-Digitville
// https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/

// intuition:
// we are given an array that should contain nums from 0 to n-1 exactly once
// but instead, two nums appear twice
// so the task is to find the two nums that have freq > 1
// the simplest way:
// count freq of each number
// any number with freq > 1 is a sneaky number

// approach:
// create a freq map (or object)
// iterate through nums:
//  - increment count for each number
// initialize res array
// iterate through freq map:
//  - if freq > 1:
//  - push number into res
// return res

var getSneakyNumbers = function (nums) {
  // build freq map
  let freq = {}

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    freq[num] = (freq[num] || 0) + 1
  }

  // console.log(freq)
  let res = []
  // get nums with feq > 1
  for (let key in freq) {
    // freq is an obj, so for loop wont work, don't do the same mistake again
    if (freq[key] > 1) {
      console.log(key)
      // key is string, don't forget to convert it into int
      res.push(Number(key))
    }
  }
  return res
}

// time complexity: O(n)
// building freq map: O(n)
// iterating map: O(n)
// total: O(n)

// space complexity: O(n)
