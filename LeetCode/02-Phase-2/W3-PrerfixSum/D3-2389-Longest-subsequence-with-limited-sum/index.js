// 2389-Longest-subsequence-with-limited-sum
// https://leetcode.com/problems/longest-subsequence-with-limited-sum/

// intuition:
// we are given an array nums and multiple queries
// for each query, we must find the maximum size of a subsequence
// such that the sum of its elements is <= query value
// since all numbers are positive,
// to maximize the number of elements under a sum limit,
// we should always pick the smallest numbers first (greedy)
// so the plan is:
// -sort nums in ascending order
// -build a prefix sum array: prefix[i] = sum of first (i + 1) smallest numbers
// -for each query, we need to find the largest prefix whose sum <= query
//
// since prefix sum array is sorted (increasing),
// we can use binary search for each query
// to find the maximum valid length efficiently

// approach:
// sort nums in ascending order
// build prefix sum array
// for each query:
//   use binary search on prefix array
//   find the largest index where prefix[index] <= query
//   answer = index + 1 (since index is 0-based)
// return answer array

var answerQueries = function(nums, queries) {
  // step 1: sort nums
  nums.sort((a, b) => a - b)

  let n = nums.length
  let prefix = new Array(n)

  // step 2: build prefix sum
  prefix[0] = nums[0]
  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] + nums[i]
  }

  let result = []

  // step 3: process each query using binary search
  for (let q of queries) {
    let left = 0
    let right = n - 1
    let answer = 0

    while (left <= right) {
      let mid = Math.floor((left + right) / 2)

      if (prefix[mid] <= q) {
        answer = mid + 1   // valid length
        left = mid + 1     // try to find longer one
      } else {
        right = mid - 1
      }
    }

    result.push(answer)
  }

  return result
}

// time complexity:
// sorting -> O(n log n)
// for each query (m queries) -> O(m log n)
// total -> O(n log n + m log n)
//
// space complexity: O(n)