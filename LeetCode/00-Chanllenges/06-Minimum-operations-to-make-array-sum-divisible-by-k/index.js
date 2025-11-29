/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
  }

  if (sum % k === 0) {
    return 0
  } else if (sum < k) return sum
  else return sum % k
}
