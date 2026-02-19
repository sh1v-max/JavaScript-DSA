// 3432. Count Partitions with Even Sum Difference
// https://leetcode.com/problems/count-partitions-with-even-sum-difference/

// brute force way to find the rightsum and leftsum at index i
var countPartitions = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let lSum = 0
    let rSum = 0
    for (let j = 0; j <= i; j++) {
      lSum += nums[j]
    }

    for (let j = i + 1; j < nums.length; j++) {
      rSum += nums[j]
    }

    // console.log(lSum, rSum);
  }
}

// same using prefixsum
var countPartitions = function (nums) {
  let totalSum = nums.reduce((a, b) => a + b, 0)
  let lSum = 0

  for (let i = 0; i < nums.length; i++) {
    lSum += nums[i]
    let rSum = totalSum - lSum

    console.log(lSum, rSum)
  }
}

// now, finding diff
var countPartitions = function (nums) {
  let totalSum = nums.reduce((a, b) => a + b, 0)
  let lSum = 0
  let count = 0

  for (let i = 0; i < nums.length - 1; i++) {
    lSum += nums[i]
    let rSum = totalSum - lSum

    let diff = lSum - rSum
    if (diff % 2 === 0) {
      count++
    }

    // console.log(diff)
  }
  // console.log(count)
  return count
}

// this was the brute force, simple sol

// intuition:
// for each partition index i:
// leftSum = sum(0 ... i)
// rightSum = sum(i+1 ... n-1)
// condition: leftSum - rightSum must be even
// since rightSum = totalSum - leftSum,
// difference becomes:
// leftSum - (totalSum - leftSum)
// diff = 2 * leftSum - totalSum
// 2 * leftSum is always even
// so expression is: even - totalSum
// this is even only if totalSum is even
// therefore:
// if totalSum is odd, no valid partitions
// if totalSum is even, every partition works
// number of possible partitions = n - 1

// approach:
// compute totalSum
// if totalSum is odd, return 0
// otherwise, return n - 1

var countPartitions = function (nums) {
  let totalSum = 0

  for (let num of nums) {
    totalSum += num
  }

  if (totalSum % 2 !== 0) {
    return 0
  }

  return nums.length - 1
}

// time complexity: O(n)
// space complexity: O(1)
