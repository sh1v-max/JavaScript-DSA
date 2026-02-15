// 3318.Find X-sum of all K-long subarray I
// https://www.leetcode.com/problems/find-x-sum-of-all-k-long-subarray-i/

// process:
// we are given all subarrays of length k
// for each subarray, we must compute something called x-sum
// x-sum depends on frequency, not order
// for each subarray:
// 1. count freq of every element
// 2. puck the top x most frequent elem
// 3. for two of more same freq, pick larger elem first
// 4. sum those x elements to get x-sum for that subarray

// intuition:
// this is a sliding window problem
// for each window, we build a freq map
// then we sort the freq based on freq and elem value
// take the first x element from sorted list
// add (val * freq) to get the x-sum
// if distinct elements < x, sum the whole window

// approach:
// slide a window of size k from left to right
// for each window:
// - build a freq map
// - convert the map to an array of [val, freq]
// - sort by freq descending, then val descending
// - take the first x entries
// - compute the sum using val * freq
// store the res for each window
// return the res array

var findXSum = function (nums, k, x) {
  let n = nums.length
  let res = []

  for (let i = 0; i <= n - k; i++) {
    let freq = new Map()

    // build frequency map for window
    for (let j = i; j < i + k; j++) {
      freq.set(nums[j], (freq.get(nums[j]) || 0) + 1)
    }

    // convert to array [value, frequency]
    let arr = Array.from(freq.entries())

    // sort by frequency desc, then value desc
    arr.sort((a, b) => {
      if (b[1] !== a[1]) return b[1] - a[1]
      return b[0] - a[0]
    })

    let sum = 0

    // take top x elements
    for (let t = 0; t < Math.min(x, arr.length); t++) {
      sum += arr[t][0] * arr[t][1]
    }

    res.push(sum)
  }

  return res
}

// time complexity: O(n * k log k) where n is length of nums, k is window size
// space complexity: O(k) for frequency map and array