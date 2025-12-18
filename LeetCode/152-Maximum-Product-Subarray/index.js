// 152. Maximum Product Subarray
// https://leetcode.com/problems/maximum-product-subarray/

// given an integer array nums, find a subarray that has the largest product, and return the product.

// example 1:
// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.

// example 2:
// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

// - unlike sum-based problems, multiplication behaves differently:
//   - a negative number can flip the sign
//   - zero resets the product
//   - two negatives can produce a large positive
// - because of sign flips, we cannot track only the maximum product so far
// - we must also track the minimum product so far, since it can become
//   the maximum when multiplied by a negative number

// intuition:
// - this is a dynamic programming problem similar to Kadane’s algorithm
// - at every index i, we want to know:
//    - the maximum product of a subarray ending at index i
//    - the minimum product of a subarray ending at index i
// - why track the minimum?
//        because min × negative → potentially large positive
// - at index i, we have three choices:
//     - start a new subarray with nums[i]
//     - extend the previous max-product subarray
//     - extend the previous min-product subarray
// - the best and worst products at index i depend only on index i−1
// - this allows us to do DP in O(1) space

// approach (Kadane-style DP with sign handling):
// - initialize:
//        maxProdSoFar = minProdSoFar= totalMax = nums[0]
//   (this correctly handles single-element and all-negative cases)
// - iterate from index 1 to n − 1
// - for each nums[i]:
//        store the previous maxProdSoFar in a temporary variable
//        (because maxProdSoFar will be updated before computing minProdSoFar)
// - compute the new max product ending at i as:
//        max(nums[i], maxProdSoFar × nums[i], minProdSoFar × nums[i])
// - compute the new min product ending at i as:
//        min(nums[i], maxProdSoFar × nums[i], minProdSoFar × nums[i])
// - update totalMax using the current maxProdSoFar
// - after processing all elements, totalMax holds the answer

var maxProduct0 = function (nums) {
  let maxProdSoFar = nums[0]
  let minProdSoFar = nums[0]
  let totalMax = nums[0]

  // we will be starting from index 1, because we have already initialized our variables with index 0 value
  for (let i = 1; i < nums.length; i++) {
    let tempMaxProd = maxProdSoFar
    maxProdSoFar = Math.max(
      nums[i],
      maxProdSoFar * nums[i],
      minProdSoFar * nums[i]
    )
    // by the time we reach here, maxProdSoFar is already updated, so we're maintaining a copy of its previous value in tempMaxProd
    minProdSoFar = Math.min(
      nums[i],
      tempMaxProd * nums[i],
      minProdSoFar * nums[i]
    )

    // now, updating the totalMax
    totalMax = Math.max(totalMax, maxProdSoFar)
  }

  return totalMax
}

// time: O(n), each element is processed exactly once
// space: O(1), only a fixed number of variables are used

// ======================================================
// another approach: two way traversal
// - idea: product of subarray can be maximized by considering products from both directions
// - we do two passes: left to right and right to left
// - in each pass, we maintain a running product
// - if we encounter a zero, we reset the product to 1
// - at each step, we update the maximum product found so far
// why this works:
// - left-to-right pass handles cases where the optimal subarray
//   starts early but ends before a negative suffix
// - right-to-left pass handles cases where the optimal subarray
//   starts after a negative prefix
// - together, both passes cover all valid maximal product segments
//   without explicitly tracking min/max states

// intuition (two-pass product scan):
// - the difficulty in maximum product subarray comes from:
//     -negative numbers flipping signs
//     -zeros breaking subarrays
// - unlike sum, we cannot greedily discard a prefix just because it looks bad
// - key observation:
//   -the maximum product subarray must lie entirely
//   -between two zeros (or array boundaries)
// - within such a segment, the maximum product is either:
//     -the product of the entire segment
//     -or the product after removing a prefix up to the first negative
//     -or the product after removing a suffix after the last negative
// - instead of explicitly tracking negatives,
//   we can implicitly cover all cases by scanning:
//      -left to right
//      -right to left
// - this way, every possible contiguous product segment is considered
// - zeros act as natural reset points for subarrays

// approach:
// - initialize:
//   -ltrProd  = 1, product while scanning left to right
//   -rtlProd  = 1, product while scanning right to left
//   -finalMax = -Infinity
// - iterate i from 0 to n - 1:
//     -multiply nums[i] into ltrProd
//     -multiply nums[n - 1 - i] into rtlProd
// - after each multiplication:
//   -update finalMax with the maximum of:
//     -finalMax, ltrProd, rtlProd
// - handle zeros:
//   -if ltrProd becomes 0, reset it to 1
//   -if rtlProd becomes 0, reset it to 1
//   (because any subarray crossing a zero has product 0,
//    and a new subarray must start after the zero)
// - after the loop, finalMax contains the maximum product subarray

var maxProduct = function (nums) {
  let n = nums.length
  let ltrProd = (rtlProd = 1)
  let finalMax = -Infinity

  // values for left to right and right to left
  for (let i = 0; i < n; i++) {
    ltrProd = ltrProd * nums[i]
    finalMax = Math.max(finalMax, ltrProd)
    // checking if we encounter 0, then reset the product to 1
    if (ltrProd === 0) ltrProd = 1
  }

  for (let i = n - 1; i >= 0; i--) {
    rtlProd = rtlProd * nums[i]
    finalMax = Math.max(finalMax, rtlProd)
    // checking if we encounter 0, then reset the product to 1
    if (rtlProd === 0) rtlProd = 1
  }

  return finalMax
}

// time: O(n), a single loop processes the array once
// space: O(1), only constant extra variables are used

// doing the above process in a single loop
var maxProduct = function (nums) {
  let n = nums.length
  let ltrProd = (rtlProd = 1)
  let finalMax = -Infinity

  for (let i = 0; i < n; i++) {
    ltrProd = ltrProd * nums[i]
    rtlProd = rtlProd * nums[n - i - 1]
    finalMax = Math.max(finalMax, ltrProd, rtlProd)
    // checking if we encounter 0, then reset the product to 1
    if (ltrProd === 0) ltrProd = 1
    if (rtlProd === 0) rtlProd = 1
  }

  return finalMax
}
