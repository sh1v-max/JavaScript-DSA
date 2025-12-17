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

var maxProduct = function (nums) {
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
