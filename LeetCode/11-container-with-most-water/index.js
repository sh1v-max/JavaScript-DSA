// 11. Container With Most Water
// https://leetcode.com/problems/container-with-most-water/

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Example 1:
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

// brute force
// traverse and check for all possible area
// return the max

function maxArea(height) {
  let max = 0
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const area = Math.min(height[i], height[j]) * (j - i)
      if (area > max) max = area
    }
  }
  return max
}

// time complexity: O(n^2)
// space complexity: O(1)

// better approach: using two pointer, greedy

// Intuition
// using two pointer
// move the pointer which has less height inward, because less height will impact the area
// keep shrinking until both pointers meet

// approach:
// two pointers, l = 0, r = n - 1
// keep traversing until l < r
// find the area using min(height[l], height[r]) * (r - l)
// update max area
// move the pointer which has less height inward

function maxArea(height) {
  let max = 0
  let l = 0
  let r = height.length - 1
  while (l < r) {
    const area = Math.min(height[l], height[r]) * (r - l)
    if (area > max) {
      max = area
    }
    if (height[l] < height[r]) {
      l++
    } else {
      r--
    }
  }
  return max
}

// time complexity: O(n)
// space complexity: O(1)
