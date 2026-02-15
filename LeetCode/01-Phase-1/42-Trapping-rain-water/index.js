// 42. trapping-rain-water
// https://leetcode.com/problems/trapping-rain-water/

// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// Example 1:
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
//

// Example 2:
// Input: height = [4,2,0,3,2,5]
// Output: 9

// Brute Force approach

// Intuition:
// we know that the water trapped at any index will depends on the bars with max height on either side
// and the minimum of both maxHeight will impact the water level
// also the height of it's own

// for each index, find the tallest bar on the left and right
// then trapped water at that index = min(maxLeft, maxRight) - height[i]
// it will show time exceeds on leetcode when submitting

function trap(height) {
  let n = height.length
  let res = 0

  for (let i = 0; i < n; i++) {
    let maxL = 0
    for (let l = 0; l <= i; l++) {
      maxL = Math.max(maxL, height[l])
    }

    let maxR = 0
    for (let r = i; r < n; r++) {
      maxR = Math.max(maxR, height[r])
    }

    res += Math.min(maxL, maxR) - height[i]
  }

  return res
}

// time complexity: O(n^2)
// space complexity: O(1)

// better approach

// intuition:
// at any index i, the water trapped depends on the tallest bar to its left and right
// the water level at i = min(maxLeft, maxRight) - height[i]
// instead of recomputing max left and right for every index (brute force),
// we can precompute them once for all indices using two arrays

// approach:
// create an array maxL where maxL[i] = max height from index 0 to i
// create an array maxR where maxR[i] = max height from index n-1 to i
// loop through each index i, and calculate water at i as min(maxL[i], maxR[i]) - height[i]
// sum up water at all indices to get total trapped water

function trap(height) {
  let n = height.length

  let maxL = []
  // finding the maxL array for each index
  maxL[0] = height[0]
  for (let i = 1; i < n; i++) {
    maxL[i] = Math.max(maxL[i - 1], height[i])
  }

  let maxR = []
  // finding the maxR array for each index
  maxR[n - 1] = height[n - 1]
  for (let i = n - 2; i >= 0; i--) {
    maxR[i] = Math.max(maxR[i + 1], height[i])
  }

  let res = 0
  for (let i = 0; i < n; i++) {
    let water = Math.min(maxL[i], maxR[i]) - height[i]
    res = res + (water < 0 ? 0 : water)
  }

  return res
}

// time complexity: O(n), Space complexity: O(n)

// most optimum approach: two pointer

// Intuition:
// we know that the water trapped at any index will depends on the bars with max height on either side
// we will consider the min of the max bars on the left and right, because that will impact the total water
// also the height of it's own

// approach:
// we'll use two pointers
// l = 0, r = n - 1
// maintain leftMax and rightMax at each index
// move the pointer with the smaller max height inward, because that will impact the water level
// keep iterating until l < r

function trap(height) {
  let l = 0
  let r = height.length - 1
  let maxL = 0
  let maxR = 0
  let water = 0

  while (l < r) {
    if (height[l] < height[r]) {
      if (height[l] >= maxL) {
        maxL = height[l]
      } else {
        water += maxL - height[l]
      }
      l++
    } else {
      if (height[r] >= maxR) {
        maxR = height[r]
      } else {
        water += maxR - height[r]
      }
      r--
    }
  }

  return water
}

// time complexity: O(n)
// space complexity: O(1)