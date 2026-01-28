// 1630. Arithmetic Subarrays
// https://leetcode.com/problems/arithmetic-subarrays/

// intuition:
// we need to find if the numbers can be arranged in a way so that they can form arithmetic sequence
// difference between consecutive elements is fixed
// for each range of numbers, we can rearrange the subarray in any order
// subarrays are arithmetic sequence ony when:
// the diff between consecutive elements must be the same
// the smallest and largest elements decide this common difference
// we find difference as d = (max - min) / (length - 1)
// if (max - min) is not divisible by (length - 1), it is not possible
// or, every value min + k*d must exist in the subarray (k is pos)
// we will use hashset to check the existence of these values

// approach:
// for each range [l[i]] to [r[i]]
// traverse nums[l[i]] to r[i] to find min and max
// store all elements in a hashset
// compute the len of the subarray
// check if (max - min) is divisible by (length - 1)
// if not, return false
// find the common difference
// check for all pos(k) from 0 to length - 1
// if min + k*d is missing from the set, return false
// if all required values exist, return true

var checkArithmeticSubarrays = function (nums, l, r) {
  let res = []

  for (let i = 0; i < l.length; i++) {
    let left = l[i]
    let right = r[i]
    let len = right - left + 1

    let min = Infinity
    let max = -Infinity
    let set = new Set()

    // finding min, max and building set
    for (let j = left; j <= right; j++) {
      min = Math.min(min, nums[j])
      max = Math.max(max, nums[j])
      set.add(nums[j])
    }

    // check if common diff is valid
    let d = (max - min) / (len - 1)
    let isArithmetic = true

    // check all required values for it to be an arithmetic sequence
    for (let k = 0; k < len; k++) {
      let expected = min + k * d
      if (!set.has(expected)) {
        isArithmetic = false
        break
      }
    }
    res.push(isArithmetic)
  }
  return res
}

// time complexity: O(k)
// space complexity: O(k)
