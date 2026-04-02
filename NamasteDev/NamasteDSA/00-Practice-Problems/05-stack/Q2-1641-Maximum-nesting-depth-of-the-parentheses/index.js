// 1614-Maximum-Nesting-Depth-of-the-Parentheses
// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/

// intuition:
// we need to find how deep parentheses are nested
// every '(' increases depth
// every ')' decreases depth
// track maximum depth reached during traversal

// approach:
// initialize current depth = 0 and maxDepth = 0
// iterate through string:
// - if char is '(': increase depth and update maxDepth
// - if char is ')': decrease depth
// return maxDepth

var maxDepth = function (s) {
  let depth = 0
  let maxDepth = 0

  for (let char of s) {
    if (char === '(') {
      depth++
      maxDepth = Math.max(maxDepth, depth)
    } else if (char === ')') {
      depth--
    }
  }
  return maxDepth
}

// time complexity: O(n)
// space complexity: O(1)
