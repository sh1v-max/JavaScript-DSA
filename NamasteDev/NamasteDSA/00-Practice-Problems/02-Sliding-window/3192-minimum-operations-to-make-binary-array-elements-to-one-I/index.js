// 3182. Minimum Operations to Make Binary Array Elements Equal to One I
// https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-i/

// intuition:
// we want to make all elements 1
// flip exactly 3 consecutive elements
// one we move past an element, we no longer affects it
// so if 0 appears at index 1, the only way to fix it is to flip the window starting at i (i, i+, i+2)
// so we will use sliding window approach
// traverse the array from left to right
// whenever we see a 0, we must flip the current window of size 3
// if we reach the end and still have 0s left, it means the array cannot be converted to all 1s

// approach (sliding window):
// initialize count to track the number of operations
// iterate from index 0 to n-3
// if nums[i] is 0, flip nums[i], nums[i+1], nums[1+2]
// increment the operation count
// after the loop, check the remaining elements
// if any element is0, return -1 (can not be done)
// else return count

var minOperations = function (nums) {
  let count = 0
  let n = nums.length

  for (let i = 0; i < n - 2; i++) {
    if (nums[i] === 0) {
      nums[i] ^= 1
      nums[i + 1] ^= 1
      nums[i + 2] ^= 1
      count++
    }
  }
  // check rem elements
  // only checking last 2
  for (let i = n - 2; i < n; i++) {
    if (nums[i] === 0) {
      return -1
    }
  }
  return count
}

// time complexity: O(n)
// space complexity: O(1)
