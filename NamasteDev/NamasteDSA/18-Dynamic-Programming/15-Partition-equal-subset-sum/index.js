// 416. Partition Equal Subset Sum
// https://leetcode.com/problems/partition-equal-subset-sum/

// Given a non-empty array nums containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

// Example 1:
// Input: nums = [1,5,11,5]
// Output: true
// Explanation: The array can be partitioned as [1,5,5] and [11].
// Example 2:

// Input: nums = [1,2,3,5]
// Output: false
// Explanation: The array cannot be partitioned into equal sum subsets

// intuition:
// - we are NOT looking for a contiguous subarray
// - we are free to pick or skip any element (subsequence / subset)
// - the problem reduces to:
//     "can we find a subset whose sum is totalSum / 2?"
// - if total sum is odd, it's impossible to split it into two equal halves
// - for each index, we decide:
//     pick the current element OR skip it
// - once we reach the required sum (remainingSum == 0),
//   we’ve successfully formed one subset
// - since the same (remainingSum, startIndex) can be reached
//   through different paths, we use DP (memoization)

// dp state definition:
// dp[remS][start] = true/false
// - remS, remaining sum we need to form
// - start, current index from which we’re allowed to pick elements
// important:
// - elements before `start` are already decided (picked or skipped)
// - dp state answers:
//     "is it possible to form sum = remS using elements
//      from index `start` to end?"

// base cases:
// - if remS == 0, true
//   (we have successfully formed the required subset)
// - if remS < 0, false
//   (we overshot the sum)
// - if dp[remS][start] is already computed, return it
//   (avoid recomputation)

// recurrence relation:
// for a given (remS, start):
//   try picking each element from index `start` onward
//   for i = start to n-1:
//       if fn(remS - arr[i], i + 1) == true:
//           dp[remS][start] = true
//           return true
//   if none of the choices work:
//       dp[remS][start] = false
//       return false

// approach (top-down DP / memoization):
// - compute total sum of array
// - if total sum is odd, return false
// - target sum = totalSum / 2
// - create a 2D dp array for memoization
// - start recursion with fn(targetSum, 0)
// - recursion explores valid subsets while dp prevents
//   exponential recomputation

var canPartition = function (nums) {
  let sum = nums.reduce((acc, curr) => acc + curr, 0)
  // if my total sum is odd, i can never reach 2 subset with equal sum
  if (sum % 2) return false
  sum = sum / 2

  let dp = Array.from({ length: sum + 1 }, () =>
    Array(nums.length).fill(undefined)
  )

  let fn = (remS, start) => {
    if (remS == 0) return true
    if (remS < 0) return false

    if (dp[remS][start] != undefined) return dp[remS][start]

    for (let i = start; i < nums.length; i++) {
      if (fn(remS - nums[i], i + 1)) {
        return (dp[remS][start] = true)
      }
    }
    return (dp[remS][start] = false)
  }

  return fn(sum, 0)
}

// time: O(n * targetSum)
// space: O(n * targetSum)