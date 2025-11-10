// 108. Convert Sorted Array to Binary Search Tree
// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

// given a sorted (in ascending order) integer array nums, convert it to a height-balanced binary search tree.

// a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differs by more than one

// a BST is a binary tree in which for each node:
// left subtree < node < right subtree

// Example 1:
// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:

// Example 2:
// Input: nums = [1,3]
// Output: [3,1]
// Explanation: [1,3] and [3,1] are both a height-balanced BSTs.

// recursion
// intuition:
// the array is sorted in ascending order, and we need a height-balanced BST
// in a balanced BST, the middle element should be the root,
// because it divides the array into two equal halves — left < root < right
// this naturally ensures both subtrees have nearly equal height
// we can recursively build the tree by choosing the middle element
// as the root at each step, and repeating the process for both halves
// - pick mid index as the root
// - recursively build left subtree from left half
// - recursively build right subtree from right half
// stop when left > right (no elements left to process)

// approach:
// define a helper function buildTree(left, right):
//   if left > right, return null (base case)
//   find mid = Math.floor((left + right) / 2)
//   create a new TreeNode(nums[mid])
//   recursively build left subtree: buildTree(left, mid - 1)
//   recursively build right subtree: buildTree(mid + 1, right)
//   return the constructed node
// finally, call buildTree(0, nums.length - 1) and return the root

var sortedArrayToBST = function (nums) {
  const buildTree = (left, right) => {
    if (left > right) return null // base case — no elements left

    const mid = Math.floor((left + right) / 2)
    const node = new TreeNode(nums[mid]) // middle element is root

    node.left = buildTree(left, mid - 1) // build left subtree
    node.right = buildTree(mid + 1, right) // build right subtree

    return node
  }

  return buildTree(0, nums.length - 1)
}

// time complexity: O(n)
// each element is visited once to create a node
// space complexity: O(log n)
// recursion stack depth, balance tree height