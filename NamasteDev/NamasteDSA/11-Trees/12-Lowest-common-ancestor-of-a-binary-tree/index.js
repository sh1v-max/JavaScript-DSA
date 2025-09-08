// 236. Lowest Common Ancestor of a Binary Tree
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/

// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

// All nodes have a value, and a tree is represented as such:

// The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).

// Example 1:

// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// Output: 3
// Explanation: The LCA of nodes 5 and 1 is 3.
// diagram:

//        3
//     /    \
//    5      1
//   / \    / \
//  6   2  0   8
//     / \
//    7   4

// intuition: recursive, bottom-up approach
// we want the lowest node where both p and q appear in its subtree
// each node counts how many of p and q exist in its subtree
// for every node, we check:
// 1. how many targets are in the left subtree
// 2. how many targets are in the right subtree
// 3. whether the current node itself is p or q
// then we sum them to get the total number of targets in this subtree
// the first node where total reaches 2 is the lca

// approach:
// define a variable lca = null, and recursive fn
//   if node is null, return 0
//   call traversal on left and right subtrees to get leftCount and rightCount
//   check if current node is p or q, set count = 1 if yes, else 0
//   count = leftCount + rightCount + count
//   if count === 2 and lca is not set yet, set lca = curr
//   return count
// call traversal on root
// return lca

function lowestCommonAncestor(root, p, q) {
  let lca = null
  let traversal = (curr) => {
    let count = 0
    if (!curr) return 0
    let leftCount = traversal(curr.left)
    let rightCount = traversal(curr.right)

    // for bottom up approach, we write logic after calling recursion
    if (curr.val === p.val || curr.val === q.val) {
      count++
    }
    count = count + leftCount + rightCount
    if (count === 2 && !lca) {
      lca = curr
    }
    return count
  }
  traversal(root)
  return lca
}

// time complexity: O(n)
// space complexity: O(n)