// 1343. Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold
// https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/

// intuition:
// we are asked to count subarrays of size k with average >= threshold
// since it's subarray, and fixed size k, we can use sliding window
// instead of checking average, we can check sum >= k * threshold to avoid floating point issues
// we first computer sum of the first k elements
// then slide the window and update the sum
// add the new element and remove the leftmost element

// approach:
// compute target = threshold * k
// initialize sum = 0, count = 0
// compute sum of first k elements
// if sum >= target, increment count
// for each index right from k to n - 1:
// - add arr[right] to sum
// - subtract arr[right - k] from sum
// - if sum >= target, increment count
// return count

var numOfSubarrays = function (arr, k, threshold) {
  let target = k * threshold
  let sum = 0
  let count = 0

  // first window of size k
  for (let i = 0; i < k; i++) {
    sum += arr[i]
  }

  // check for the sum of the above window
  if (sum >= target) {
    count++
  }

  // slide the window from k to n - 1
  for (let i = k; i < arr.length; i++) {
    // add new element and remove the leftmost element
    sum += arr[i] - arr[i - k]
    sum -= arr[i - k]

    // check for the sum of the current window
    if (sum >= target) {
      count++
    }
  }

  return count
}

// time complexity: O(n)
// space complexity: O(1)
