// 1877. Minimize Maximum Pair Sum in Array
// https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/

// intuition:
// we have even number of elements
// we must pair them up, every number used once
// each pair gives a sum, look for the largest pair sum
// and we want the largest sum to be as small as possible
// we are not minimizing the total sum, we are minimizing the worst (maximum) pair

// we will pair largest + smallest
// second largest + second smallest and so on...
// if we pair large num together, we create a huge max
// and if we pair the large with small, we get the worst (max) pair

// this is greedy + two pointer
// sort the array
// pair the smallest with the largest
// track the max sum
// that max is the minimum possible ans

// approach: two pointer
// sort nums
// set two pointers, left = 0 and right = n -1
// while left < right
// pairSum = nums[left] + nums[right]
// update maxSum
// left++, right--
// return maxSum

var minPairSum = function (nums) {
  nums.sort((a, b) => a - b)

  let left = 0
  let right = nums.length - 1
  let maxSum = 0

  while (left < right) {
    maxSum = Math.max(maxSum, nums[left] + nums[right])
    left++
    right--
  }

  return maxSum
}

// time complexity: O(n log n)
// space complexity: O(1)
