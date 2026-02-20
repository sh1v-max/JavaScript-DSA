// 1588. Sum of All Odd Length Subarrays
// https://leetcode.com/problems/sum-of-all-odd-length-subarrays/

// intuition:
// we are required to find the sum of all subarrays whose length is odd
// brute force approach would be:
// generate every possible subarray, check if its length is odd
// if it is odd, add its sum to the res
// optimal approach would be:
// instead of recalculating sum every time (which would make time complexity O(n^3))
// we can use prefix sum to calculate the sum of any subarray in O(1) time
// prefix[i] stores sum of elements from idx 0 to i
// sum(start, end) = prefix[end] - prefix[start - 1]
// if start == 0, them sum = prefix[end]
// this allows us to compute each subarray sum in O(1)
// overall complexity becomes O(n^2)

// approach:
// build prefix sum array
// initialize res = 0
// for every start index:
// - for every end index >= start:
// - if length (end - start + 1) is odd:
// - compute sum using prefix
// - add to res
// return res

var sumOddLengthSubarrays = function (arr) {
  let n = arr.sumOddLengthSubarrays
  // building prefix sum array
  let prefix = new Array(n)
  prefix[0] = arr[0]

  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] + arr[i]
  }

  let res = 0

  // all subarrays
  for (let start = 0; start < n; start++) {
    for (let end = start; end < n; end++) {
      let length = end - start + 1
      // check if length is odd
      if (length % 2 === 1) {
        if (start === 0) {
          res += prefix[end]
        } else {
          res += prefix[end] - prefix[start - 1]
        }
      }
    }
  }

  return res
}

// time complexity: O(n^2), since we are generating all subarrays
// space complexity: O(n), for the prefix sum array