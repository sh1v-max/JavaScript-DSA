// 700. Search in a Binary Search Tree
// https://leetcode.com/problems/search-in-a-binary-search-tree/

// You are given the root of a binary search tree (BST) and an integer val.
// Find the node in the BST that the node's value equals val and return the subtree rooted with that node.
// If such a node does not exist, return null.

// example:
// Input: root = [4,2,7,1,3], val = 2
// Output: [2,1,3]

// intuition:
// all nodes in left are smaller than root
// all nodes in right are greater than root

// Approach 1: recursive top down
// start from root
// if root matches val, return root
// if val < cur node, go left
// if val > cur node, go right
// if we reach null, return null

var searchBST = function (root, val) {
  if (!root) return null
  if (root.val == val) return root
  if (val < root.val) {
    // we'll only look in left
    return searchBST(root.left, val)
  } else {
    // look in right
    return searchBST(root.right, val)
  }
}

// recursive bottom up
// intuition:
// in bottom-up style, we let recursion "dig down" to the leaf first,
// then bubble the answer back up the call stack.
// instead of checking the target at the top (like top-down),
// each recursive call asks its children: 
//   "do you have the value i'm looking for?"
// the first non-null subtree found will be returned upward.

// approach:
// base case: if current node is null, return null
// if current node value matches val, return current node
// otherwise, recursively search left or right subtree
// (like top-down), but the return value bubbles back up
// if neither subtree returns a valid node, return null
var searchBST = function (root, val) {
  if (!root) return null
  if (root.val == val) return root

  return root.val < val ? searchBST(root.right, val) : searchBST(root.left, val)
}

// time: O(h) height of tree
// space: O(h) recursive stack

// intuition
// we'll traverse down
// as it's already sorted, move left if val < curr node
// move right if val > curr node
// stop when find the node or is null

// approach 2: Iterative
// start from root
// while curr is not null
// if curr matches val, return curr
// if val < curr node, go left
// if val > curr node, go right
// if we reach null, return null

var searchBST = function (root, val) {
  let curr = root
  while (curr) {
    if (curr.val === val) return curr
    if (val < curr.val) {
      curr = curr.left
    } else {
      curr = curr.right
    }
  }
  return null
}

// time: O(h) height of tree
// space: O(1) iterative, O(h) recursive
