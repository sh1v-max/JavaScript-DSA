// 111. Minimum Depth of Binary Tree
// https://leetcode.com/problems/minimum-depth-of-binary-tree/

// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 2
// Example 2:
// Input: root = [2,null,3,null,4,null,5,null,6]
// Output: 5

// approach: recursive (bottom up)
// if root is null, return 0
// return 1 + Math.min(minDepth(root.left), minDepth(root.right)) + 1

var minDepth = function (root) {
  // base case
  if (root === null) return 0

  // right
  if (root.left === null) {
    return minDepth(root.right) + 1
  }
  // left
  if (root.right === null) {
    return minDepth(root.left) + 1
  }

  // shortest path
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1
}
