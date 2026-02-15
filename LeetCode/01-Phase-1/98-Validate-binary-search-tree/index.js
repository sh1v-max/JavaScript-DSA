// 98. Validate Binary Search Tree
// https://leetcode.com/problems/validate-binary-search-tree/
// Difficulty: Medium

const { isValidElement } = require('react')

// given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:
// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// example:
// Input: root = [2,1,3]
//      2
//     / \
//    1   3
// Output: true

// example:
// Input: root = [5,1,4,null,null,3,6]
//      5
//     / \
//    1   4
//       / \
//      3   6
// Output: false
// explanation: Node 3 is invalid, even though it's less than 4 (its parent), because it’s also supposed to be greater than 5 (the root). That’s why we need to carry the range down from ancestors, not just check parent-child relationships

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

// intuition
// anything on left must be less than root
// anything on right must be greater than root
// left and right subtree must also be valid BST

// approach: recursive bottom-up DFS
// start at the root with low = null, high = null
// now for each node
// if it breaks the range rule, return false
// call recursion to check left and right subtree passing update upper val (curr.val)
// base case will trigger at the leaf, if(!curr) return true
// return true

var isValidBST = function (root) {
  let isBST = (curr, low, high) => {
    // base case
    // when at leaf, return true
    if (!curr) return true

    // checking for the false cases
    if (low != null && curr.val <= low) {
      return false
    }
    if (high != null && curr.val >= high) {
      return false
    }

    let isLeftBST = isBST(curr.left, low, curr.val)
    let isRightBST = isBST(curr.right, curr.val, high)

    return isLeftBST && isRightBST
  }
  return isBST(root, null, null)
}

// can also write as
var isValidBST = function (root, left = null, right = null) {
  // base case
  // when at leaf, return true
  if (!curr) return true

  // checking for the false cases
  if (low != null && curr.val <= low) {
    return false
  }
  if (high != null && curr.val >= high) {
    return false
  }

  let isLeftBST = isBST(curr.left, low, curr.val)
  let isRightBST = isBST(curr.right, curr.val, high)

  return isLeftBST && isRightBST
}

// time: O(n)
// space: O(n)

// top-down: it pushes constraints down the tree, low and high
// bottom-up: it pulls back min/max values up, and checks at parent
