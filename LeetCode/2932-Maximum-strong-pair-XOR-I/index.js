// 2932. Maximum Strong Pair XOR I
// https://leetcode.com/problems/maximum-strong-pair-xor-i/

// intuition:
// we are asked to pick any two elements from the array
// pair (x, y) is strong if |x - y| <= min(x, y)
// for every strong pair, we compute x ^ y (bitwise XOR)
// and find the max among all strong pairs
// - for a pair (x, y), assume x <= y
// - then the condition |x - y| <= min(x, y) becomes:
//       y - x <= x  →  y <= 2 * x
// - also, pairs of the form (x, x) are always strong,
//   because |x - x| = 0 <= x
// then we only care about pairs that satisfy y <= 2 * x
// among those pairs, we compute x ^ y
// and find the maximum value
// constraints are 1 <= nums.length <= 50
// so a O(n^2) solution is feasible

// approach:
// initialize maxXor = 0
// use two nested loops to generate all pairs (i, j)
// let x = nums[i], y = nums[j]
// check if the pair is strong using:
//    math.abs(x - y) <= Math.min(x, y)
// if the pair is valid:
// - compute x ^ y
// - update maxXor
// return maxXor

var maximumStrongPairXor = function (nums) {
  let maxXor = 0

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      let x = nums[i]
      let y = nums[j]

      // check if the pair is strong
      if (Math.abs(x - y) <= Math.min(x, y)) {
        maxXor = Math.max(maxXor, x ^ y)
      }
    }
  }
  return maxXor
}

// time complexity: O(n^2)
// space complexity: O(1)
