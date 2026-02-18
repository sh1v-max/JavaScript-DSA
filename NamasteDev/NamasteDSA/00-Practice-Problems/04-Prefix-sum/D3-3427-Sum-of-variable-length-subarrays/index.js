// 3472. Sum of Variable Length Subarrays
// https://leetcode.com/problems/sum-of-variable-length-subarrays/

// intuition:
// for every index i, the problem forces us to take a subarray that ends at i
// but the starting point of that subarray depends on nums[i]
// specifically:
// start = max(0, i - nums[i])
// so for each i, we must compute the sum of nums[start ... i]
// brute force approach:
// for every i, loop from start to i and calculate the sum
// this works, but it repeats work many times
// because overlapping elements are added again and again, time complexity is O(n^2)
// optimized approach: use prefix sum to avoid repeating work
// if we already know the sum from index 0 to any index,
// then we can compute any range sum in O(1)
// let prefix[i] = sum of elements from index 0 to i
// then: sum(start ... i) = prefix[i] - prefix[start - 1]
// if start == 0: sum(start → i) = prefix[i]
// so instead of recalculating sums,
// we precompute prefix sums once,
// and then each required subarray sum becomes constant time
// this reduces total time complexity from O(n²) to O(n)

// approach (prefix sum):
// build prefix sum array
// initialize res = 0
// for each i:
// - compute start = max(0, i - nums[i])
// - if start === 0, add prefix[i] to res
// - else, add prefix[i] - prefix[start - 1] to res
// return res

var subarraySum = function (nums) {
  let n = nums.length
  let prefix = new Array(n)

  prefix[0] = nums[0]

  // building prefix sum array
  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] + nums[i]
  }

  let res = 0

  for (let i = 0; i < n; i++) {
    let start = Math.max(0, i - nums[i])

    if (start === 0) {
      res += prefix[i]
    } else {
      res += prefix[i] - prefix[start - 1]
    }
  }

  return res
}

// time complexity: O(n), to build prefix sum array and compute res
// space complexity: O(n), for prefix sum array
