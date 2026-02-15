// 2367 Number of arithmetic triplets
// https://leetcode.com/problems/number-of-arithmetic-triplets/

// key notes:
// brute force will work fine but it will take O(n^3) time complexity
// can't use two pointer because it's not matching or scanning a range problem
// we need exact difference

// we know that array is strictly increasing
// so we will rather check for each number, as in... for each number check if the next two required number exist
// we will use hash set

// intuition:
// add all numbers into a set
// for each nums[i], check for nums[i] + diff and nums[i] + 2 * diff
// if they're present, do count++
// return count

var arithmeticTriplets = function (nums, diff) {
  const set = new Set(nums)
  let count = 0

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (set.has(num + diff) && set.has(num + 2 * diff)) {
      count++
    }
  }
  return count
}

// time complexity: O(n)
// space complexity: O(n)
